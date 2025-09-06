import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = [
      { id: 'hero', element: null as HTMLElement | null },
      { id: 'como-funciona', element: null as HTMLElement | null },
      { id: 'funcionalidades', element: null as HTMLElement | null },
      { id: 'solucoes', element: null as HTMLElement | null },
      { id: 'precos', element: null as HTMLElement | null },
      { id: 'diferenciais', element: null as HTMLElement | null },
      { id: 'contato', element: null as HTMLElement | null }
    ];

    // Get all section elements
    sections.forEach(section => {
      if (section.id === 'hero') {
        section.element = document.querySelector('section[aria-labelledby="hero-heading"]');
      } else {
        section.element = document.getElementById(section.id);
      }
    });

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || 'hero';
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
      if (section.element) {
        observer.observe(section.element);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.element) {
          observer.unobserve(section.element);
        }
      });
    };
  }, []);

  return activeSection;
}