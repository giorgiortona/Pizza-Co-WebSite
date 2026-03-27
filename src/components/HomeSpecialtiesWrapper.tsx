import React, { useState, useEffect } from 'react';
import HomeSpecialtiesStack from './HomeSpecialtiesStack';
import HomePizzaSection from './HomePizzaSection';

type Specialty = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

type Labels = {
  subtitle: string;
  title: string;
  desc: string;
  btn: string;
};

export default function HomeSpecialtiesWrapper({
  lunchItems,
  lunchLabels,
  pizzaItems,
  pizzaLabels,
}: {
  lunchItems: Specialty[];
  lunchLabels: Labels;
  pizzaItems: Specialty[];
  pizzaLabels: Labels;
}) {
  const [theme, setTheme] = useState<'lunch' | 'dinner'>('lunch');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read current theme from the DOM to match the globally set theme
    const initialTheme = document.documentElement.getAttribute('data-theme') || 'lunch';
    setTheme(initialTheme as 'lunch' | 'dinner');
    setMounted(true);

    const handleThemeToggle = (e: Event) => {
      const customEvent = e as CustomEvent;
      // ThemeToggle.tsx dispatches 'theme-toggled' while the screen is blacked out
      setTheme(customEvent.detail);
    };

    window.addEventListener('theme-toggled', handleThemeToggle);
    return () => window.removeEventListener('theme-toggled', handleThemeToggle);
  }, []);

  if (!mounted) {
    // Render the lunch stack as a fallback for SSR/SSG to avoid massive layout shift
    return <HomeSpecialtiesStack items={lunchItems} labels={lunchLabels} />;
  }

  return (
    <>
      {theme === 'lunch' ? (
        <HomeSpecialtiesStack items={lunchItems} labels={lunchLabels} />
      ) : (
        <HomePizzaSection items={pizzaItems} labels={pizzaLabels} />
      )}
    </>
  );
}
