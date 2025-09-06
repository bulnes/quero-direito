import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = sectionId === 'hero'
      ? document.querySelector('section[aria-labelledby="hero-heading"]')
      : document.getElementById(sectionId);

    if (element) {
      const headerHeight = 80; // Header height
      const elementPosition = (element as HTMLElement).offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return { scrollToSection };
}