import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type Specialty = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

type HomeSpecialtiesStackProps = {
  items: Specialty[];
  labels: {
    subtitle: string;
    title: string;
    desc: string;
    btn: string;
  };
};

export default function HomeSpecialtiesStack({
  items,
  labels,
}: HomeSpecialtiesStackProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
        if (cards.length === 0) return;

        // Inizialmente mandiamo tutte le card (tranne la prima) molto in basso (fuori schermo)
        gsap.set(cards.slice(1), { y: "150vh" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsWrapperRef.current,
            start: "center center", // Fissa esattamente a metà schermo
            end: `+=${cards.length * 75}%`, // Scorrevolezza maggiore riducendo l'area di pin
            pin: true,
            scrub: 0.5, // Scrub più reattivo per sembrare più fluido
          }
        });

        // Creiamo dinamicamente l'animazione d'ingresso della pila
        cards.forEach((card, index) => {
          if (index === 0) return; // La card 0 non fa nulla, è già pronta.

          const previousCards = cards.slice(0, index);

          // La carta corrente sale verso l'alto (nella sua posizione assoluta)
          tl.to(card, {
            y: 0,
            duration: 1,
            ease: "none"
          })
          // ...e simultaneamente le carte sotto si rimpiccioliscono e scuriscono
          .to(previousCards, {
            scale: (i) => 1 - ((index - i) * 0.04), // Riduzione scalare morbida
            y: (i) => -((index - i) * 15),          // Micro spostamento in alto per il senso di stacking
            opacity: (i) => 1 - ((index - i) * 0.25), // Dim the ones further back
            duration: 1,
            ease: "none"
          }, "<");
        });

      });
    }, sectionRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <section className="specialita-section py-16 md:py-24 relative z-10 bg-brand-cream" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">
            {labels.subtitle}
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-serif text-brand-dark leading-tight">
            {labels.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-dark/70">
            {labels.desc}
          </p>
        </div>

        {/* 
          Wrapper: su mobile flex in colonna naturale, su desktop un blocco unico e ben calcolato per il layering 
        */}
        <div className="relative flex flex-col md:block md:h-[450px] lg:h-[500px] w-full" ref={cardsWrapperRef}>
          {items.map((item, index) => (
            <article 
              key={item.title} 
              ref={el => { cardsRef.current[index] = el; }}
              className="relative md:absolute top-0 left-0 w-full mb-12 sm:mb-16 md:mb-0 md:h-[450px] lg:h-[500px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-brand-dark/10 bg-brand-card shadow-2xl transition-shadow origin-top"
              style={{
                zIndex: index
              }}
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative min-h-[300px] md:min-h-full overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent md:hidden pointer-events-none"></div>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative bg-brand-card h-full">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 text-3xl sm:text-4xl font-serif text-brand-dark">
                      {item.title}
                    </h3>
                    <p className="mt-6 text-base sm:text-lg leading-relaxed text-brand-dark/70">
                      {item.description}
                    </p>
                    <a
                      href="/menu"
                      className="mt-10 inline-flex rounded-full bg-brand-red px-8 py-4 text-sm font-bold tracking-widest text-brand-cream transition-all duration-300 hover:bg-brand-red-light hover:shadow-lg hover:-translate-y-1"
                    >
                      {labels.btn}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}