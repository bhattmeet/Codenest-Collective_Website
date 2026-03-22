# Portfolio Design Refinement for Codenest Collective Website

**Date:** 2026-03-21
**Status:** Approved
**Approach:** Hybrid CSS System with Design Tokens

## Overview

This document outlines the comprehensive design refinement for the Codenest Collective website, incorporating design patterns, animations, and interactive elements from the Meet Bhatt portfolio while maintaining the company's blue color scheme and all existing functionality.

## Objectives

- Apply portfolio-inspired glassmorphism, animations, and interactions site-wide
- Preserve Codenest blue/cyan color scheme (#5088FA, #42A5F5)
- Maintain all existing functionality (EmailJS, routing, forms, etc.)
- Ensure accessibility and performance best practices
- Create a reusable, maintainable design system

## Scope

**Pages to refine:**
- Home
- About
- Services
- Projects
- Company
- Resources
- Contact
- Careers

**Design elements to implement:**
- Glassmorphism cards with backdrop blur
- Custom cursor with sparkle trail (desktop only)
- Staggered entrance animations
- Scroll reveal system
- Enhanced buttons with shimmer effects
- Gradient overlays and dividers
- Technology badge hover effects
- Animated link underlines

---

## 1. Architecture Overview

### CSS System Structure

The design system will be organized in `src/index.css` with these layers:

**1. Design Tokens (CSS Variables)**
- Map portfolio's indigo/amber colors → Codenest blue/cyan colors
- Keep existing HSL color system
- Add new animation timing variables

**2. Base Styles**
- Enhanced typography with tighter line-heights (1.2 for headings)
- Smooth scroll behavior
- Custom cursor hiding on touch devices only

**3. Component Classes**
- `.btn-primary`, `.btn-outline`, `.btn-gradient` - Enhanced buttons with shimmer
- `.card-glass` - Glassmorphism cards with backdrop blur
- `.tech-badge` - Hover-reactive technology badges
- `.link-underline` - Animated underline links
- `.section-title` - Section headings with gradient underline

**4. Animation Utilities**
- `.fade-in-up`, `.fade-in-left`, `.fade-in-right` - Directional entrance animations
- `.stagger-1` through `.stagger-6` - Sequential animation delays (0.1s - 0.6s)
- `.scroll-reveal` - Intersection Observer triggered animations
- `.hover-lift` - Interactive hover elevation

**5. Custom Cursor**
- Dual-element design (inner dot + outer rotated square)
- Sparkle trail particles with randomized offsets
- Desktop-only with touch device detection
- Three states: default, hover (interactive elements), text-hover

### File Organization

```
src/
├── index.css (Enhanced with portfolio design system)
├── hooks/
│   └── useScrollReveal.tsx (New - reusable scroll reveal hook)
├── components/
│   ├── CustomCursor.tsx (New - site-wide cursor)
│   ├── ui/ (Existing shadcn components - see Component Modification Strategy below)
│   └── [existing components - className updates only]
├── pages/ (Existing pages - className updates only)
└── App.tsx (Add CustomCursor component)
```

### Component Modification Strategy

**shadcn/ui components that need enhancement:**

1. **Button (`src/components/ui/button.tsx`)**
   - Keep existing variants (default, destructive, outline, ghost, link)
   - Add new variants: `gradient` for CTAs
   - Existing code unchanged, add className support for `.btn-primary`, `.btn-gradient`, `.btn-outline`

2. **Card (`src/components/ui/card.tsx`)**
   - Keep existing Card, CardHeader, CardTitle, CardContent, CardFooter
   - Add className support for `.card-glass`
   - No breaking changes

3. **Badge (`src/components/ui/badge.tsx`)**
   - Keep existing variants
   - Add className support for `.tech-badge`
   - No breaking changes

4. **Input (`src/components/ui/input.tsx`)**
   - Add className support for `.input-glass`
   - Keep existing functionality
   - No breaking changes

**How to apply new styles:**

```tsx
// Option 1: Via className prop (recommended - no component changes)
<Button className="btn-gradient">Get Started</Button>
<Card className="card-glass">Content</Card>
<Badge className="tech-badge">React</Badge>

// Option 2: Keep using existing variants
<Button variant="default">Default Button</Button> // Still works

// Both approaches work side-by-side
```

**Components that need NO changes:**
- All other shadcn/ui components (Dialog, Sheet, Dropdown, etc.)
- Navigation, Footer (only className updates)
- TechStack, SEO, Analytics (no changes)
- ErrorBoundary, ScrollToTop (no changes)

### Key Principles

- **Non-breaking**: All changes are additive - existing classes remain functional
- **Color preservation**: Maintain Codenest blue (#5088FA) and cyan (#42A5F5) scheme
- **Accessibility-first**: Respect `prefers-reduced-motion`, touch device detection
- **Performance**: CSS-based animations (GPU accelerated), minimal JavaScript

---

## 2. Design Token Mapping

### Color Translation: Portfolio → Codenest

**Primary Colors**
```css
/* Portfolio */
--indigo-600: #6366F1
--indigo-700: #4F46E5
--indigo-500: #818CF8

/* Maps to Codenest */
--primary: 220 94% 64%        /* #5088FA - Logo blue */
--primary-hover: 220 94% 58%  /* Darker blue for hovers */
--primary-light: 199 85% 55%  /* #42A5F5 - Cyan highlight */
```

**Accent Colors**
```css
/* Portfolio */
--amber-500: #F59E0B
--amber-600: #D97706

/* Maps to Codenest */
--accent: 199 85% 55%         /* #42A5F5 - Teal/cyan for accents */
--accent-bright: 199 85% 65%  /* Lighter cyan for highlights */
```

**Background & Glass Effects**
```css
Light mode:
--background: 0 0% 100%           /* White */
--card-glass-bg: rgba(255, 255, 255, 0.6)  /* Light glass */
--card-glass-border: rgba(80, 136, 250, 0.2)  /* Blue tint border */

Dark mode:
--background: 215 30% 8%          /* Dark blue-gray */
--card-glass-bg: rgba(30, 41, 59, 0.6)  /* Portfolio-style glass */
--card-glass-border: rgba(80, 136, 250, 0.4)  /* Brighter border */
```

**Gradient Combinations**
```css
/* Portfolio: Indigo → Amber gradients */
background: linear-gradient(135deg, var(--indigo-600), var(--amber-500))

/* Codenest: Blue → Cyan gradients */
background: linear-gradient(135deg,
  hsl(220, 94%, 64%),    /* Primary blue */
  hsl(199, 85%, 55%)     /* Cyan accent */
)
```

### New CSS Variables to Add

```css
:root {
  /* Animation timings */
  --transition-fast: 150ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;

  /* Glass effect values */
  --glass-blur: 10px;
  --glass-opacity: 0.6;
  --glass-hover-opacity: 0.8;

  /* Hover transforms */
  --hover-lift: -4px;
  --hover-lift-small: -2px;

  /* Cursor colors (reuse primary/accent) */
  --cursor-primary: hsl(220, 94%, 64%);
  --cursor-accent: hsl(199, 85%, 55%);
}
```

---

## 3. Animation System

### Keyframe Animations

**Entrance Animations**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Interactive Animations**
```css
/* Shimmer effect for buttons */
@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Blob morph for custom cursor hover */
@keyframes blobMorph {
  0%, 100% { border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
  25% { border-radius: 60% 40% 60% 40% / 70% 30% 70% 30%; }
  50% { border-radius: 40% 60% 40% 60% / 30% 70% 30% 70%; }
  75% { border-radius: 50% 50% 30% 70% / 50% 50% 70% 30%; }
}

/* Rotating diamond cursor outer */
@keyframes rotateDiamond {
  from { transform: translate(-50%, -50%) rotate(45deg); }
  to { transform: translate(-50%, -50%) rotate(405deg); }
}

/* Sparkle particles */
@keyframes sparkleFloat {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(-30px) scale(0.3);
  }
}

@keyframes sparkleFloat1 {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) translate(20px, -20px) scale(0.2);
  }
}

@keyframes sparkleFloat2 {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) translate(-20px, -20px) scale(0.2);
  }
}
```

### Utility Classes

**Animation Classes**
```css
.fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.fade-in-left {
  animation: fadeInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.fade-in-right {
  animation: fadeInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}
```

**Stagger Delays** (bold timing from portfolio)
```css
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
.stagger-6 { animation-delay: 0.6s; }
```

**Scroll Reveal System**
```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

**Hover Effects**
```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
}
```

### Animation Timing Strategy

**Page Load Sequence:**
1. Hero elements: Immediate (0s delay)
2. Primary content: 0.1s - 0.3s stagger
3. Secondary content: 0.4s - 0.6s stagger
4. Background elements: No animation or slow fade

**Scroll Triggers:**
- Each section triggers when 10% visible (`threshold: 0.1`)
- Elements within section can have stagger delays
- Once revealed, stays revealed (no repeat)

---

## 4. Component Enhancements

### Enhanced Button Styles

**Primary Button with Shimmer**
```css
.btn-primary {
  @apply px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 shadow-sm relative overflow-hidden;
  background: hsl(220, 94%, 64%);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px hsl(220, 94%, 64%, 0.5);
  background: hsl(220, 94%, 58%);
}
```

**Gradient Button**
```css
.btn-gradient {
  @apply px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 shadow-sm relative overflow-hidden;
  background: linear-gradient(135deg,
    hsl(220, 94%, 64%),
    hsl(199, 85%, 55%)
  );
}

.btn-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-gradient:hover::before {
  left: 100%;
}

.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px hsl(220, 94%, 64%, 0.5);
}
```

**Outline Button**
```css
.btn-outline {
  @apply px-6 py-3 rounded-lg font-medium border-2 transition-all duration-300 relative;
  border-color: hsl(220, 94%, 64%);
  color: hsl(220, 94%, 64%);
}

