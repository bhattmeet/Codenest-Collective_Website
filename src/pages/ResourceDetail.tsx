import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, BookOpen, FileText, Video, Code, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ResourceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resource = location.state;

  if (!resource) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <Navigation />
        <div className="text-center px-6">
          <h1 className="text-3xl font-bold mb-4 text-primary">Resource not found</h1>
          <p className="text-muted-foreground mb-6">The resource you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/resources")} size="lg">
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

  const Icon = iconMap[resource.iconName] || BookOpen;
  const formattedDate = new Date(resource.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${resource.title} - CodeNest Collective`}
        description={resource.excerpt}
        path="/resource-detail"
        keywords={`${resource.tags.join(', ')}, software development, coding guide`}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl opacity-60"></div>
        </div>
        <div className="container mx-auto max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/resources")}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Button>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-primary/10">
                <Icon className="w-10 h-10 text-primary" />
              </div>
              <Badge variant="secondary" className="capitalize text-base px-4 py-2">
                {resource.type.replace("-", " ")}
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-lg md:text-xl font-bold mb-6 text-primary leading-tight">
              {resource.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{formattedDate}</span>
              </div>
              <span className="text-primary">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>{resource.readTime}</span>
              </div>
              {resource.author && (
                <>
                  <span className="text-primary">•</span>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    <span>{resource.author}</span>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-sm border-primary/20 hover:bg-primary/10 transition-colors">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <article className="prose prose-lg lg:prose-xl max-w-none prose-headings:text-primary prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80 prose-strong:text-foreground prose-code:text-primary prose-code:bg-primary/5 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:shadow-soft-lg prose-img:rounded-xl prose-img:shadow-soft-xl">
            <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-soft-lg border border-primary/10">
                {resource.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: resource.content
                        .replace(/\n## /g, '<h2 class="text-4xl md:text-5xl font-bold mt-16 mb-8 text-primary leading-tight">')
                        .replace(/\n### /g, '<h3 class="text-3xl md:text-4xl font-semibold mt-12 mb-6 text-primary leading-snug">')
                        .replace(/\n#### /g, '<h4 class="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-primary leading-snug">')
                        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                        .replace(/\n\n/g, '</p><p class="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">')
                        .replace(/```(\w+)\n([\s\S]+?)```/g, '<pre class="bg-gray-900 text-gray-100 p-6 md:p-8 rounded-xl overflow-x-auto my-8 shadow-soft-lg border border-gray-700"><code class="language-$1 text-base md:text-lg">$2</code></pre>')
                        .replace(/`([^`]+)`/g, '<code class="text-primary bg-primary/5 px-2.5 py-1 rounded-md text-base font-mono border border-primary/10">$1</code>')
                        .replace(/\n- /g, '<li class="text-muted-foreground text-lg md:text-xl leading-relaxed mb-3">')
                        .replace(/✅ /g, '<span class="text-green-600 text-xl">✅</span> ')
                        .replace(/\n\n</g, '\n<p class="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">')
                    }}
                  />
                ) : (
                  <>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Overview</h2>
                    <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed mb-10">
                      {resource.excerpt}
                    </p>

                    <div className="border-l-4 border-primary pl-8 my-12 bg-gradient-to-r from-blue-50/50 to-transparent py-6 rounded-r-xl">
                      <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">Introduction</h3>
                      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                        This comprehensive {resource.type.replace("-", " ")} explores the key concepts and practical implementations
                        that will help you master {resource.tags[0]} development. Whether you're just
                        starting out or looking to deepen your expertise, this resource provides valuable insights
                        and actionable strategies.
                      </p>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-semibold mb-8 mt-16 text-primary">Key Takeaways</h3>
                    <ul className="space-y-4 mb-12">
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground text-lg md:text-xl leading-relaxed">Understanding core principles and best practices</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground text-lg md:text-xl leading-relaxed">Real-world implementation examples and use cases</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground text-lg md:text-xl leading-relaxed">Common pitfalls and how to avoid them</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground text-lg md:text-xl leading-relaxed">Performance optimization techniques</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground text-lg md:text-xl leading-relaxed">Future trends and emerging patterns</span>
                      </li>
                    </ul>

                    <h3 className="text-3xl md:text-4xl font-semibold mb-6 mt-16 text-primary">Conclusion</h3>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                      By implementing these strategies and following the best practices outlined in this resource,
                      you'll be well-equipped to tackle complex challenges in {resource.tags[0]} development.
                      Continue exploring our resources to stay updated with the latest trends and innovations.
                    </p>
                  </>
                )}
            </div>
          </article>

          {/* CTA Section */}
          <div className="mt-16">
            <Card className="border-primary/20 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden shadow-soft-xl">
              <CardContent className="p-8 md:p-12 text-center relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Want to learn more?</h3>
                <p className="text-muted-foreground mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  Explore more resources and insights from our team of experts. Stay ahead with cutting-edge content.
                </p>
                <Button onClick={() => navigate("/resources")} size="lg" className="gap-2 px-8 py-6 text-lg shadow-soft-lg hover:shadow-soft-xl hover:scale-105 transition-all">
                  Browse All Resources
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Button>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourceDetail;
