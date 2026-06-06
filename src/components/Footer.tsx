import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import logo from "@/assets/codenest-logo.jpeg";
import NewsletterSignup from "@/components/NewsletterSignup";
import { companyInfo } from "@/data/companyData";

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

  // Distinct destinations only — every link below opens a different page.
  const sitemapLinks = [
    { label: "The Work", to: "/projects" },
    { label: "What We Build", to: "/services" },
    { label: "How We Run It", to: "/about" },
    { label: "The Collective", to: "/company" },
    { label: "From The Build Floor", to: "/resources" },
    { label: "Careers", to: "/careers" },
    { label: "Start A Project", to: "/contact" },
  ];

  // "How we operate" — distinct, useful info, not a duplicate of /services.
  const studioCommitments = [
    "NDA-Ready On Day 1",
    "Milestone-Based Billing",
    "Source Code Owned By You",
    "Weekly Progress Reports",
    "SRS On Every Project",
    "24h Response · 48h Scoping",
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
        {/* Tagline band */}
        <div className="pt-16 pb-10">
          <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
            Build The <span className="font-serif-accent text-white/85">Future.</span>
          </p>
        </div>

        <div className="divider-hairline-on-dark" />

        {/* Main grid:
            - Brand block: 4/12
            - Sitemap:    2/12
            - Studio:     2/12
            - Newsletter: 4/12  (was 2 — now wide enough for the email input)
        */}
        <div className="pt-12 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <span className="relative flex items-center justify-center h-12 w-12 rounded-xl overflow-hidden ring-1 ring-white/20 shadow-lg">
                <img src={logo} alt="Codenest Collective" className="h-full w-full object-cover" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold tracking-tight">
                  Codenest Collective
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-white/55">
                  Technologies
                </span>
              </span>
            </Link>

            <p className="mt-6 text-sm text-white/65 leading-relaxed max-w-md">
              A remote-first engineering collective. We build Flutter apps, Android systems, and
              Node.js backends for teams who can't afford to ship slow.
            </p>

            {/* Social row */}
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
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex items-center gap-1.5 px-3.5 h-10 rounded-lg bg-white/[0.06] border border-white/10 text-sm font-medium text-white/85 hover:text-white hover:bg-white/[0.12] hover:border-white/25 transition-all duration-300"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white/50 mb-4">
              Sitemap
            </h4>
            <ul className="space-y-2.5">
              {sitemapLinks.map((link) => (
                <li key={link.to}>
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

          {/* How we operate — distinct from /services, no nav duplication */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white/50 mb-4">
              How We Operate
            </h4>
            <ul className="space-y-2.5">
              {studioCommitments.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/75 leading-tight">
                  <CheckCircle2
                    size={13}
                    className="text-primary flex-shrink-0 mt-1"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter — now 4/12 so the input has room */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white/50 mb-4">
              The Brief · Monthly Engineering Memo
            </h4>
            <NewsletterSignup />
          </div>
        </div>

        <div className="divider-hairline-on-dark" />

        {/* Bottom contact band */}
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-xs text-white/55">
            <a
              href={`mailto:${companyInfo.email}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={13} className="text-primary" /> {companyInfo.email}
            </a>
            <a
              href={`tel:${companyInfo.phoneE164}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone size={13} className="text-primary" /> {companyInfo.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={13} className="text-primary" /> Remote-First · Based in India
            </span>
          </div>

          <p className="text-xs text-white/45">
            © {new Date().getFullYear()}{" "}
            <span className="text-white/75 font-medium">Codenest Collective</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
