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
    // Rimuoviamo il vecchio localStorage per evitare conflitti
    if (localStorage.getItem("pizza_theme")) {
      localStorage.removeItem("pizza_theme");
    }

    let currentTheme = sessionStorage.getItem("pizza_theme") as "lunch" | "dinner" | null;
    if (!currentTheme) {
      const hour = new Date().getHours();
      currentTheme = (hour >= 7 && hour < 17) ? "lunch" : "dinner";
    }

    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
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
      <div class="font-serif text-2xl tracking-widest font-bold uppercase transition-transform duration-[2s] scale-95 text-center px-4 max-w-[90vw]" id="theme-transition-text">
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
        sessionStorage.setItem("pizza_theme", newTheme);
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

  const currentLang = document.documentElement.lang as "it"|"en"|"fr";
  const labelClass = currentLang === "fr" 
    ? "text-[8px] sm:text-[9px] tracking-tight sm:tracking-normal font-bold uppercase" 
    : "text-[9px] sm:text-[10px] tracking-normal sm:tracking-wide font-bold uppercase";

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
        className={`absolute top-1 bottom-1 w-[53px] md:w-[66px] rounded-[18px] transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] shadow-md flex items-center justify-center
          ${
            theme === "lunch"
              ? "left-1 bg-brand-card shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
              : "left-[59px] md:left-[69px] bg-gradient-to-tr from-brand-red-light to-brand-red shadow-[0_0_15px_rgba(225,29,72,0.4)]"
          }
        `}
      >
      </div>

      {/* Text labels */}
      <div className="relative z-10 flex w-full justify-between items-center px-[2px] pointer-events-none">
        <span
          className={`flex-1 truncate px-1 text-center transition-colors duration-700 ${labelClass} ${
            theme === "lunch" ? "text-brand-dark" : "text-white/40"
          }`}
        >
          {tDict[currentLang]?.lunch || "Pranzo"}
        </span>
        <span
          className={`flex-1 truncate px-1 text-center transition-colors duration-700 ${labelClass} ${
            theme === "lunch" ? "text-brand-dark/40" : "text-white"
          }`}
        >
          {tDict[currentLang]?.dinner || "Cena"}
        </span>
      </div>
    </button>
  );
}
