import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/codenest-logo.jpeg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
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

  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav
        className={`fixed top-0 w-full transition-all duration-300 ${
          isOpen ? 'z-[95]' : 'z-50'
        } ${
          isOpen
            ? 'bg-transparent'
            : isHomePage && !isScrolled
              ? 'bg-transparent backdrop-blur-sm'
              : 'bg-background/95 backdrop-blur-2xl border-b border-primary/10 shadow-lg shadow-primary/5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 gap-4">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className="relative">
                <img src={logo} alt="Codenest Collective Technologies" className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover transition-transform group-hover:scale-110 duration-300 shadow-lg" />
              </div>
              <span className={`text-base sm:text-xl font-bold whitespace-nowrap transition-colors duration-300 ${
                isOpen || (isHomePage && !isScrolled) ? 'text-white drop-shadow-lg' : 'bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent'
              }`}>
                Codenest Collective Technologies
              </span>
            </Link>

            {/* Menu Button */}
            <button
              className={`flex-shrink-0 p-2 rounded-lg border-2 border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isOpen
                  ? 'hover:bg-white/20'
                  : isHomePage && !isScrolled
                    ? 'hover:bg-white/10'
                    : 'hover:bg-primary/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X size={28} className="text-white drop-shadow-lg" />
              ) : (
                <Menu size={24} className={isHomePage && !isScrolled ? "text-white" : "text-foreground"} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Navigation Menu - Full Screen Gradient Overlay */}
      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-[90]" role="dialog" aria-modal="true">
          {/* Backdrop with gradient and animated orbs */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0a1929] via-[#1a2f4a] to-[#0d1b2a]"
            onClick={() => setIsOpen(false)}
          >
            {/* Animated gradient orbs */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-[#5088FA]/20 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#42A5F5]/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          {/* Menu Content */}
          <div className="relative h-full flex items-center justify-center px-6 pt-24">
            <div className="w-full max-w-sm">
              {/* Navigation Links */}
              <nav className="space-y-2 mb-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-3 px-6 text-base font-semibold rounded-2xl transition-all duration-300 text-center ${
                      isActive(link.path)
                        ? "bg-white text-primary shadow-soft-lg scale-105"
                        : "text-white hover:bg-white/20 hover:scale-105 hover:shadow-soft"
                    }`}
                    style={{
                      animation: `slideInUp 0.4s ease-out ${index * 0.1}s both`
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Contact Button */}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button
                  size="lg"
                  className="w-full rounded-full bg-white text-primary hover:bg-white/90 shadow-soft-xl hover:shadow-soft-xl text-lg font-bold py-6 hover:scale-105 transition-all duration-300"
                  style={{
                    animation: `slideInUp 0.4s ease-out ${navLinks.length * 0.1}s both`
                  }}
                >
                  Contact Us
                </Button>
              </Link>

              {/* Decorative Text */}
              <p
                className="text-center text-white/60 text-sm mt-8"
                style={{
                  animation: `fadeIn 0.6s ease-out ${(navLinks.length + 1) * 0.1}s both`
                }}
              >
                Building Digital Excellence
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
