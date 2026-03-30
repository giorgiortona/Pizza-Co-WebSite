import React from 'react';

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
  return (
    <section className="specialita-section py-20 lg:py-32 relative z-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-24 max-w-2xl">
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

        <div className="relative flex flex-col pb-12">
          {items.map((item, index) => (
            <article 
              key={item.title} 
              className="md:sticky overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-brand-dark/10 bg-brand-card shadow-2xl mb-12 sm:mb-16 md:mb-[15vh] lg:mb-[25vh] last:!mb-0 transition-transform duration-500 ease-out"
              style={{
                top: `calc(6rem + ${index * 1.5}rem)`,
                zIndex: index
              }}
            >
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[300px] md:min-h-[450px] overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent md:hidden pointer-events-none"></div>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative bg-brand-card">
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