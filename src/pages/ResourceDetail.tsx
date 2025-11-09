import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, BookOpen, FileText, Video, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ResourceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Resource not found</h1>
          <Button onClick={() => navigate("/resources")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Map icon names to actual icon components
  const iconMap: { [key: string]: any } = {
    BookOpen,
    FileText,
    Video,
    Code
  };

  const Icon = iconMap[article.iconName] || BookOpen;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/resources")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Button>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Icon className="w-12 h-12 text-primary" />
              <Badge variant="secondary" className="capitalize text-base px-4 py-1">
                {article.type}
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-sm">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg mb-6">
                {article.excerpt}
              </p>
              
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold mb-3">Introduction</h3>
                <p className="text-muted-foreground mb-4">
                  This comprehensive {article.type} explores the key concepts and practical implementations 
                  that will help you master {article.tags[0].toLowerCase()} development. Whether you're just 
                  starting out or looking to deepen your expertise, this resource provides valuable insights 
                  and actionable strategies.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Key Takeaways</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Understanding core principles and best practices</li>
                  <li>Real-world implementation examples and use cases</li>
                  <li>Common pitfalls and how to avoid them</li>
                  <li>Performance optimization techniques</li>
                  <li>Future trends and emerging patterns</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Conclusion</h3>
                <p className="text-muted-foreground">
                  By implementing these strategies and following the best practices outlined in this resource, 
                  you'll be well-equipped to tackle complex challenges in {article.tags[0].toLowerCase()} development. 
                  Continue exploring our resources to stay updated with the latest trends and innovations.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Want to learn more?</h3>
            <p className="text-muted-foreground mb-6">
              Explore more resources and insights from our team of experts.
            </p>
            <Button onClick={() => navigate("/resources")} size="lg">
              Browse All Resources
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourceDetail;
