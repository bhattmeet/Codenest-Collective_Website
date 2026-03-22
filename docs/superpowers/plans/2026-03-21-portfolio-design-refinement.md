# Portfolio Design Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply portfolio-inspired glassmorphism, animations, and interactive elements to the Codenest Collective website while preserving all existing functionality and the company's blue color scheme.

**Architecture:** Hybrid CSS system with design tokens - enhance `src/index.css` with portfolio patterns (glassmorphism, animations, custom cursor), create reusable hooks and components, update pages with className additions only (non-breaking changes).

**Tech Stack:** React 18, TypeScript, Tailwind CSS, shadcn/ui, Vite

**Related Spec:** `docs/superpowers/specs/2026-03-21-portfolio-design-refinement-design.md`

---

## File Structure Overview

**New Files:**
- `src/hooks/useScrollReveal.tsx` - Reusable Intersection Observer hook
- `src/components/AnimatedText.tsx` - Word-by-word fade-in component
- `src/components/AnimatedCounter.tsx` - Counting animation component

**Modified Files:**
- `src/index.css` - Add design tokens, animations, component classes
- `src/components/CustomCursor.tsx` - Update to match spec implementation
- `src/App.tsx` - Integrate CustomCursor component
- `src/pages/Home.tsx` - Apply animations and glassmorphism
- `src/pages/Projects.tsx` - Apply card-glass and scroll-reveal
- `src/pages/Services.tsx` - Apply alternating animations
- `src/pages/About.tsx` - Apply team section glassmorphism
- `src/pages/Company.tsx` - Apply values/mission card styles
- `src/pages/Resources.tsx` - Apply resource card styles
- `src/pages/Contact.tsx` - Apply input-glass and form styles
- `src/pages/Careers.tsx` - Apply job listing styles
- `src/components/Navigation.tsx` - Apply scroll-triggered glassmorphism
- `src/components/Footer.tsx` - Apply glass effect

---

## Task 1: Setup - Add CSS Design Tokens and Variables

**Files:**
- Modify: `src/index.css:10-63`

- [ ] **Step 1: Add new CSS variables to :root**

Add after line 62 (before closing of `:root`):

```css
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
    --cursor-primary: 220 94% 64%;
    --cursor-accent: 199 85% 55%;

    /* Primary color variations for portfolio-style effects */
    --primary-hover: 220 94% 58%;
    --primary-light: 199 85% 55%;

    /* Shadow system */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    --shadow-primary: 0 10px 25px -5px rgba(80, 136, 250, 0.5);
    --shadow-primary-sm: 0 4px 8px -2px rgba(80, 136, 250, 0.3);
```

- [ ] **Step 2: Verify CSS compiles**

Run: `npm run dev`
Expected: Dev server starts without CSS errors

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add design tokens for portfolio refinement

Add CSS variables for animations, glassmorphism, shadows, and cursor.
Supports portfolio-inspired design system implementation.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Add CSS Keyframe Animations

**Files:**
- Modify: `src/index.css` (add new @keyframes section after existing animations)

- [ ] **Step 1: Find existing @keyframes section**

Look for existing `@keyframes fadeIn` around line 194.

- [ ] **Step 2: Add new entrance animations**

Add after existing @keyframes (around line 200):

```css
  /* Portfolio-inspired entrance animations */
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

  /* Shimmer effect for buttons */
  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  /* Custom cursor animations */
  @keyframes blobMorph {
    0%, 100% { border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
    25% { border-radius: 60% 40% 60% 40% / 70% 30% 70% 30%; }
    50% { border-radius: 40% 60% 40% 60% / 30% 70% 30% 70%; }
    75% { border-radius: 50% 50% 30% 70% / 50% 50% 70% 30%; }
  }

  @keyframes rotateDiamond {
    from { transform: translate(-50%, -50%) rotate(45deg); }
    to { transform: translate(-50%, -50%) rotate(405deg); }
  }

  /* Sparkle particle animations */
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

  /* Text hover cursor morph */
  @keyframes morphRect {
    0%, 100% {
      transform: translate(-50%, -50%) rotate(45deg);
      border-radius: 6px;
    }
    50% {
      transform: translate(-50%, -50%) rotate(90deg);
      border-radius: 20px;
    }
  }
```

- [ ] **Step 3: Verify animations compile**

Run: `npm run dev`
Check: No CSS errors in console

- [ ] **Step 4: Commit**

