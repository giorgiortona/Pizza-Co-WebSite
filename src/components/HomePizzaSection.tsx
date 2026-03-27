import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Specialty = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

type HomePizzaSectionProps = {
  items: Specialty[];
  labels: {
    subtitle: string;
    title: string;
    desc: string;
    btn: string;
  };
};

export default function HomePizzaSection({
  items,
  labels,
}: HomePizzaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(titleRef.current, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Cards staggered reveal
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, 
          { y: 100, opacity: 0, scale: 0.95 }, 
          { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            duration: 1.2, 
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <section ref={sectionRef} className="pizza-section py-20 lg:py-32 relative z-10">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={titleRef} className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">
            {labels.subtitle}
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-dark leading-tight drop-shadow-sm">
            {labels.title}
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-brand-dark/70 max-w-2xl mx-auto">
            {labels.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div 
              key={index} 
              ref={el => { if (el) cardsRef.current[index] = el; }}
              className={`group relative overflow-hidden rounded-[2rem] bg-brand-card shadow-xl hover:shadow-2xl transition-all duration-500 ease-out border border-brand-red/10 ${index === 1 ? 'md:translate-y-12' : ''}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-[#09090b]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#fafaf9] mb-3 drop-shadow-md group-hover:text-brand-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-[#fafaf9]/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 flex justify-center">
          <a
            href="/menu"
            className="inline-flex rounded-full bg-brand-red px-10 py-5 text-sm font-bold tracking-[0.15em] uppercase text-brand-cream transition-all duration-300 hover:bg-brand-red-light hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:-translate-y-1"
          >
            {labels.btn}
          </a>
        </div>
      </div>
    </section>
  );
}
