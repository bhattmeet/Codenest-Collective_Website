import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/codenest-logo.jpeg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-2xl border-b border-primary/10 z-50 shadow-lg shadow-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 gap-4">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 rounded-lg blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
              <img src={logo} alt="Codenest Collective Technologies" className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-lg transition-transform group-hover:scale-110 duration-300" />
            </div>
            <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent whitespace-nowrap animate-gradient bg-[length:200%_auto]">
              Codenest Collective Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 group/link ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  isActive(link.path)
                    ? "w-full"
                    : "w-0 group-hover/link:w-full"
                }`}></span>
              </Link>
            ))}
            <Link to="/contact">
              <Button size="sm" className="rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex-shrink-0 p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-primary/10 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button size="sm" className="mt-4 w-full rounded-full">Contact Us</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
