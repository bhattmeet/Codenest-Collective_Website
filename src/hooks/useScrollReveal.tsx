import { useEffect } from 'react';

/**
 * Hook to reveal elements with .scroll-reveal class when they enter viewport
 * Uses Intersection Observer for performance
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Stop observing once revealed (performance optimization)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px' // Start animation slightly before visible
      }
    );

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      document.querySelectorAll('.scroll-reveal').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);
};
