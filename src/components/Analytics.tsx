import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics Measurement ID
// Replace with your actual GA4 Measurement ID from https://analytics.google.com/
// Or set VITE_GA_MEASUREMENT_ID in .env file
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // Only initialize if GA_MEASUREMENT_ID is properly configured
  if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX' || !GA_MEASUREMENT_ID) {
    console.warn('Google Analytics not configured. Please add VITE_GA_MEASUREMENT_ID to .env file');
    return;
  }

  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
  `;
  document.head.appendChild(script2);
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined') return;
  if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX' || !GA_MEASUREMENT_ID) return;

  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window === 'undefined') return;
  if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX' || !GA_MEASUREMENT_ID) return;

  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Component to track page views automatically
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

export default Analytics;

// TypeScript declarations for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}
