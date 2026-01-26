import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const sparkleContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Detect if device is mobile/touch device
  const isMobile = () => {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    );
  };

  // Don't render custom cursor on mobile devices
  if (isMobile()) {
    return null;
  }

  useEffect(() => {
    const cursorInner = cursorInnerRef.current;
    const cursorOuter = cursorOuterRef.current;
    const sparkleContainer = sparkleContainerRef.current;

    if (!cursorInner || !cursorOuter || !sparkleContainer) return;

    let mouseX = 0;
    let mouseY = 0;
    let lastSparkleTime = 0;
    const sparkleThrottle = 40; // milliseconds between sparkles - faster for energy

    // WeakSet to track elements that already have listeners
    const trackedElements = new WeakSet();

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update cursor position instantly
      cursorInner.style.left = `${mouseX}px`;
      cursorInner.style.top = `${mouseY}px`;
      cursorOuter.style.left = `${mouseX}px`;
      cursorOuter.style.top = `${mouseY}px`;

      // Create sparkle trail
      const currentTime = Date.now();
      if (currentTime - lastSparkleTime > sparkleThrottle) {
        createSparkle(mouseX, mouseY);
        lastSparkleTime = currentTime;
      }
    };

    // Create sparkle effect
    const createSparkle = (x: number, y: number) => {
      const sparkleCount = Math.floor(Math.random() * 2) + 2; // 2-3 sparkles
      const colors = [
        'hsl(220 94% 64%)',  // Primary blue
        'hsl(199 85% 55%)',  // Cyan/teal accent
        'hsl(220 94% 74%)',  // Lighter blue variant
      ];

      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'cursor-sparkle';

        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.backgroundColor = color;
        sparkle.style.boxShadow = `0 0 10px ${color}`;

        // Random position offset within 30px radius
        const offsetX = (Math.random() - 0.5) * 60;
        const offsetY = (Math.random() - 0.5) * 60;
        sparkle.style.left = `${x + offsetX}px`;
        sparkle.style.top = `${y + offsetY}px`;

        // Random float direction
        const floatX = (Math.random() - 0.5) * 40;
        const floatY = -30 - Math.random() * 30;
        sparkle.style.setProperty('--float-x', `${floatX}px`);
        sparkle.style.setProperty('--float-y', `${floatY}px`);

        sparkleContainer.appendChild(sparkle);

        // Remove after animation completes
        setTimeout(() => {
          sparkle.remove();
        }, 600);
      }
    };

    // Add hover effects to interactive elements
    const addHoverEffects = (element: Element) => {
      if (trackedElements.has(element)) return;
      trackedElements.add(element);

      const isButton = element.matches('button, a, [role="button"]');
      const isText = element.matches('h1, h2, h3, p');

      if (isButton) {
        element.addEventListener('mouseenter', () => {
          cursorInner?.classList.add('cursor-hover-button');
          cursorOuter?.classList.add('cursor-hover-button');
        });
        element.addEventListener('mouseleave', () => {
          cursorInner?.classList.remove('cursor-hover-button');
          cursorOuter?.classList.remove('cursor-hover-button');
        });
      } else if (isText) {
        element.addEventListener('mouseenter', () => {
          cursorInner?.classList.add('cursor-hover-text');
          cursorOuter?.classList.add('cursor-hover-text');
        });
        element.addEventListener('mouseleave', () => {
          cursorInner?.classList.remove('cursor-hover-text');
          cursorOuter?.classList.remove('cursor-hover-text');
        });
      }
    };

    // Setup hover effects for all interactive elements
    const setupHoverEffects = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], h1, h2, h3, p'
      );
      interactiveElements.forEach(addHoverEffects);
    };

    // MutationObserver to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            const element = node as Element;

            // Check if the added node itself is interactive
            if (element.matches('button, a, [role="button"], h1, h2, h3, p')) {
              addHoverEffects(element);
            }

            // Check for interactive children
            const interactiveChildren = element.querySelectorAll(
              'button, a, [role="button"], h1, h2, h3, p'
            );
            interactiveChildren.forEach(addHoverEffects);
          }
        });
      });
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Handle mouse leave/enter window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Initial setup
    setupHoverEffects();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorInnerRef}
        className={`cursor-inner ${!isVisible ? 'cursor-hidden' : ''}`}
      />
      <div
        ref={cursorOuterRef}
        className={`cursor-outer ${!isVisible ? 'cursor-hidden' : ''}`}
      />
      <div ref={sparkleContainerRef} className="cursor-sparkle-container" />
    </>
  );
};

export default CustomCursor;