```bash
git add src/index.css
git commit -m "feat: add portfolio-inspired keyframe animations

Add entrance animations (fadeInUp, fadeInLeft, fadeInRight),
button shimmer, custom cursor morphing, and sparkle effects.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Add Animation Utility Classes

**Files:**
- Modify: `src/index.css` (add to @layer utilities section)

- [ ] **Step 1: Add animation utility classes**

Find the `@layer utilities` section (around line 167) and add:

```css
  /* Animation utilities */
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

  /* Stagger delays - portfolio timing */
  .stagger-1 { animation-delay: 0.1s; }
  .stagger-2 { animation-delay: 0.2s; }
  .stagger-3 { animation-delay: 0.3s; }
  .stagger-4 { animation-delay: 0.4s; }
  .stagger-5 { animation-delay: 0.5s; }
  .stagger-6 { animation-delay: 0.6s; }

  /* Scroll reveal system */
  .scroll-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }

  /* Hover lift effect */
  .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .hover-lift:hover {
    transform: translateY(var(--hover-lift));
    box-shadow: var(--shadow-md);
  }

  /* Gradient text effect */
  .gradient-text {
    background: linear-gradient(135deg,
      hsl(var(--primary)),
      hsl(var(--accent))
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Fallback for browsers without background-clip: text */
  @supports not (background-clip: text) {
    .gradient-text {
      color: hsl(var(--primary));
    }
  }
```

- [ ] **Step 2: Test CSS compiles**

Run: `npm run dev`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add animation utility classes

Add fade-in variants, stagger delays, scroll-reveal system,
hover-lift, and gradient-text utilities.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Add Component Styling Classes

**Files:**
- Modify: `src/index.css` (add to @layer components or utilities)

- [ ] **Step 1: Add button component classes**

Add after utilities section:

```css
@layer components {
  /* Enhanced button styles */
  .btn-primary {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    color: white;
    background: hsl(var(--primary));
    transition: all var(--transition-base);
    box-shadow: var(--shadow-sm);
    position: relative;
    overflow: hidden;
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
    transform: translateY(var(--hover-lift-small));
    box-shadow: var(--shadow-primary);
    background: hsl(var(--primary-hover));
  }

  .btn-gradient {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    color: white;
    background: linear-gradient(135deg,
      hsl(var(--primary)),
      hsl(var(--accent))
    );
    transition: all var(--transition-base);
    box-shadow: var(--shadow-sm);
    position: relative;
    overflow: hidden;
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
    transform: translateY(var(--hover-lift-small));
    box-shadow: var(--shadow-primary);
  }

  .btn-outline {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    border: 2px solid hsl(var(--primary));
    color: hsl(var(--primary));
    background: transparent;
    transition: all var(--transition-base);
    position: relative;
  }

  .btn-outline:hover {
    background: hsl(var(--primary));
    color: white;
    transform: translateY(var(--hover-lift-small));
    box-shadow: 0 10px 25px -5px rgba(80, 136, 250, 0.3);
  }
}
```

- [ ] **Step 2: Add glassmorphism card classes**

Continue in @layer components:

```css
  /* Glassmorphism cards */
  .card-glass {
    border-radius: 0.75rem;
    padding: 1.5rem;
    border: 1px solid rgba(80, 136, 250, 0.2);
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    box-shadow: var(--shadow-base);
    transition: all var(--transition-base);
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
    transition: opacity var(--transition-base);
    background: linear-gradient(135deg,
      rgba(80, 136, 250, 0.1),
      rgba(66, 165, 245, 0.05)
    );
    pointer-events: none;
  }

  .card-glass > * {
    position: relative;
    z-index: 2;
  }

  .card-glass:hover {
    transform: translateY(var(--hover-lift));
    border-color: rgba(80, 136, 250, 0.4);
    background: rgba(255, 255, 255, var(--glass-hover-opacity));
  }

  .card-glass:hover::after {
    opacity: 1;
  }

  /* Dark mode glass cards */
  .dark .card-glass {
    background: rgba(30, 41, 59, var(--glass-opacity));
    border-color: rgba(80, 136, 250, 0.3);
  }

  .dark .card-glass:hover {
    background: rgba(30, 41, 59, var(--glass-hover-opacity));
    border-color: rgba(80, 136, 250, 0.5);
  }

  /* Glass effect utility */
  .glass-effect {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(80, 136, 250, 0.2);
  }

  .dark .glass-effect {
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(80, 136, 250, 0.3);
  }
```

- [ ] **Step 3: Add navigation and other component classes**

Continue in @layer components:

```css
  /* Navigation glassmorphism */
  .nav-glass {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(80, 136, 250, 0.1);
    box-shadow: var(--shadow-base);
  }

  .dark .nav-glass {
    background: rgba(15, 23, 42, 0.95);
    border-bottom: 1px solid rgba(80, 136, 250, 0.2);
  }

  /* Input glassmorphism */
  .input-glass {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(80, 136, 250, 0.2);
    color: hsl(var(--foreground));
    transition: all var(--transition-base);
  }

  .input-glass::placeholder {
    color: hsl(var(--muted-foreground));
  }

  .input-glass:focus {
    outline: none;
    border-color: hsl(var(--primary));
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 0 3px rgba(80, 136, 250, 0.1);
  }

  .dark .input-glass {
    background: rgba(30, 41, 59, 0.6);
    border-color: rgba(80, 136, 250, 0.3);
  }

  .dark .input-glass:focus {
    background: rgba(30, 41, 59, 0.8);
  }

  /* Technology badges */
  .tech-badge {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 9999px;
    border: 1px solid hsl(var(--border));
    color: hsl(var(--muted-foreground));
    background: transparent;
    transition: all var(--transition-base);
  }

  .tech-badge:hover {
    border-color: hsl(var(--primary));
    color: hsl(var(--primary));
    background: rgba(80, 136, 250, 0.1);
    transform: translateY(var(--hover-lift-small));
    box-shadow: var(--shadow-primary-sm);
  }

  /* Animated link underlines */
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
    background: hsl(var(--primary));
    transition: width var(--transition-base) ease;
  }

  .link-underline:hover::after {
    width: 100%;
  }

  /* Section titles with gradient underline */
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
      hsl(var(--primary)),
      hsl(var(--accent))
    );
    border-radius: 2px;
  }

  /* Hero gradient background */
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

  .dark .hero-gradient::before {
    background: linear-gradient(135deg,
      rgba(80, 136, 250, 0.2),
      rgba(66, 165, 245, 0.1)
    );
  }

  /* Section container utility */
  .section-container {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 640px) {
    .section-container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    .section-container {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
```

- [ ] **Step 4: Test all CSS compiles**

Run: `npm run dev`
Expected: No CSS errors, dev server runs

- [ ] **Step 5: Commit**

```bash
git add src/index.css
git commit -m "feat: add component styling classes

Add button variants (btn-primary, btn-gradient, btn-outline),
glassmorphism cards, navigation glass, input glass, tech badges,
link underlines, section titles, and hero gradient.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 5: Add Custom Cursor CSS

**Files:**
- Modify: `src/index.css` (add custom cursor styles)

- [ ] **Step 1: Add custom cursor base styles**

Add to @layer utilities or at end of file:

```css
  /* Custom Cursor Styles */
  @media (hover: hover) and (pointer: fine) {
    body {
      cursor: none;
    }
    * {
      cursor: none;
    }
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

  /* Inner dot */
  .cursor-inner {
    position: absolute;
    width: 10px;
    height: 10px;
    background: hsl(var(--cursor-primary));
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px rgba(80, 136, 250, 0.8);
    transition: all var(--transition-base) ease;
  }

  /* Outer rotated square */
  .cursor-outer {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 2px solid hsl(var(--cursor-primary));
    border-radius: 6px;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all var(--transition-base) cubic-bezier(0.75, -0.5, 0.25, 1.5);
    opacity: 0.4;
  }

  /* Hover state (interactive elements) */
  .cursor-inner.hover {
    width: 32px;
    height: 32px;
    background: hsl(var(--cursor-accent));
    box-shadow: 0 0 25px rgba(66, 165, 245, 0.9);
    animation: blobMorph 0.8s ease-in-out infinite;
  }

  .cursor-outer.hover {
    width: 50px;
    height: 50px;
    border-color: hsl(var(--cursor-accent));
    opacity: 0.6;
    animation: rotateDiamond 2s linear infinite;
  }

  /* Text hover state */
  .cursor-inner.text-hover {
    width: 6px;
    height: 6px;
    background: hsl(var(--cursor-accent));
    box-shadow: 0 0 15px rgba(66, 165, 245, 0.8);
  }

  .cursor-outer.text-hover {
    width: 40px;
    height: 40px;
    border-color: hsl(var(--cursor-accent));
    opacity: 0.6;
    border-radius: 20px;
    animation: morphRect 2s ease-in-out infinite;
  }

  /* Sparkle particles */
  .cursor-sparkle {
    position: fixed;
    width: 4px;
    height: 4px;
    background: hsl(var(--cursor-primary));
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    box-shadow: 0 0 8px rgba(80, 136, 250, 0.8);
    animation: sparkleFloat 0.8s ease-out forwards;
  }

  .cursor-sparkle.variant-1 {
    background: hsl(var(--cursor-accent));
    box-shadow: 0 0 8px rgba(66, 165, 245, 0.8);
    animation: sparkleFloat1 0.8s ease-out forwards;
  }

  .cursor-sparkle.variant-2 {
    background: hsl(var(--accent));
    box-shadow: 0 0 8px rgba(66, 165, 245, 0.8);
    animation: sparkleFloat2 0.8s ease-out forwards;
  }
```

- [ ] **Step 2: Add accessibility support**

Add reduced motion support:

```css
  /* Reduced motion support */
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

    .cursor-inner,
    .cursor-outer {
      animation: none !important;
    }
  }

  /* Keyboard focus support */
  .btn-primary:focus-visible,
  .btn-gradient:focus-visible,
  .link-underline:focus-visible {
    outline: 2px solid hsl(var(--primary));
    outline-offset: 2px;
  }

  body:has(*:focus-visible) .custom-cursor {
    display: none !important;
  }
```

- [ ] **Step 3: Add browser fallbacks**

Add backdrop-filter fallback:

```css
  /* Fallback for browsers without backdrop-filter */
  @supports not (backdrop-filter: blur(10px)) {
    .glass-effect,
    .card-glass,
    .nav-glass,
    .input-glass {
      background: rgba(255, 255, 255, 0.95);
    }

    .dark .glass-effect,
    .dark .card-glass,
    .dark .nav-glass,
    .dark .input-glass {
      background: rgba(30, 41, 59, 0.95);
    }
  }
```

- [ ] **Step 4: Test CSS compiles**

Run: `npm run dev`
Expected: No errors

- [ ] **Step 5: Commit**

```bash
git add src/index.css
git commit -m "feat: add custom cursor CSS and accessibility

Add custom cursor styles (inner/outer elements, hover states),
sparkle particles, reduced motion support, keyboard focus,
and browser fallbacks.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 6: Create useScrollReveal Hook

**Files:**
- Create: `src/hooks/useScrollReveal.tsx`

- [ ] **Step 1: Create hook file with implementation**

```typescript
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
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npm run dev`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/hooks/useScrollReveal.tsx
git commit -m "feat: create useScrollReveal hook

Add reusable Intersection Observer hook for scroll-reveal animations.
Automatically reveals elements with .scroll-reveal class on viewport entry.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 7: Create AnimatedText Component

**Files:**
- Create: `src/components/AnimatedText.tsx`

- [ ] **Step 1: Create component file**

```typescript
interface AnimatedTextProps {
  text: string;
  className?: string;
}

/**
 * Component for word-by-word fade-in animations
 * Used in hero sections for dramatic text entrance
 */
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

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npm run dev`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/AnimatedText.tsx
git commit -m "feat: create AnimatedText component

Add component for word-by-word fade-in animations.
Used in hero sections for dramatic text entrance.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 8: Create AnimatedCounter Component

**Files:**
- Create: `src/components/AnimatedCounter.tsx`

- [ ] **Step 1: Create component file**

```typescript
import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Component for counting up to numbers
 * Used in stats sections to create engaging number animations
 */
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

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
};
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npm run dev`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/AnimatedCounter.tsx
git commit -m "feat: create AnimatedCounter component

Add component for counting up animations in stats sections.
Uses requestAnimationFrame for smooth counting effect.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 9: Update CustomCursor Component

**Files:**
- Modify: `src/components/CustomCursor.tsx` (replace entire file)
- Delete: `src/components/CustomCursor.css` (styles now in index.css)

- [ ] **Step 1: Replace CustomCursor.tsx with spec implementation**

Replace entire file contents with:

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

- [ ] **Step 2: Delete old CSS file**

Run: `rm src/components/CustomCursor.css`

- [ ] **Step 3: Test component works**

Run: `npm run dev`
Open browser, move mouse (desktop only)
Expected: Custom cursor visible with sparkle trail

- [ ] **Step 4: Commit**

```bash
git add src/components/CustomCursor.tsx
git add src/components/CustomCursor.css
git commit -m "feat: update CustomCursor to spec implementation

Replace CustomCursor with spec-compliant version.
Remove separate CSS file (styles now in index.css).
Add sparkle throttling and improved element detection.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 10: Integrate CustomCursor into App

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Add CustomCursor import and component**

Find the imports section and add:

```typescript
import CustomCursor from '@/components/CustomCursor';
```

Find the return statement and add CustomCursor at the top level:

```typescript
return (
  <>
    <CustomCursor />
    <ErrorBoundary>
      {/* existing content */}
    </ErrorBoundary>
  </>
);
```

- [ ] **Step 2: Test app renders**

Run: `npm run dev`
Expected: App works, custom cursor visible on desktop

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: integrate CustomCursor into App

Add CustomCursor component to app root for site-wide custom cursor.
Desktop-only, automatically hidden on touch devices.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 11: Update Home Page - Hero Section

**Files:**
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Add imports**

Add to imports:

```typescript
import { AnimatedText } from '@/components/AnimatedText';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
```

- [ ] **Step 2: Add useScrollReveal hook**

Inside Home component, at the top:

```typescript
const Home = () => {
  useScrollReveal(); // Add scroll reveal observer

  // existing code...
```

- [ ] **Step 3: Update hero section with animations**

Find the hero section (likely around line 80-120) and update the main heading:

Before:
```typescript
<h1 className="hero-title">Transform Your Business...</h1>
```

After:
```typescript
<h1 className="hero-title">
  <AnimatedText text="Transform Your Business With Innovation" />
</h1>
```

- [ ] **Step 4: Add fade-in animations to hero CTA buttons**

Find the hero buttons section and add animation classes:

```typescript
<div className="flex gap-4 fade-in-up stagger-2">
  <Button className="btn-gradient">Get Started</Button>
  <Button className="btn-outline">Learn More</Button>
</div>
```

- [ ] **Step 5: Test hero animations**

Run: `npm run dev`
Expected: Hero text animates word-by-word, buttons fade in with stagger

- [ ] **Step 6: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: add animations to Home hero section

Add AnimatedText to hero heading and fade-in animations to CTAs.
Import and apply useScrollReveal hook for scroll animations.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 12: Update Home Page - Stats Section

**Files:**
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Find stats section**

Look for companyStats mapping (likely around line 200-250)

- [ ] **Step 2: Add AnimatedCounter to stat values**

Update stat value rendering:

Before:
```typescript
<div className="text-4xl font-bold">{stat.value}</div>
```

After:
```typescript
<div className="text-4xl font-bold">
  <AnimatedCounter end={stat.value} suffix={stat.suffix || ''} />
</div>
```

- [ ] **Step 3: Add stagger animations to stats**

Wrap stats section items:

```typescript
{companyStats.map((stat, idx) => (
  <div key={stat.label} className={`text-center fade-in-up stagger-${idx + 1}`}>
    {/* stat content */}
  </div>
))}
```

- [ ] **Step 4: Test stats animations**

Run: `npm run dev`
Scroll to stats section
Expected: Numbers count up, stats fade in with stagger

- [ ] **Step 5: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: add animated counters to Home stats

Add AnimatedCounter for stat values with counting effect.
Add fade-in stagger animations to stat cards.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 13: Update Home Page - Featured Projects

**Files:**
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Add card-glass to project cards**

Find featured projects section (around line 100-150) and update Card components:

Before:
```typescript
<Card className="...existing classes">
```

After:
```typescript
<Card className="card-glass scroll-reveal hover-lift ...existing classes">
```

- [ ] **Step 2: Add tech-badge styling**

Find tech badges in project cards:

Before:
```typescript
<Badge>{tech}</Badge>
```

After:
```typescript
<Badge className="tech-badge">{tech}</Badge>
```

- [ ] **Step 3: Add stagger to project cards**

```typescript
{featuredProjects.map((project, idx) => (
  <Card
    key={project.title}
    className={`card-glass scroll-reveal hover-lift stagger-${idx + 1}`}
  >
    {/* project content */}
  </Card>
))}
```

- [ ] **Step 4: Test project cards**

Run: `npm run dev`
Scroll to projects
Expected: Glass effect, hover lift, scroll reveal with stagger

- [ ] **Step 5: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: add glassmorphism to Home featured projects

Apply card-glass, scroll-reveal, hover-lift, and tech-badge styles.
Add stagger animations for sequential reveal.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 14: Update Projects Page

**Files:**
- Modify: `src/pages/Projects.tsx`

- [ ] **Step 1: Add imports**

```typescript
import { useScrollReveal } from '@/hooks/useScrollReveal';
```

- [ ] **Step 2: Add useScrollReveal hook**

```typescript
const Projects = () => {
  useScrollReveal();

  // existing code...
```

- [ ] **Step 3: Update page title**

```typescript
<h1 className="section-title fade-in-up">Our Projects</h1>
```

- [ ] **Step 4: Update project cards with glassmorphism**

Find project mapping and update:

```typescript
{allProjects.map((project, idx) => (
  <Card
    key={project.id}
    className={`card-glass hover-lift scroll-reveal stagger-${(idx % 6) + 1}`}
  >
    {/* existing card content */}
    {/* Update badges */}
    {project.tech.map(tech => (
      <Badge key={tech} className="tech-badge">{tech}</Badge>
    ))}
  </Card>
))}
```

- [ ] **Step 5: Test Projects page**

Run: `npm run dev`
Navigate to /projects
Expected: Page title with underline, glass cards, scroll reveals

- [ ] **Step 6: Commit**

```bash
git add src/pages/Projects.tsx
git commit -m "feat: apply portfolio design to Projects page

Add section-title, card-glass, scroll-reveal, and tech-badge.
Projects reveal with stagger as user scrolls.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 15: Update Services Page

**Files:**
- Modify: `src/pages/Services.tsx`

- [ ] **Step 1: Add imports**

```typescript
import { useScrollReveal } from '@/hooks/useScrollReveal';
```

- [ ] **Step 2: Add hook and title**

```typescript
const Services = () => {
  useScrollReveal();

  return (
    <div className="section-container py-20">
      <h1 className="section-title fade-in-up">Our Services</h1>
      {/* rest */}
    </div>
  );
};
```

- [ ] **Step 3: Update service cards with alternating animations**

```typescript
{services.map((service, idx) => (
  <Card
    key={service.title}
    className={`card-glass scroll-reveal fade-in-${idx % 2 === 0 ? 'left' : 'right'}`}
  >
    {/* service content */}
  </Card>
))}
```

- [ ] **Step 4: Test Services page**

Run: `npm run dev`
Navigate to /services
Expected: Alternating left/right entrance animations

- [ ] **Step 5: Commit**

```bash
git add src/pages/Services.tsx
git commit -m "feat: apply portfolio design to Services page

Add section-title, card-glass, and alternating fade-in animations.
Services slide in from left/right alternately.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 16: Update About Page

**Files:**
- Modify: `src/pages/About.tsx`

- [ ] **Step 1: Add imports**

```typescript
import { useScrollReveal } from '@/hooks/useScrollReveal';
```

- [ ] **Step 2: Add hook**

```typescript
const About = () => {
  useScrollReveal();
  // existing code...
};
```

- [ ] **Step 3: Update team section if exists**

Find team members section and update:

```typescript
{team.map((member, idx) => (
  <Card
    key={member.name}
    className={`card-glass text-center scroll-reveal stagger-${idx + 1}`}
  >
    <h3 className="gradient-text">{member.name}</h3>
    {/* rest of member content */}
  </Card>
))}
```

- [ ] **Step 4: Update page title**

```typescript
<h1 className="section-title fade-in-up">About Us</h1>
```

- [ ] **Step 5: Test About page**

Run: `npm run dev`
Navigate to /about
Expected: Glass cards, gradient text on names

- [ ] **Step 6: Commit**

```bash
git add src/pages/About.tsx
git commit -m "feat: apply portfolio design to About page

Add section-title, card-glass, scroll-reveal, and gradient-text.
Team members displayed with glassmorphism cards.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 17: Update Company Page

**Files:**
- Modify: `src/pages/Company.tsx`

- [ ] **Step 1: Add imports**

```typescript
import { useScrollReveal } from '@/hooks/useScrollReveal';
```

- [ ] **Step 2: Add hook**

```typescript
const Company = () => {
  useScrollReveal();
  // existing code...
};
```

- [ ] **Step 3: Update values/mission cards**

```typescript
{values.map((value, idx) => (
  <Card
    key={value.title}
    className={`card-glass scroll-reveal fade-in-up stagger-${idx + 1}`}
  >
    {/* value content */}
  </Card>
))}
```

- [ ] **Step 4: Add section title**

```typescript
<h1 className="section-title fade-in-up">Our Company</h1>
```

- [ ] **Step 5: Test Company page**

Run: `npm run dev`
Navigate to /company
Expected: Glass cards with stagger animation

- [ ] **Step 6: Commit**

```bash
git add src/pages/Company.tsx
git commit -m "feat: apply portfolio design to Company page

Add section-title, card-glass, and scroll-reveal animations.
Values and mission displayed with stagger effect.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 18: Update Resources Page

**Files:**
- Modify: `src/pages/Resources.tsx`

- [ ] **Step 1: Add imports**

```typescript
import { useScrollReveal } from '@/hooks/useScrollReveal';
```

- [ ] **Step 2: Add hook**

```typescript
const Resources = () => {
  useScrollReveal();
  // existing code...
};
```

- [ ] **Step 3: Update resource cards**

```typescript
{resources.map((resource, idx) => (
  <Link
    key={resource.id}
    to={`/resources/${resource.slug}`}
    className={`scroll-reveal stagger-${(idx % 6) + 1}`}
  >
    <Card className="card-glass hover-lift h-full">
      <Badge className="tech-badge">{resource.category}</Badge>
      <h3 className="link-underline">{resource.title}</h3>
      {/* resource content */}
    </Card>
  </Link>
))}
```

- [ ] **Step 4: Test Resources page**

Run: `npm run dev`
Navigate to /resources
Expected: Glass cards, animated link underlines

- [ ] **Step 5: Commit**

```bash
git add src/pages/Resources.tsx
git commit -m "feat: apply portfolio design to Resources page

Add card-glass, link-underline, and scroll-reveal animations.
Resources display with hover lift and stagger effect.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 19: Update Contact Page

**Files:**
- Modify: `src/pages/Contact.tsx`

- [ ] **Step 1: Add imports**

```typescript
import { useScrollReveal } from '@/hooks/useScrollReveal';
```

- [ ] **Step 2: Add hook and wrapper**

```typescript
const Contact = () => {
  useScrollReveal();

  return (
    <div className="section-container py-20">
      <h1 className="section-title fade-in-up text-center mb-12">Get In Touch</h1>
      {/* rest */}
    </div>
  );
};
```

- [ ] **Step 3: Update form container**

Wrap form in glass card:

```typescript
<Card className="card-glass fade-in-up stagger-1 max-w-2xl mx-auto">
  <form onSubmit={handleSubmit}>
    {/* form fields */}
  </form>
</Card>
```

- [ ] **Step 4: Update form inputs**

Add input-glass to all inputs:

```typescript
<input
  type="text"
  placeholder="Your Name"
  className="input-glass w-full mb-4"
/>
<input
  type="email"
  placeholder="Your Email"
  className="input-glass w-full mb-4"
/>
<textarea
  placeholder="Your Message"
  className="input-glass w-full mb-4 min-h-[150px]"
/>
```

- [ ] **Step 5: Update submit button**

```typescript
<Button type="submit" className="btn-gradient w-full">
  Send Message
</Button>
```

- [ ] **Step 6: Test Contact page**

Run: `npm run dev`
Navigate to /contact
Expected: Glass form, glass inputs, gradient submit button

- [ ] **Step 7: Commit**

```bash
git add src/pages/Contact.tsx
git commit -m "feat: apply portfolio design to Contact page

Add input-glass for form fields, btn-gradient for submit,
card-glass for form container. Preserve EmailJS functionality.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 20: Update Careers Page

**Files:**
- Modify: `src/pages/Careers.tsx`

- [ ] **Step 1: Add imports**

```typescript
import { useScrollReveal } from '@/hooks/useScrollReveal';
```

- [ ] **Step 2: Add hook**

```typescript
const Careers = () => {
  useScrollReveal();
  // existing code...
};
```

- [ ] **Step 3: Update job listing cards**

```typescript
{jobs.map((job, idx) => (
  <Card
    key={job.id}
    className={`card-glass scroll-reveal fade-in-up stagger-${idx + 1}`}
  >
    <h3 className="gradient-text mb-2">{job.title}</h3>
    {/* job details */}
    {job.skills.map(skill => (
      <Badge key={skill} className="tech-badge">{skill}</Badge>
    ))}
    <Button className="btn-outline">Apply Now</Button>
  </Card>
))}
```

- [ ] **Step 4: Test Careers page**

Run: `npm run dev`
Navigate to /careers
Expected: Glass job cards, tech badges, outline buttons

- [ ] **Step 5: Commit**

```bash
git add src/pages/Careers.tsx
git commit -m "feat: apply portfolio design to Careers page

Add card-glass, gradient-text, tech-badge, and scroll-reveal.
Job listings display with glassmorphism and stagger animations.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 21: Update Navigation Component

**Files:**
- Modify: `src/components/Navigation.tsx`

- [ ] **Step 1: Find isScrolled state**

Locate the isScrolled state (around line 10)

- [ ] **Step 2: Update nav className for glassmorphism**

Find the nav element and update className:

Before:
```typescript
className={`fixed top-0 w-full z-50 ${
  isScrolled ? 'bg-background/95 backdrop-blur-2xl...' : '...'
}`}
```

After:
```typescript
className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  isScrolled ? 'nav-glass' : 'bg-transparent backdrop-blur-sm'
}`}
```