.btn-outline:hover {
  background: hsl(220, 94%, 64%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px hsl(220, 94%, 64%, 0.3);
}
```

### Glassmorphism Cards

**Standard Glass Card**
```css
.card-glass {
  @apply rounded-xl p-6 border transition-all duration-300;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-color: rgba(80, 136, 250, 0.2);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -2px rgba(0, 0, 0, 0.1);
  position: relative;
}

.card-glass::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.75rem;
  opacity: 0;
  transition: opacity 0.3s;
  background: linear-gradient(135deg,
    rgba(80, 136, 250, 0.1),
    rgba(66, 165, 245, 0.05)
  );
  pointer-events: none;
}

.card-glass:hover {
  transform: translateY(-4px);
  border-color: rgba(80, 136, 250, 0.4);
  background: rgba(255, 255, 255, 0.8);
}

.card-glass:hover::after {
  opacity: 1;
}

.dark .card-glass {
  background: rgba(30, 41, 59, 0.6);
  border-color: rgba(80, 136, 250, 0.3);
}

.dark .card-glass:hover {
  background: rgba(30, 41, 59, 0.8);
  border-color: rgba(80, 136, 250, 0.5);
}
```

### Technology Badges

```css
.tech-badge {
  @apply px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300;
  color: hsl(215, 15%, 45%);
  border-color: hsl(215, 15%, 92%);
  background: transparent;
}

