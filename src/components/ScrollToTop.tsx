import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // When the URL has a hash (e.g. /services#mobile-engineering), let the
    // destination page's hash-scroll effect handle the position instead.
    if (hash) return;
    // Explicit `behavior: "auto"` so this jumps instantly even if a future
    // global `scroll-behavior: smooth` ever sneaks back in.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
