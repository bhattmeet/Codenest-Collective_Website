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
    // { name: "Resources", path: "/resources" }, // Hidden for now
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
      <nav className={`fixed top-0 w-full transition-all duration-300 ${
        isOpen ? 'z-[95]' : 'z-50'
      } ${
        isOpen
          ? 'bg-transparent'
          : isHomePage && !isScrolled
            ? 'bg-transparent backdrop-blur-sm'
            : 'bg-background/95 backdrop-blur-2xl border-b border-primary/10 shadow-lg shadow-primary/5'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 gap-4">
            <Link to="/" className={`flex items-center gap-2 sm:gap-3 group flex-shrink-0 transition-opacity duration-300 ${
              isOpen ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto' : 'opacity-100'
            }`}>
              <div className="relative">
                <img src={logo} alt="Codenest Collective Technologies" className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover transition-transform group-hover:scale-110 duration-300 shadow-lg" />
              </div>
              <span className={`text-base sm:text-xl font-bold whitespace-nowrap transition-colors duration-300 ${
                isHomePage && !isScrolled ? 'text-white drop-shadow-lg' : 'bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent'
              }`}>
                Codenest Collective Technologies
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-semibold transition-colors duration-300 group/link ${
                    isHomePage && !isScrolled
                      ? isActive(link.path)
                        ? "text-white"
                        : "text-white/90 hover:text-white"
                      : isActive(link.path)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    isHomePage && !isScrolled
                      ? 'bg-white'
                      : 'bg-gradient-to-r from-primary to-accent'
                  } ${
                    isActive(link.path)
                      ? "w-full"
                      : "w-0 group-hover/link:w-full"
                  }`}></span>
                </Link>
              ))}
              <Link to="/contact">
                <Button
                  size="sm"
                  className={`rounded-full transition-all duration-300 hover:scale-105 ${
                    isHomePage && !isScrolled
                      ? 'bg-white text-[#5088FA] hover:bg-white/90 shadow-lg'
                      : 'bg-[#5088FA] text-white hover:bg-[#4078EA] shadow-lg hover:shadow-xl hover:shadow-primary/50'
                  }`}
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${
                isOpen
                  ? 'hover:bg-white/20'
                  : isHomePage && !isScrolled
                    ? 'hover:bg-white/10'
                    : 'hover:bg-primary/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
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

      {/* Mobile Navigation - Full Screen Gradient Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[90]">
          {/* Backdrop with gradient and animated orbs */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent"
            onClick={() => setIsOpen(false)}
          >
            {/* Animated gradient orbs */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          {/* Menu Content */}
          <div className="relative h-full flex items-center justify-center px-6 pt-24">
            <div className="w-full max-w-sm">
              {/* Logo */}
              <div className="flex flex-col items-center justify-center mb-12 animate-fade-in">
                <img src={logo} alt="Codenest Collective Technologies" className="h-20 w-20 rounded-full object-cover shadow-2xl mb-4" />
                <span className="text-2xl font-bold text-white drop-shadow-lg text-center">
                  Codenest Collective Technologies
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2 mb-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-4 px-6 text-lg font-semibold rounded-2xl transition-all duration-300 text-center ${
                      isActive(link.path)
                        ? "bg-white text-primary shadow-xl scale-105"
                        : "text-white hover:bg-white/20 hover:scale-105"
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
                  className="w-full rounded-full bg-white text-primary hover:bg-white/90 shadow-2xl text-lg font-bold py-6 hover:scale-105 transition-all duration-300"
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