.tech-badge:hover {
  border-color: hsl(220, 94%, 64%);
  color: hsl(220, 94%, 64%);
  background: rgba(80, 136, 250, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px -2px rgba(80, 136, 250, 0.3);
}
```

### Animated Underline Links

```css
.link-underline {
  position: relative;
  text-decoration: none;
  color: inherit;
}

.link-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: hsl(220, 94%, 64%);
  transition: width 0.3s ease;
}

.link-underline:hover::after {
  width: 100%;
}
```

### Section Title with Gradient Underline

```css
.section-title {
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg,
    hsl(220, 94%, 64%),
    hsl(199, 85%, 55%)
  );
  border-radius: 2px;
}
```

### Animated Text Component

**Component for word-by-word fade-in animations (used in hero sections)**

```typescript
// Can be added inline in Home.tsx or as src/components/AnimatedText.tsx

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block"
          style={{
            animation: 'fadeInUp 0.6s ease-out forwards',
            animationDelay: `${index * 0.1}s`,
            opacity: 0
          }}
        >
          {word}
          {index < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
};
```

**Usage:**
```tsx
<h1 className="hero-title">
  <AnimatedText text="Transform Your Business With Innovation" />
</h1>
```

### Animated Counter Component

**Component for counting up to numbers (used in stats sections)**

```typescript
// Can be added inline in Home.tsx or as src/components/AnimatedCounter.tsx