- [ ] **Step 3: Test navigation**

Run: `npm run dev`
Scroll page down and up
Expected: Nav becomes glass effect when scrolled

- [ ] **Step 4: Commit**

```bash
git add src/components/Navigation.tsx
git commit -m "feat: apply glassmorphism to Navigation

Add nav-glass class for scroll-triggered glassmorphism effect.
Navigation becomes frosted glass on scroll.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 22: Update Footer Component

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Add glass-effect to footer**

Find the footer element and add class:

Before:
```typescript
<footer className="border-t ...">
```

After:
```typescript
<footer className="glass-effect border-t border-primary/10">
```

- [ ] **Step 2: Update footer content wrapper**

```typescript
<div className="section-container py-12">
  {/* existing footer content */}
</div>
```

- [ ] **Step 3: Test footer**

Run: `npm run dev`
Scroll to bottom
Expected: Footer has glass effect

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: apply glassmorphism to Footer

Add glass-effect and section-container to footer.
Footer now has frosted glass appearance.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 23: Final Testing - All Pages

**Files:**
- Test all pages for functionality and design

- [ ] **Step 1: Test all page routes**

Run: `npm run dev`

Visit each page:
- [ ] Home (/) - Hero, stats, projects
- [ ] About (/about) - Team section
- [ ] Services (/services) - Service cards
- [ ] Projects (/projects) - Project grid
- [ ] Company (/company) - Values/mission
- [ ] Resources (/resources) - Resource cards
- [ ] Contact (/contact) - Form with glass inputs
- [ ] Careers (/careers) - Job listings

- [ ] **Step 2: Test animations**

For each page, verify:
- [ ] Scroll reveal animations trigger
- [ ] Stagger delays work correctly
- [ ] Hover effects work (lift, color change)
- [ ] Custom cursor works on desktop
- [ ] Tech badges hover properly

- [ ] **Step 3: Test functionality**

- [ ] Contact form still submits (EmailJS)
- [ ] Job application modal still works
- [ ] Navigation links work
- [ ] All routing functional
- [ ] Mobile menu works

- [ ] **Step 4: Test accessibility**

- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Custom cursor hides on focus
- [ ] Reduced motion respected (check DevTools)

- [ ] **Step 5: Test touch devices**

Open DevTools, toggle device toolbar
- [ ] Custom cursor hidden on mobile
- [ ] Touch interactions work
- [ ] Animations work on mobile
- [ ] Glass effects render properly

- [ ] **Step 6: Document any issues**

Create file `docs/testing-notes.md` if issues found

---

## Task 24: Performance Optimization Check

**Files:**
- Run Lighthouse audit

- [ ] **Step 1: Run Lighthouse audit**

Run: `npm run build && npm run preview`
Open Chrome DevTools > Lighthouse
Run audit for:
- Performance
- Accessibility
- Best Practices
- SEO

- [ ] **Step 2: Verify metrics**

Target scores:
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

Target metrics:
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] First Input Delay < 100ms

- [ ] **Step 3: Document results**

If scores below target, document in `docs/performance-notes.md`

---

## Task 25: Browser Compatibility Testing

**Files:**
- Test on multiple browsers

- [ ] **Step 1: Test on Chrome 90+**

- [ ] Custom cursor works
- [ ] Backdrop-filter works
- [ ] All animations smooth

- [ ] **Step 2: Test on Firefox 103+**

- [ ] Backdrop-filter works
- [ ] Animations smooth
- [ ] No console errors

- [ ] **Step 3: Test on Safari 14+**

- [ ] -webkit-backdrop-filter works
- [ ] Custom cursor works
- [ ] No rendering issues

- [ ] **Step 4: Test on older browsers (optional)**

- [ ] Fallbacks work (solid backgrounds)
- [ ] Site still functional

---

## Task 26: Final Commit and Documentation

**Files:**
- Create: `docs/design-implementation-complete.md`

- [ ] **Step 1: Create completion document**

```markdown
# Portfolio Design Refinement - Implementation Complete

