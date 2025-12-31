import { type FC, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  structuredData?: object;
  children?: ReactNode;
};

const SEO: FC<SEOProps> = ({
  title = "Vishwajeet Kondi - Portfolio",
  description = "Portfolio website showcasing my work and experience in software development",
  image = "https://vishwajeetkondi.vercel.app/thumbnail.png",
  url = "https://vishwajeetkondi.vercel.app",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Vishwajeet Kondi",
  keywords = [
    "portfolio",
    "software developer",
    "full stack",
    "react",
    "javascript",
  ],
  canonical,
  noindex = false,
  structuredData,
  children,
}) => {
  const fullTitle = title.includes("Vishwajeet Kondi")
    ? title
    : `${title} | Vishwajeet Kondi`;
  const fullUrl = url.startsWith("http")
    ? url
    : `https://vishwajeetkondi.vercel.app${url}`;
  const fullImage = image.startsWith("http")
    ? image
    : `https://vishwajeetkondi.vercel.app${image}`;
  const canonicalUrl = canonical || fullUrl;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords.join(", ")} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Vishwajeet Kondi Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:url" content={fullUrl} />

      {/* Article specific meta tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Additional children */}
      {children}
    </Helmet>
  );
};

export default SEO;