import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({
  end,
  suffix = '',
  duration = 2000,
  className = ''
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span className={className}>{count}{suffix}</span>;
};
```

**Usage:**
```tsx
<div className="text-center">
  <div className="text-4xl font-bold">
    <AnimatedCounter end={500} suffix="+" />
  </div>
  <p>Projects Completed</p>
</div>
```

---

## 5. Custom Cursor Implementation

### Component Structure

**New file: `src/components/CustomCursor.tsx`**

```typescript
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
      (navigator.msMaxTouchPoints > 0);

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
```

Features:
- Desktop-only detection (touch devices use native cursor)
- Dual-element design (inner dot + outer rotated square)
- Three states: default, hover (interactive elements), text-hover
- Sparkle trail with randomized offsets
- Throttled sparkle creation (50ms) for performance

### CSS Styles

**Base Cursor**
```css
@media (hover: hover) and (pointer: fine) {
  body { cursor: none; }
  * { cursor: none; }
}

.custom-cursor {
  position: fixed;
  width: 30px;
  height: 30px;
  pointer-events: none;
  z-index: 9999;
  display: none;
}

@media (hover: hover) and (pointer: fine) {
  .custom-cursor {
    display: block;
  }
}
```

**Inner Dot**
```css
.cursor-inner {
  position: absolute;
  width: 10px;
  height: 10px;
  background: hsl(220, 94%, 64%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px rgba(80, 136, 250, 0.8);
  transition: all 0.3s ease;
}
```

**Outer Rotated Square**
```css
.cursor-outer {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 2px solid hsl(220, 94%, 64%);
  border-radius: 6px;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.75, -0.5, 0.25, 1.5);
  opacity: 0.4;
}
```

**Hover States**
```css
.cursor-inner.hover {
  width: 32px;
  height: 32px;
  background: hsl(199, 85%, 55%);
  box-shadow: 0 0 25px rgba(66, 165, 245, 0.9);
  animation: blobMorph 0.8s ease-in-out infinite;
}

.cursor-outer.hover {
  width: 50px;
  height: 50px;
  border-color: hsl(199, 85%, 55%);
  opacity: 0.6;
  animation: rotateDiamond 2s linear infinite;
}
```

**Sparkle Trail**
```css
.cursor-sparkle {
  position: fixed;
  width: 4px;
  height: 4px;
  background: hsl(220, 94%, 64%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  box-shadow: 0 0 8px rgba(80, 136, 250, 0.8);
  animation: sparkleFloat 0.8s ease-out forwards;
}
```

### Integration

Add to `src/App.tsx`:
```tsx
import CustomCursor from '@/components/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      {/* Existing app content */}
    </>
  );
}
```

---

## 6. Glassmorphism & Effects

### Glass Effect Utilities

**Base Glass**
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(80, 136, 250, 0.2);
}

.dark .glass-effect {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(80, 136, 250, 0.3);
}
```