## Date
2026-03-21

## Summary
Successfully implemented portfolio-inspired design refinement across all pages
of the Codenest Collective website.

## Changes Made

### CSS System
- Added design tokens for animations, glassmorphism, shadows
- Added 15+ keyframe animations
- Added component classes (btn-*, card-glass, tech-badge, etc.)
- Added custom cursor styles with sparkle effects
- Added accessibility support (reduced motion, keyboard focus)

### New Components
- `useScrollReveal` hook - Intersection Observer for scroll animations
- `AnimatedText` component - Word-by-word fade-in
- `AnimatedCounter` component - Counting animations
- Updated `CustomCursor` component - Spec-compliant implementation

### Page Updates
- Home: Hero animations, stats counters, project cards
- Projects: Glassmorphism grid, scroll reveals
- Services: Alternating entrance animations
- About: Team section glassmorphism
- Company: Values/mission cards
- Resources: Resource cards with hover effects
- Contact: Glass form inputs, gradient button
- Careers: Job listings with glass cards
- Navigation: Scroll-triggered glassmorphism
- Footer: Glass effect

## Preserved Functionality
✅ EmailJS contact forms working
✅ Job application modal working
✅ All routing functional
✅ Navigation and mobile menu working
✅ Existing components unchanged (shadcn/ui)

