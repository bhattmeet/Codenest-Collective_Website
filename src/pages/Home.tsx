import { ArrowRight, Code, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img 
            src={heroImage} 
            alt="Modern workspace" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Build The Future
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We create innovative software solutions that transform businesses and drive growth in the digital age.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business insight to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into reality.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gap-2">
              Contact Us Today <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