**Navigation Glassmorphism**
```css
.nav-glass {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(80, 136, 250, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

**Input Field Glassmorphism**
```css
.input-glass {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(80, 136, 250, 0.2);
  color: hsl(0, 0%, 20%);
  transition: all 0.3s;
}

.input-glass::placeholder {
  color: hsl(215, 15%, 45%);
}

.input-glass:focus {
  outline: none;
  border-color: hsl(220, 94%, 64%);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 0 3px rgba(80, 136, 250, 0.1);
}

.dark .input-glass {
  background: rgba(30, 41, 59, 0.6);
  color: hsl(0, 0%, 98%);
  border-color: rgba(80, 136, 250, 0.3);
}

.dark .input-glass::placeholder {
  color: hsl(215, 15%, 65%);
}

.dark .input-glass:focus {
  background: rgba(30, 41, 59, 0.8);
}
```

### Gradient Overlays

**Hero Section Background**
```css
.hero-gradient {
  position: relative;
  overflow: hidden;
}

.hero-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
    rgba(80, 136, 250, 0.1),
    rgba(66, 165, 245, 0.05)
  );
  z-index: 0;
}
```

### Section Dividers

```css
.section-divider {
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    rgba(80, 136, 250, 0.3),
    rgba(66, 165, 245, 0.3),
    transparent
  );
  margin: 4rem 0;
}

.section-divider-glow {
  height: 2px;
  background: linear-gradient(90deg,
    hsl(220, 94%, 64%),
    hsl(199, 85%, 55%)
  );
  box-shadow: 0 2px 10px rgba(80, 136, 250, 0.4);
  border-radius: 1px;
}
```

### Shadow System

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
               0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
               0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-primary: 0 10px 25px -5px rgba(80, 136, 250, 0.5);
  --shadow-primary-sm: 0 4px 8px -2px rgba(80, 136, 250, 0.3);
}
```

---

## 7. Page-by-Page Application

### Standard Pattern

**Before:**
```tsx
<div className="container mx-auto px-4">
  <h1>Page Title</h1>
  <Card>Content</Card>
</div>
```

**After:**
```tsx
<div className="section-container">
  <h1 className="section-title fade-in-up">Page Title</h1>
  <Card className="card-glass scroll-reveal">Content</Card>
</div>
```

### Page-Specific Implementations

**1. Home Page**
- Hero: `.hero-gradient`, `AnimatedText`, staggered CTAs
- Projects: `.card-glass` grid with scroll-reveal
- Stats: `AnimatedCounter` with stagger delays
- Sections: Alternating `.glass-effect` backgrounds

**2. Projects Page**
- Project grid: `.card-glass` with `.hover-lift`
- Tech badges: `.tech-badge` for technology tags
- Staggered entrance: `.scroll-reveal` with stagger 1-6

**3. Services Page**
- Service cards: `.card-glass` with alternating `.fade-in-left`/`.fade-in-right`
- Icons: Blue accent backgrounds
- Hover states: Full card lift with gradient overlay

**4. About Page**
- Team section: `.card-glass` grid
- Names: `.gradient-text` for emphasis
- Timeline: Scroll-reveal with stagger

**5. Company Page**
- Values/Mission: `.card-glass` with scroll-reveal
- Statistics: `AnimatedCounter` integration
- Section dividers: `.section-divider-glow`

**6. Resources Page**
- Resource cards: `.card-glass` with `.hover-lift`
- Links: `.link-underline` for article titles
- Categories: `.tech-badge` styling

**7. Contact Page**
- Form: `.input-glass` for all inputs
- Submit button: `.btn-gradient`
- Container: `.card-glass` wrapper