## Performance
- Lighthouse score: [SCORE]
- FCP: [TIME]
- LCP: [TIME]
- CLS: [SCORE]

## Browser Compatibility
✅ Chrome 90+
✅ Firefox 103+
✅ Safari 14+
✅ Fallbacks for older browsers

## Design Tokens Preserved
✅ Codenest blue: #5088FA
✅ Codenest cyan: #42A5F5
✅ HSL color system maintained
```

- [ ] **Step 2: Final commit**

```bash
git add docs/design-implementation-complete.md
git commit -m "docs: mark portfolio design refinement as complete

All pages updated with glassmorphism, animations, and custom cursor.
All functionality preserved. Performance and accessibility maintained.

Implementation complete per spec:
docs/superpowers/specs/2026-03-21-portfolio-design-refinement-design.md

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Success Criteria Checklist

### Visual Design
- [ ] Glassmorphism cards with proper backdrop blur
- [ ] Smooth entrance animations with stagger timing
- [ ] Custom cursor working on desktop devices
- [ ] Gradient accents using Codenest blue/cyan colors
- [ ] All pages have consistent design system

### Functionality
- [ ] All existing features working (EmailJS, routing, forms)
- [ ] No broken layouts or components
- [ ] Smooth 60fps animations
- [ ] Mobile menu functional
- [ ] Job application modal working

