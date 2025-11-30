import { ArrowRight, Code, Zap, Shield, Users, Sparkles, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built to match your unique business needs.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile methodology ensures rapid development without compromising quality.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security measures to protect your data and applications.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your project's success.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Codenest Collective Technologies - Build The Future"
        description="Codenest Collective Technologies creates innovative software solutions that transform businesses. Expert team delivering custom development, web applications, mobile apps, and enterprise software with agile methodology."
        path="/"
        keywords="software development, custom software, web development, mobile app development, enterprise software, Codenest Collective Technologies"
      />
      <Navigation />

      {/* Hero Section - Modern 2025 Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-background">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10"></div>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <img
            src={heroImage}
            alt="Modern workspace"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.02]"
          />
        </div>

        <div className="container mx-auto px-6 text-center animate-fade-in py-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Welcome to the Future of Development</span>
          </div>

          {/* Main Heading - Fixed Descender Clipping Issue */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.2] pb-4">
            <span className="block mb-2 pb-1">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Transform Ideas Into
              </span>
            </span>
            <span className="block pb-2 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Digital Reality
            </span>
          </h1>

          {/* Subtitle - More Descriptive */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We build <span className="text-primary font-semibold">innovative software solutions</span> that empower businesses to thrive in the digital age. From web and mobile apps to cloud infrastructure and AI integration.
            </p>
          </div>

          {/* CTA Buttons with Modern Styling */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="gap-2 text-base px-8 py-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/50">
                <Rocket className="w-5 h-5" />
                Start Your Project
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="gap-2 text-base px-8 py-6 rounded-full hover:scale-105 transition-transform duration-300 backdrop-blur-sm border-2 hover:border-primary hover:bg-primary hover:text-white">
                View Our Work
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators - Below CTA */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>Fast delivery</span>
            </div>
          </div>

          {/* Stats Section with Glassmorphism - More Compact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Projects Delivered", value: "50+", icon: Code },
              { label: "Happy Clients", value: "30+", icon: Users },
              { label: "Team Experts", value: "10+", icon: Users },
              { label: "Countries", value: "3+", icon: Users }
            ].map((stat, index) => (
              <div key={index} className="group p-5 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Modern Cards with Glassmorphism */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Excellence in Every
              </span>
              <br />
              Detail
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business insight to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative border-primary/10 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500"></div>

                <CardContent className="pt-8 pb-6 relative z-10">
                  {/* Icon with Animated Background */}
                  <div className="mb-6 relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300"></div>
                    <div className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Animated Border Bottom */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Clients Section
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted By Industry Leaders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud to partner with innovative companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center opacity-60">
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-primary text-center px-2">TechCorp</div>
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-accent text-center px-2">InnovateLab</div>
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-primary text-center px-2">CloudSync</div>
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-accent text-center px-2">DataFlow</div>
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-accent text-center px-2">SmartOps</div>
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-primary text-center px-2">SecureNet</div>
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-accent text-center px-2">AgileHub</div>
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-primary text-center px-2">DevForce</div>
          </div>
        </div>
      </section>
       */}

      {/* CTA Section - Redesigned Modern Card */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"></div>
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            {/* Main CTA Card */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Card Content */}
              <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-background via-background/95 to-background/90 border border-primary/20 shadow-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full filter blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full filter blur-3xl -z-10"></div>

                <div className="relative z-10">
                  {/* Icon Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 mb-6">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>

                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    Ready to Start Your
                    <span className="block mt-2 pb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Next Big Project?
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                    Let's transform your vision into reality. Our expert team is ready to bring your ideas to life with cutting-edge technology and innovative solutions.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Link to="/contact" className="flex-1 sm:flex-none">
                      <Button size="lg" className="w-full gap-2 text-base px-8 py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/50">
                        <Sparkles className="w-5 h-5" />
                        Get Started Now
                        <ArrowRight size={20} />
                      </Button>
                    </Link>
                    <Link to="/services" className="flex-1 sm:flex-none">
                      <Button size="lg" variant="outline" className="w-full gap-2 text-base px-8 py-6 rounded-full hover:scale-105 transition-all duration-300 backdrop-blur-sm border-2 hover:border-primary hover:bg-primary hover:text-white">
                        View Services
                      </Button>
                    </Link>
                  </div>

                  {/* Trust Signals */}
                  <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-primary/10">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span>Fast Response Time</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>100% Secure</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-accent" />
                      <span>Expert Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