**8. Careers Page**
- Job listings: `.card-glass` with scroll-reveal
- Apply buttons: `.btn-outline`
- Skills: `.tech-badge` for required technologies

### Scroll Reveal Setup

**Create reusable hook: `src/hooks/useScrollReveal.tsx`**

```typescript
import { useEffect } from 'react';

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
```

**Usage in page components:**

```tsx
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ProjectsPage = () => {
  useScrollReveal(); // Add this single line to any page with scroll-reveal elements

  return (
    <div>
      <h1 className="scroll-reveal">Projects</h1>
      {/* Rest of page */}
    </div>
  );
};
```

### Navigation & Footer

**Navigation:**
```tsx
<nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  isScrolled ? 'nav-glass' : 'bg-transparent'
}`}>
```

**Footer:**
```tsx
<footer className="glass-effect border-t border-primary/10">
  <div className="section-container py-12">
    {/* Footer content */}
  </div>
</footer>
```

---

## 8. Accessibility & Performance

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .scroll-reveal {
    opacity: 1 !important;
    transform: none !important;
  }

  .fade-in-up,
  .fade-in-left,
  .fade-in-right,
  .fade-in {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }
}
```

### Touch Device Optimization

**Custom cursor disabled on touch:**
```tsx
const isTouchDevice =
  ('ontouchstart' in window) ||
  (navigator.maxTouchPoints > 0);

if (isTouchDevice) return null;
```

**Touch-friendly hover alternatives:**
```css
@media (hover: none) {
  .card-glass::after {
    display: none;
  }

  button,
  a {
    min-height: 44px;
    min-width: 44px;
  }
}
```

### Performance Optimizations

**GPU Acceleration:**
```css
.card-glass,
.hover-lift,
.fade-in-up,
.custom-cursor {
  will-change: transform;
}

.scroll-reveal.revealed {
  will-change: auto;
}
```

**Sparkle Throttling:**
```typescript
const SPARKLE_THROTTLE = 50; // ms
let lastSparkleTime = 0;

const createSparkle = (x: number, y: number) => {
  const now = Date.now();
  if (now - lastSparkleTime < SPARKLE_THROTTLE) return;
  lastSparkleTime = now;
  // Create sparkles
};
```

**Intersection Observer Optimization:**
```tsx
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '50px' // Start animation before visible
  }
);
```

### Keyboard Navigation

```css
.btn-primary:focus-visible,
.btn-gradient:focus-visible,
.link-underline:focus-visible {
  outline: 2px solid hsl(220, 94%, 64%);
  outline-offset: 2px;
}

body:has(*:focus-visible) .custom-cursor {
  display: none !important;
}
```

### Screen Reader Support

```tsx
<div role="status" aria-live="polite" className="sr-only">
  {loadingState}
</div>

<div className="blob-decoration" aria-hidden="true" />
<div className="cursor-sparkle" aria-hidden="true" />
```

### Browser Compatibility

**Target Support:**
- Chrome/Edge 90+
- Firefox 103+
- Safari 14+

**Graceful Degradation:**
```css
@supports not (backdrop-filter: blur(10px)) {
  .glass-effect,
  .card-glass {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(80, 136, 250, 0.3);
  }
}
```

### Performance Metrics Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

---

## Implementation Checklist

### Phase 1: CSS Foundation (Priority: High)
- [ ] Add new CSS variables to `src/index.css` (design tokens)
- [ ] Add keyframe animations (fadeInUp, fadeInLeft, fadeInRight, shimmer, etc.)
- [ ] Add component classes (.btn-primary, .card-glass, .tech-badge, etc.)
- [ ] Add animation utilities (.fade-in-up, .stagger-*, .scroll-reveal, etc.)
- [ ] Add accessibility styles (reduced motion, focus states)
- [ ] Add shadow system variables
- [ ] Add glassmorphism utilities (.glass-effect, .nav-glass, .input-glass)

