import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/codenest-logo.jpeg";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/codenest-collective-technologies/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/codenest_collective/" },
//     { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-background/95 to-muted/20 border-t border-primary/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12">
          {/* Company Info - Takes more space */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 rounded-lg blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
                <img src={logo} alt="Codenest Collective Technologies" className="relative h-10 w-10 rounded-lg" />
              </div>
              <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Codenest Collective Technologies
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Innovative <span className="text-primary font-medium">software solutions</span> for modern businesses. Building the future, one project at a time.
            </p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary hover:to-accent hover:text-white transition-all duration-300 flex items-center justify-center group/social border border-primary/20 hover:border-primary/50 hover:scale-110"
                  aria-label={social.name}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover/social:opacity-100 rounded-full transition-opacity duration-300"></div>
                  <social.icon size={18} className="relative z-10 group-hover/social:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full"></div>
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group/link">
                  <span className="w-0 h-px bg-primary group-hover/link:w-3 transition-all duration-200"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group/link">
                  <span className="w-0 h-px bg-primary group-hover/link:w-3 transition-all duration-200"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group/link">
                  <span className="w-0 h-px bg-primary group-hover/link:w-3 transition-all duration-200"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/company" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group/link">
                  <span className="w-0 h-px bg-primary group-hover/link:w-3 transition-all duration-200"></span>
                  Company
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group/link">
                  <span className="w-0 h-px bg-primary group-hover/link:w-3 transition-all duration-200"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group/link">
                  <span className="w-0 h-px bg-primary group-hover/link:w-3 transition-all duration-200"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-foreground flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-accent to-primary rounded-full"></div>
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground group/contact">
                <Mail size={16} className="mt-0.5 text-primary flex-shrink-0 group-hover/contact:scale-110 transition-transform duration-200" />
                <div>
                  <a href="mailto:sales@codenestcollective.net" className="hover:text-primary transition-colors duration-200 block">
                    sales@codenestcollective.net
                  </a>
                  <a href="mailto:meet@codenestcollective.net" className="hover:text-primary transition-colors duration-200 block mt-1">
                    meet@codenestcollective.net
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground group/contact">
                <Phone size={16} className="mt-0.5 text-accent flex-shrink-0 group-hover/contact:scale-110 transition-transform duration-200" />
                <a href="tel:+918735940200" className="hover:text-primary transition-colors duration-200">
                  +91 87359 40200
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground group/contact">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0 group-hover/contact:scale-110 transition-transform duration-200" />
                Ahmedabad, Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Codenest Collective Technologies</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
