import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  type?: string;
}

const SEO = ({
  title,
  description,
  path,
  keywords = "software development, custom software, web development, mobile app development, enterprise software, Codenest Collective Technologies",
  type = "website"
}: SEOProps) => {
  const baseUrl = "https://codenestcollective.net";
  const fullUrl = `${baseUrl}${path}`;
  const siteName = "Codenest Collective Technologies";
  const logoUrl = `${baseUrl}/codenest-logo.jpeg`;

  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logoUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logoUrl} />
    </Helmet>
  );
};

export default SEO;