### Accessibility
- [ ] WCAG AA compliance maintained
- [ ] Reduced motion support working
- [ ] Keyboard navigation functional
- [ ] Screen reader friendly
- [ ] Focus states visible

### Performance
- [ ] Lighthouse score > 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] No performance regressions

### Browser Compatibility
- [ ] Works on Chrome 90+, Firefox 103+, Safari 14+
- [ ] Graceful degradation on older browsers
- [ ] Touch devices use native cursor

---

## Notes for Implementer

**Priority Order:**
1. Tasks 1-5: CSS foundation (required for all visual changes)
2. Tasks 6-10: Reusable components and hooks (required for pages)
3. Tasks 11-22: Page updates (can be done incrementally)
4. Tasks 23-26: Testing and documentation (must be thorough)

**Testing Strategy:**
- Test after each task (commit early, commit often)
- Use DevTools device toggle for mobile testing
- Check reduced motion in DevTools > Rendering
- Test keyboard navigation with Tab key
- Verify EmailJS with real form submission

**Common Issues:**
- If animations don't work, check CSS @keyframes are defined
- If glass effect missing, check backdrop-filter browser support
- If custom cursor not visible, check media query (hover: hover)
- If scroll reveal not triggering, check .scroll-reveal class applied

**Performance Tips:**
- Sparkles are throttled to 50ms to prevent performance issues
- Intersection Observer unobserves after reveal (one-time animation)
- Custom cursor only renders on desktop (touch detection)
- CSS animations are GPU-accelerated (use transform/opacity)
