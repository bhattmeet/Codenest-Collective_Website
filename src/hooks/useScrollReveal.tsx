import { useEffect } from 'react';

/**
 * Enhanced hook to reveal elements with animation classes when they enter viewport
 * Uses Intersection Observer for performance
 * Supports: .scroll-reveal, .animate-slide-in-bottom, .animate-slide-in-left, .animate-slide-in-right, .animate-scale-in
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
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
      // Observe all animation elements
      const selectors = [
        '.scroll-reveal',
        '.animate-slide-in-bottom',
        '.animate-slide-in-left',
        '.animate-slide-in-right',
        '.animate-scale-in'
      ];

      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((el) => {
          el.classList.add('opacity-0'); // Start hidden
          observer.observe(el);
        });
      });
    }, 100);

    return () => observer.disconnect();
  }, []);
};