### Phase 2: Reusable Components & Hooks (Priority: High)
- [ ] Create `src/hooks/useScrollReveal.tsx` hook
- [ ] Create `src/components/CustomCursor.tsx` component
- [ ] Create AnimatedText component (inline in Home.tsx or separate file)
- [ ] Create AnimatedCounter component (inline in Home.tsx or separate file)
- [ ] Add cursor CSS to `src/index.css`
- [ ] Integrate CustomCursor into `src/App.tsx`
- [ ] Test desktop/touch device detection
- [ ] Verify sparkle trail performance

### Phase 3: Component Enhancements (Priority: Medium)
- [ ] Update Button component for .btn-gradient className support
- [ ] Update Card component for .card-glass className support
- [ ] Update Badge component for .tech-badge className support
- [ ] Update Input component for .input-glass className support
- [ ] Test existing shadcn/ui components still work

### Phase 4: Page Updates (Priority: Medium - Can be done incrementally)
- [ ] Home page: Hero with AnimatedText, projects grid, stats with AnimatedCounter
- [ ] Projects page: Grid with .card-glass and scroll-reveal
- [ ] Services page: Service cards with alternating fade-in animations
- [ ] About page: Team section with .card-glass, useScrollReveal hook
- [ ] Company page: Values/mission cards with .card-glass
- [ ] Resources page: Resource cards with .card-glass and .link-underline
- [ ] Contact page: Form with .input-glass, .btn-gradient submit
- [ ] Careers page: Job listings with .card-glass

### Phase 5: Navigation & Footer (Priority: Low)
- [ ] Update Navigation with scroll-triggered .nav-glass
- [ ] Update Footer with .glass-effect
- [ ] Test mobile menu interactions
- [ ] Verify touch device responsiveness

### Phase 6: Testing & Optimization (Priority: High - Final phase)
- [ ] Test all animations on mobile, tablet, desktop
- [ ] Verify reduced motion support (@media prefers-reduced-motion)
- [ ] Test keyboard navigation and focus states
- [ ] Check color contrast ratios (WCAG AA compliance)
- [ ] Run performance audits (Lighthouse - target: 90+)
- [ ] Test on Chrome 90+, Firefox 103+, Safari 14+
- [ ] Verify touch device experience (no custom cursor, proper hover states)
- [ ] Test EmailJS forms still working
- [ ] Verify all routing and navigation functional

**Estimated Timeline:**
- Phase 1: 3-4 hours
- Phase 2: 2-3 hours
- Phase 3: 1-2 hours
- Phase 4: 4-6 hours (1 hour per major page)
- Phase 5: 1 hour
- Phase 6: 2-3 hours
- **Total: 13-19 hours (~2-3 days)**

---

## Success Criteria

✅ **Visual Design**
- Glassmorphism cards with proper backdrop blur
- Smooth entrance animations with stagger timing
- Custom cursor working on desktop devices
- Gradient accents using Codenest blue/cyan colors

✅ **Functionality**
- All existing features working (EmailJS, routing, forms)
- No broken layouts or components
- Smooth 60fps animations

✅ **Accessibility**
- WCAG AA compliance maintained
- Reduced motion support working
- Keyboard navigation functional
- Screen reader friendly

✅ **Performance**
- Lighthouse score > 90
- LCP < 2.5s
- CLS < 0.1
- No performance regressions

✅ **Browser Compatibility**
- Works on Chrome 90+, Firefox 103+, Safari 14+
- Graceful degradation on older browsers
- Touch devices use native cursor

---

## Notes

- All color changes preserve Codenest brand (blue #5088FA, cyan #42A5F5)
- Design patterns adapted from Meet Bhatt portfolio (https://meet-bhatt.vercel.app/)
- Existing TypeScript/React/Tailwind stack maintained
- shadcn/ui components enhanced, not replaced
- EmailJS integration preserved
- All routing and state management unchanged
