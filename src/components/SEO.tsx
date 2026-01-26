import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  type?: string;
  image?: string;
  author?: string;
  publishedTime?: string;
}

const SEO = ({
  title,
  description,
  path,
  keywords = "software development, custom software, web development, mobile app development, enterprise software, Codenest Collective Technologies",
  type = "website",
  image,
  author,
  publishedTime
}: SEOProps) => {
  const baseUrl = "https://www.codenestcollective.net";
  const fullUrl = `${baseUrl}${path}`;
  const siteName = "Codenest Collective Technologies";
  const defaultLogo = `${baseUrl}/codenest-logo.jpeg`;
  const ogImage = image || defaultLogo;

  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": baseUrl,
    "logo": defaultLogo,
    "description": "Custom software development company specializing in web and mobile applications",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8735940200",
      "contactType": "Customer Service",
      "email": "contact@codenestcollective.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/codenest-collective-technologies/",
      "https://www.instagram.com/codenest_collective/",
      "https://twitter.com/codenest_tech",
      "https://github.com/codenest-collective"
    ]
  };

  // JSON-LD for WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/resources?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      {author && <meta name="author" content={author} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@codenest_tech" />
      <meta name="twitter:creator" content="@codenest_tech" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
