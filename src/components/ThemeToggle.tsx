import React, { useEffect, useState } from "react";

const tDict = {
  it: { lunch: "Pranzo", dinner: "Cena", prep: "Preparando il Pranzo...", wait: "Aspettando la Cena..." },
  en: { lunch: "Lunch", dinner: "Dinner", prep: "Preparing Lunch...", wait: "Waiting for Dinner..." },
  fr: { lunch: "Déjeuner", dinner: "Dîner", prep: "Préparation du Déjeuner...", wait: "En attente du Dîner..." }
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"lunch" | "dinner">("lunch");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read from localStorage or default to lunch
    const storedTheme = localStorage.getItem("pizza_theme") as "lunch" | "dinner";
    if (storedTheme === "dinner") {
      setTheme("dinner");
      document.documentElement.setAttribute("data-theme", "dinner");
    } else {
      setTheme("lunch");
      document.documentElement.setAttribute("data-theme", "lunch");
    }
  }, []);

  const toggleTheme = () => {
    // If we're already animating, block
    if (document.getElementById("theme-transition-overlay")) return;

    const newTheme = theme === "lunch" ? "dinner" : "lunch";
    const lang = document.documentElement.lang as "it" | "en" | "fr";
    const t = tDict[lang] || tDict.it;
    
    // Create full screen overlay with matching colors
    const loader = document.createElement('div');
    loader.id = "theme-transition-overlay";
    loader.className = `fixed inset-0 z-[100] transition-opacity duration-700 flex flex-col items-center justify-center opacity-0 pointer-events-none 
      ${newTheme === 'dinner' ? 'bg-[#09090b] text-[#fafaf9]' : 'bg-[#faf7f2] text-[#12100e]'}`;
    
    // Add cool logo or icon inside
    loader.innerHTML = `
      <img src="/logo.png" alt="Loading" class="w-16 h-16 rounded-full shadow-lg mb-6 animate-pulse" />
      <div class="font-serif text-2xl tracking-widest font-bold uppercase transition-transform duration-[2s] scale-95" id="theme-transition-text">
        ${newTheme === 'dinner' ? t.wait : t.prep}
      </div>
    `;
    document.body.appendChild(loader);

    // Fade in
    requestAnimationFrame(() => {
      loader.classList.remove("pointer-events-none");
      loader.style.opacity = '1';
      loader.querySelector("div")!.classList.replace("scale-95", "scale-105");

      // Once faded in completely (700ms)
      setTimeout(() => {
        // Change logic under the hood
        setTheme(newTheme);
        localStorage.setItem("pizza_theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        window.dispatchEvent(new CustomEvent("theme-toggled", { detail: newTheme }));

        // Hold it for half a second so it feels majestic
        setTimeout(() => {
          loader.style.opacity = '0';
          loader.classList.add("pointer-events-none");
          
          setTimeout(() => {
            loader.remove();
          }, 700);
        }, 600);
      }, 700);
    });
  };

  if (!mounted) {
    return <div className="w-[116px] md:w-[140px] h-10 md:h-12"></div>;
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center w-[116px] h-10 md:w-[140px] md:h-12 rounded-full p-1 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] overflow-hidden shadow-inner ml-2 focus:outline-none focus:ring-2 focus:ring-brand-gold/50
        ${
          theme === "lunch"
            ? "bg-[#e2e8f0] border border-brand-dark/5"
            : "bg-[#09090b] border border-brand-red/40"
        }
      `}
      aria-label="Toggle Lunch and Dinner Mode"
      aria-pressed={theme === "dinner"}
    >
      {/* Background slider pill / The glowing Thumb */}
      <div
        className={`absolute top-1 bottom-1 w-[53px] md:w-[66px] rounded-full transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] shadow-md flex items-center justify-center
          ${
            theme === "lunch"
              ? "left-1 bg-brand-card shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
              : "left-[59px] md:left-[69px] bg-gradient-to-tr from-brand-red-light to-brand-red shadow-[0_0_15px_rgba(225,29,72,0.4)]"
          }
        `}
      >
        {/* Thumb Icon */}
        {theme === "lunch" ? (
          <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </div>

      {/* Text labels */}
      <div className="relative z-10 flex w-full justify-between items-center px-[2px] pointer-events-none">
        <span
          className={`flex-1 text-center text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase transition-colors duration-700 ${
            theme === "lunch" ? "text-transparent" : "text-brand-dark/40"
          }`}
        >
          {tDict[document.documentElement.lang as "it"|"en"|"fr"]?.lunch || "Pranzo"}
        </span>
        <span
          className={`flex-1 text-center text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase transition-colors duration-700 ${
            theme === "lunch" ? "text-brand-dark/40" : "text-transparent"
          }`}
        >
          {tDict[document.documentElement.lang as "it"|"en"|"fr"]?.dinner || "Cena"}
        </span>
      </div>
    </button>
  );
}
