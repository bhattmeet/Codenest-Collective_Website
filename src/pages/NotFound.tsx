import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowUpRight, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2E5BDA] to-[#4874E8] grain-overlay text-white">
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%)",
          }}
        />
      </div>

      {/* Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-32 w-[460px] h-[460px] rounded-full bg-[#5088FA]/40 blur-[120px] animate-blob" />
        <div className="absolute bottom-0 -right-32 w-[460px] h-[460px] rounded-full bg-[#42A5F5]/35 blur-[120px] animate-blob animation-delay-3000" />
      </div>

      <span className="corner-plus text-white/40 top-6 left-6" />
      <span className="corner-plus text-white/40 top-6 right-6" />
      <span className="corner-plus text-white/40 bottom-6 left-6" />
      <span className="corner-plus text-white/40 bottom-6 right-6" />

      <div className="relative z-10 px-6 text-center max-w-2xl mx-auto">
        <span className="eyebrow eyebrow-on-dark justify-center mb-8 animate-fade-in">
          404 · Page not found
        </span>

        <h1
          className="font-display text-[24vw] md:text-[240px] leading-none font-bold tracking-tightest mb-2 text-white relative"
          style={{
            textShadow:
              "0 24px 60px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          404
        </h1>

        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          This Page Doesn't Exist.{" "}
          <span className="font-serif-accent text-white/85">The Code Might Though.</span>
        </h2>
        <p className="text-base md:text-lg text-white/70 max-w-md mx-auto mb-10 leading-relaxed">
          Whatever you were looking for, we didn't build this page. Yet. Let's get you back
          somewhere useful.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/">
            <button className="shine-sweep inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[hsl(var(--primary-deep))] font-semibold text-sm shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300">
              <Home className="w-4 h-4 relative z-[2]" />
              <span className="relative z-[2]">Back To Home</span>
            </button>
          </Link>
          <Link to="/contact">
            <button className="btn-ghost-light text-sm">
              Start A Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
