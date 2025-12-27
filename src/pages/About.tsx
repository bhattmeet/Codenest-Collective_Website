import { Code, Users, RefreshCw, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Quality Code",
      description: "We write clean, maintainable code following industry best practices and standards. Every line is crafted with precision and attention to detail."
    },
    {
      icon: Users,
      title: "Client-First Approach",
      description: "Your success is our priority. We listen, collaborate, and adapt to ensure we're delivering exactly what you need."
    },
    {
      icon: RefreshCw,
      title: "Agile Process",
      description: "We embrace agile methodologies for flexibility and rapid iteration, keeping you involved at every stage of development."
    },
    {
      icon: Shield,
      title: "Security Focus",
      description: "Security is built into every layer of our solutions. We implement robust measures to protect your data and applications."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us - CodeNest Collective Technologies"
        description="Learn about CodeNest Collective Technologies. With 6+ years of experience, we build scalable software solutions for startups and growing businesses. Meet our founder and discover our values."
        path="/about"
        keywords="about codenest, software development company, startup development, scalable software, tech company values"
      />
      <Navigation />

      {/* Company Intro Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl opacity-60"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            About CodeNest Collective
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Building scalable software solutions for startups and growing businesses
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div>
              <span className="font-bold text-primary">6+ years</span>
              <span className="text-muted-foreground"> of experience</span>
            </div>
            <div className="w-px bg-border"></div>
            <div>
              <span className="font-bold text-primary">50+ projects</span>
              <span className="text-muted-foreground"> delivered</span>
            </div>
            <div className="w-px bg-border"></div>
            <div>
              <span className="font-bold text-primary">30+ clients</span>
              <span className="text-muted-foreground"> worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We empower startups and growing businesses with scalable, high-quality software solutions.
                Our expertise spans web and mobile applications, backend systems, and UI/UX design.
                We serve <span className="text-primary font-semibold">Indian and international clients</span> who
                need reliable, senior-level development partners they can trust.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Meet Our Founder</h2>
            <p className="text-lg text-muted-foreground">
              Leadership driven by expertise and passion for technology
            </p>
          </div>

          <Card className="border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-[300px,1fr] gap-8">
                {/* Founder Photo */}
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary/10 border-4 border-primary/30 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary">MB</div>
                  </div>
                </div>

                {/* Founder Bio */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2 text-primary">Meet Bhatt</h3>
                  <p className="text-lg text-accent mb-6">Founder & Lead Developer</p>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      With over 6 years of hands-on experience in full-stack development, Meet brings deep
                      expertise in Flutter, Android (Kotlin), Node.js, Express.js, MongoDB, and Firebase.
                    </p>
                    <p>
                      Having worked with startups and established businesses across multiple industries,
                      Meet understands the unique challenges of building scalable digital products. His
                      approach combines technical excellence with business acumen to deliver solutions
                      that truly move the needle.
                    </p>
                  </div>

                  {/* Credibility Highlights */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">50+ Projects</p>
                        <p className="text-sm text-muted-foreground">Successfully delivered</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Full-Stack Expert</p>
                        <p className="text-sm text-muted-foreground">Mobile, Web, Backend</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">30+ Clients</p>
                        <p className="text-sm text-muted-foreground">Global partnerships</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">6+ Years</p>
                        <p className="text-sm text-muted-foreground">Industry experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="p-4 rounded-xl bg-primary/10 flex-shrink-0">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Let's discuss how we can help bring your project to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 bg-white text-primary hover:bg-white/90 px-6 md:px-8 py-4 md:py-6">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" className="gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#5088FA] px-6 md:px-8 py-4 md:py-6">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
