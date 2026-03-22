import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);
  let lastSparkleTime = 0;
  const SPARKLE_THROTTLE = 50; // ms

  useEffect(() => {
    // Desktop-only detection
    const isTouchDevice =
      ('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      ((navigator as any).msMaxTouchPoints > 0);

    if (isTouchDevice) return; // Exit on touch devices

    // Sparkle creation with throttling
    const createSparkle = (x: number, y: number) => {
      const now = Date.now();
      if (now - lastSparkleTime < SPARKLE_THROTTLE) return;
      lastSparkleTime = now;

      const sparkleCount = Math.random() > 0.5 ? 2 : 3;

      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'cursor-sparkle';

        // Random variant
        const variant = Math.floor(Math.random() * 3);
        if (variant === 1) sparkle.classList.add('variant-1');
        if (variant === 2) sparkle.classList.add('variant-2');

        // Random offset for natural look
        const offsetX = (Math.random() - 0.5) * 30;
        const offsetY = (Math.random() - 0.5) * 30;

        sparkle.style.left = (x + offsetX) + 'px';
        sparkle.style.top = (y + offsetY) + 'px';

        document.body.appendChild(sparkle);

        // Remove sparkle after animation
        setTimeout(() => {
          sparkle.remove();
        }, 800);
      }
    };

    // Cursor position tracking
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      createSparkle(e.clientX, e.clientY);
    };

    // Interactive element detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], input, textarea, select, .card-glass, .btn-primary, .btn-outline, .btn-gradient')) {
        setIsHovering(true);
        setIsTextHover(false);
      } else if (target.matches('h1, h2, h3, p')) {
        setIsTextHover(true);
        setIsHovering(false);
      } else {
        setIsHovering(false);
        setIsTextHover(false);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setIsTextHover(false);
    };

    // Hide cursor when leaving window
    const handleMouseLeave = () => {
      setPosition({ x: -100, y: -100 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className={`cursor-inner ${isHovering ? 'hover' : ''} ${isTextHover ? 'text-hover' : ''}`} />
      <div className={`cursor-outer ${isHovering ? 'hover' : ''} ${isTextHover ? 'text-hover' : ''}`} />
    </div>
  );
};

export default CustomCursor;
