import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/codenest-logo.jpeg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Company", path: "/company" },
    { name: "Resources", path: "/resources" },
    { name: "Careers", path: "/careers" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Every public page renders a dark gradient hero at the top, so the nav is
  // "on dark" whenever we're not yet scrolled past the glass threshold.
  const onDark = !isScrolled;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled ? "nav-glass" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-[72px] gap-6">
            {/* Wordmark */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <span
                className={`relative flex items-center justify-center h-10 w-10 rounded-xl overflow-hidden transition-all duration-300 ${
                  onDark
                    ? "ring-1 ring-white/30 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)]"
                    : "ring-1 ring-border shadow-soft"
                }`}
              >
                <img
                  src={logo}
                  alt="Codenest Collective Technologies"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span
                  className={`font-display font-bold text-[15px] tracking-tight whitespace-nowrap transition-colors duration-300 ${
                    onDark ? "text-white" : "text-foreground"
                  }`}
                >
                  Codenest Collective
                </span>
                <span
                  className={`text-[10px] uppercase tracking-[0.22em] font-semibold transition-colors duration-300 ${
                    onDark ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  Technologies
                </span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3.5 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                      active
                        ? onDark
                          ? "text-white"
                          : "text-primary"
                        : onDark
                          ? "text-white/95 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
                          : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 bottom-0.5 h-[2px] w-5 rounded-full ${
                          onDark ? "bg-white" : "bg-primary"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              {/* Contact CTA — desktop */}
              <Link
                to="/contact"
                className={`hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                  onDark
                    ? "bg-white text-primary hover:bg-white/90 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)]"
                    : "bg-primary text-white hover:bg-[hsl(var(--primary-hover))] shadow-soft"
                }`}
              >
                Contact
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* Hamburger */}
              <button
                className={`lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  onDark
                    ? "border-white/30 text-white hover:bg-white/10"
                    : "border-border text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-[90] lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-[hsl(var(--surface-inverse))]"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-hero-premium opacity-90" />
            <div className="absolute inset-0 bg-dots-subtle opacity-30" />
          </div>

          <div className="relative h-full flex flex-col px-6 pt-24 pb-10">
            <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
              <span className="eyebrow eyebrow-on-dark mb-6">Navigate</span>

              <nav className="flex flex-col">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`group flex items-center justify-between py-4 border-b border-white/10 transition-colors duration-200 ${
                      isActive(link.path) ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                    style={{ animation: `slideInUp 0.5s var(--ease-premium) ${index * 0.06}s both` }}
                  >
                    <span className="font-display text-2xl font-semibold tracking-tight">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </nav>

              <Link
                to="/contact"
                className="mt-10 inline-flex items-center justify-center gap-2 w-full py-4 rounded-md bg-white text-primary font-semibold text-base hover:bg-white/90 transition-all duration-300 shadow-soft-lg"
                style={{ animation: `slideInUp 0.5s var(--ease-premium) ${navLinks.length * 0.06}s both` }}
              >
                Book a Consultation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-center text-white/45 text-xs uppercase tracking-[0.2em] font-medium mt-8">
              Engineered Software · Built to Scale
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
