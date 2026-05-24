import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import logo from "@/assets/codenest-logo.jpeg";
import NewsletterSignup from "@/components/NewsletterSignup";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/codenest-collective-technologies/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/codenest_collective/",
    },
  ];

  const linkGroups = [
    {
      title: "Capabilities",
      links: [
        { label: "Services", to: "/services" },
        { label: "Projects", to: "/projects" },
        { label: "Resources", to: "/resources" },
        { label: "Case Studies", to: "/projects" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Our Studio", to: "/company" },
        { label: "Careers", to: "/careers" },
        { label: "Contact", to: "/contact" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[hsl(var(--surface-inverse))] text-white overflow-hidden">
      {/* Premium gradient halo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[460px] h-[460px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-dots-subtle opacity-[0.07]" />
      </div>

      <div className="relative section-container">
        {/* Top brand band */}
        <div className="pt-16 pb-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <span className="relative flex items-center justify-center h-12 w-12 rounded-xl overflow-hidden ring-1 ring-white/20 shadow-lg">
                <img src={logo} alt="Codenest Collective Technologies" className="h-full w-full object-cover" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold tracking-tight">Codenest Collective</span>
                <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-white/55">
                  Technologies
                </span>
              </span>
            </Link>

            <p className="mt-6 text-sm text-white/65 leading-relaxed max-w-md">
              We design, engineer, and scale digital products — from emerging startups to established
              enterprises. Strategy, design, and software, delivered as one craft.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/[0.06] border border-white/10 text-white/80 hover:text-white hover:bg-white/[0.12] hover:border-white/25 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
              <a
                href="mailto:codenestcollective@gmail.com"
                className="ml-1 inline-flex items-center gap-1.5 px-3.5 h-10 rounded-lg bg-white/[0.06] border border-white/10 text-sm font-medium text-white/85 hover:text-white hover:bg-white/[0.12] hover:border-white/25 transition-all duration-300"
              >
                <Mail size={14} /> Email us
              </a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white/50 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.to + link.label}>
                    <Link
                      to={link.to}
                      className="group inline-flex items-center gap-1 text-sm text-white/75 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white/50 mb-4">
              Newsletter
            </h4>
            <NewsletterSignup />
          </div>
        </div>

        <div className="divider-hairline-on-dark" />

        {/* Bottom contact band */}
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-xs text-white/55">
            <a
              href="mailto:codenestcollective@gmail.com"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={13} className="text-primary" /> codenestcollective@gmail.com
            </a>
            <span className="hidden sm:inline-block h-3 w-px bg-white/20" />
            <span className="inline-flex items-center gap-2">
              <MapPin size={13} className="text-primary" /> Ahmedabad · Gujarat · India
            </span>
          </div>

          <p className="text-xs text-white/45">
            © {new Date().getFullYear()}{" "}
            <span className="text-white/75 font-medium">Codenest Collective Technologies</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
