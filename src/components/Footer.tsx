import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/codenest-logo.jpeg";
import NewsletterSignup from "@/components/NewsletterSignup";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/codenest-collective-technologies/", color: "hover:bg-[#0A66C2]" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/codenest_collective/", color: "hover:bg-gradient-to-tr hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]" },
  ];

  return (
    <footer className="glass-effect border-t border-primary/10">
      <div className="section-container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="Codenest Collective Technologies" className="h-8 w-8 rounded-full object-cover" />
              <h3 className="text-sm font-bold text-white">
                Codenest Collective Technologies
              </h3>
            </div>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Building innovative software solutions for modern businesses.
            </p>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-gray-800 ${social.color} text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg group`}
                  aria-label={social.name}
                >
                  <social.icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-white text-sm">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="text-xs text-gray-400 hover:text-[#5088FA] transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-xs text-gray-400 hover:text-[#5088FA] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-xs text-gray-400 hover:text-[#5088FA] transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-xs text-gray-400 hover:text-[#5088FA] transition-colors duration-200">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-white text-sm">Company</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/company" className="text-xs text-gray-400 hover:text-[#5088FA] transition-colors duration-200">
                  About Company
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-xs text-gray-400 hover:text-[#5088FA] transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs text-gray-400 hover:text-[#5088FA] transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 text-white text-sm">Get In Touch</h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2 text-xs text-gray-400">
                <Mail size={14} className="mt-0.5 text-[#5088FA] flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:meet.bhatt@codenestcollective.net" className="hover:text-[#5088FA] transition-colors duration-200">
                    meet.bhatt@codenestcollective.net
                  </a>
                  <a href="mailto:het.patel@codenestcollective.net" className="hover:text-[#5088FA] transition-colors duration-200">
                    het.patel@codenestcollective.net
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-xs text-gray-400">
                <Phone size={14} className="mt-0.5 text-[#5088FA] flex-shrink-0" />
                <a href="tel:+918735940200" className="hover:text-[#5088FA] transition-colors duration-200">
                  +91 87359 40200
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-gray-400">
                <MapPin size={14} className="mt-0.5 text-[#5088FA] flex-shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:pl-4">
            <NewsletterSignup />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} <span className="text-[#5088FA] font-semibold">Codenest Collective Technologies</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
