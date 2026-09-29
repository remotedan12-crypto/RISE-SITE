import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: any;
  breadcrumbTitle?: string;
}

const defaultDescription = "Rise & Shine Cleaning Service - Reliable residential, commercial, and property turnover cleaning in Texas and Colorado. Licensed, insured & vendor-ready.";
const defaultTitle = "Rise and Shine Cleaning Service";
const baseUrl = "https://riseandshinecs.com";

export const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  schema,
  breadcrumbTitle,
}: SEOProps) => {
  const location = useLocation();
  const metaTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const metaDescription = description || defaultDescription;
  
  // Auto-generate canonical if not provided
  const finalCanonical = canonicalUrl || `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbTitle ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": breadcrumbTitle,
        "item": finalCanonical
      }
    ]
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalCanonical} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
};
