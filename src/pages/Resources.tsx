import { BookOpen, FileText, Video, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Resources = () => {
  const navigate = useNavigate();
  
  const articles = [
    {
      type: "blog",
      icon: BookOpen,
      iconName: "BookOpen",
      title: "Building Scalable Microservices with Docker and Kubernetes",
      excerpt: "Learn how to architect and deploy microservices that can handle millions of requests.",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      tags: ["DevOps", "Cloud"],
      url: "#",
    },
    {
      type: "case-study",
      icon: FileText,
      iconName: "FileText",
      title: "How We Reduced Cloud Costs by 40% for Fortune 500 Client",
      excerpt: "A deep dive into our cloud optimization strategies and implementation process.",
      date: "Mar 10, 2024",
      readTime: "12 min read",
      tags: ["Cloud", "Case Study"],
      url: "#",
    },
    {
      type: "video",
      icon: Video,
      iconName: "Video",
      title: "Introduction to Modern Web Development",
      excerpt: "A comprehensive video series covering React, TypeScript, and modern tooling.",
      date: "Mar 5, 2024",
      readTime: "45 min",
      tags: ["Web Dev", "Tutorial"],
      url: "#",
    },
    {
      type: "guide",
      icon: Code,
      iconName: "Code",
      title: "API Design Best Practices",
      excerpt: "Complete guide to designing RESTful and GraphQL APIs that scale.",
      date: "Feb 28, 2024",
      readTime: "15 min read",
      tags: ["Backend", "API"],
      url: "#",
    },
    {
      type: "blog",
      icon: BookOpen,
      iconName: "BookOpen",
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the development process.",
      date: "Feb 20, 2024",
      readTime: "10 min read",
      tags: ["AI", "Trends"],
      url: "#",
    },
    {
      type: "whitepaper",
      icon: FileText,
      iconName: "FileText",
      title: "Enterprise Security in the Cloud Era",
      excerpt: "Comprehensive whitepaper on securing cloud-based applications and infrastructure.",
      date: "Feb 15, 2024",
      readTime: "20 min read",
      tags: ["Security", "Enterprise"],
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">Resources</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Insights, guides, and best practices from our team of experts. Stay updated with the latest 
              in software development and technology trends.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => navigate('/resource-detail', { state: {
                  type: article.type,
                  iconName: article.iconName,
                  title: article.title,
                  excerpt: article.excerpt,
                  date: article.date,
                  readTime: article.readTime,
                  tags: article.tags,
                  url: article.url
                }})}
              >
                <Card className="border-border hover:border-primary/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <article.icon className="w-10 h-10 text-primary" />
                    <Badge variant="secondary" className="capitalize">{article.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
