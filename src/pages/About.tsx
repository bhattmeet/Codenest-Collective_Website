import { Code, Users, RefreshCw, Shield, CheckCircle, ArrowRight, Rocket, Trophy, TrendingUp, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { companyStats, companyInfo } from "@/data/companyData";
import { allProjects } from "@/pages/Projects";

const About = () => {
  useScrollReveal();
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#3B6FE6] to-[#5A8BF5] relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="section-title text-4xl md:text-5xl font-bold mb-6 text-white">
            About CodeNest Collective
          </h1>
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            Building scalable software solutions for startups and growing businesses
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div>
              <span className="font-bold text-white">{companyStats.yearsExperience}+ years</span>
              <span className="text-white/80"> of experience</span>
            </div>
            <div className="w-px bg-white/30"></div>
            <div>
              <span className="font-bold text-white">{allProjects.length}+ projects</span>
              <span className="text-white/80"> delivered</span>
            </div>
            <div className="w-px bg-white/30"></div>
            <div>
              <span className="font-bold text-white">{companyStats.clientsWorldwide}+ clients</span>
              <span className="text-white/80"> worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg md:text-lg text-muted-foreground leading-relaxed">
                We empower startups and growing businesses with scalable, high-quality software solutions.
                Our expertise spans web and mobile applications, backend systems, and UI/UX design.
                We serve <span className="text-primary font-semibold">Domestic and international clients</span> who
                need reliable, senior-level development partners they can trust.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Meet Our Founder</h2>
            <p className="text-lg text-muted-foreground">
              Leadership driven by expertise and passion for technology
            </p>
          </div>

          <Card className="border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-[300px,1fr] gap-8">
                {/* Founder Photo */}
                <div className="bg-primary/10 p-8 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary">MB</div>
                  </div>
                </div>

                {/* Founder Bio */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-primary">Meet Bhatt</h3>
                  <p className="text-lg text-accent mb-6">Founder & CEO</p>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      With over {companyStats.yearsExperience}+ years of hands-on experience in full-stack development, Meet brings deep
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
                        <p className="font-semibold text-foreground">{allProjects.length}+ Projects</p>
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
                        <p className="font-semibold text-foreground">{companyStats.clientsWorldwide}+ Clients</p>
                        <p className="text-sm text-muted-foreground">Global partnerships</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">{companyStats.yearsExperience}+ Years</p>
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

      {/* Journey Timeline Section */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to delivering excellence - here's how we've grown
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* 2023 - Founded */}
            <Card className="card-glass stagger-1 border-2 border-primary/20 transition-all duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center mb-6 border-4 border-primary/10">
                  <Rocket className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-3 text-primary">2023</h3>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Company Founded</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  CodeNest Collective Technologies was born with a vision to empower startups.
                </p>
              </CardContent>
            </Card>

            {/* 2024 - First Clients */}
            <Card className="card-glass stagger-2 border-2 border-primary/20 transition-all duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center mb-6 border-4 border-primary/10">
                  <Trophy className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-3 text-primary">2024</h3>
                <h4 className="text-lg font-semibold mb-4 text-foreground">First Major Clients</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Delivered {allProjects.length}+ successful projects and built strong relationships with clients worldwide.
                </p>
              </CardContent>
            </Card>

            {/* 2025 - Growth */}
            <Card className="card-glass stagger-3 border-2 border-primary/20 transition-all duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center mb-6 border-4 border-primary/10">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-3 text-primary">2025</h3>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Rapid Growth</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Expanded our service offerings and established ourselves as a trusted development partner.
                </p>
              </CardContent>
            </Card>

            {/* 2026 - Future */}
            <Card className="card-glass stagger-4 border-2 border-primary/20 transition-all duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center mb-6 border-4 border-primary/10">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-3 text-primary">2026</h3>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Vision Ahead</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Continuing to innovate and help businesses transform with cutting-edge technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`card-glass stagger-${(index % 2) + 1} border-primary/20 transition-all`}>
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="p-4 rounded-xl bg-primary/10 flex-shrink-0">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
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
      <section className="py-16 md:py-24 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-6">
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
