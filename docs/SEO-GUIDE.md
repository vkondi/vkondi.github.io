# SEO Implementation Guide

This guide documents the SEO (Search Engine Optimization) implementation in the portfolio website. Follow these guidelines to maintain and extend SEO capabilities.

## Overview

The project implements comprehensive SEO through:

- **Pre-rendering (SSG)** via react-snap
- **Dynamic meta tags** via React 19's native document metadata
- **Structured data** (Schema.org JSON-LD)
- **Sitemap and robots.txt** for search engine crawlers
- **Analytics** via Cloudflare Web Analytics

---

## 1. SEO Component Usage

The `SEO` component (`src/components/SEO.tsx`) provides a declarative way to set page-specific meta tags using React 19's native document metadata feature.

### Basic Usage

```tsx
import SEO from "../components/SEO";

const MyPage = () => (
  <>
    <SEO
      title="Page Title"
      description="Page description for search results"
      url="/page-url"
      keywords={["keyword1", "keyword2"]}
    />
    {/* Page content */}
  </>
);
```

### Available Props

| Prop             | Type                                  | Default                        | Description                       |
| ---------------- | ------------------------------------- | ------------------------------ | --------------------------------- |
| `title`          | `string`                              | "Vishwajeet Kondi - Portfolio" | Page title                        |
| `description`    | `string`                              | Default portfolio description  | Meta description                  |
| `image`          | `string`                              | `/thumbnail.png`               | OG/Twitter image URL              |
| `url`            | `string`                              | Base URL                       | Canonical URL                     |
| `type`           | `"website" \| "article" \| "profile"` | `"website"`                    | OG type                           |
| `publishedTime`  | `string`                              | -                              | Article published time (ISO 8601) |
| `modifiedTime`   | `string`                              | -                              | Article modified time (ISO 8601)  |
| `author`         | `string`                              | "Vishwajeet Kondi"             | Content author                    |
| `keywords`       | `string[]`                            | Default keywords               | SEO keywords                      |
| `canonical`      | `string`                              | Same as `url`                  | Canonical URL override            |
| `noindex`        | `boolean`                             | `false`                        | Prevent indexing                  |
| `structuredData` | `object`                              | -                              | Schema.org JSON-LD data           |

### With Structured Data

```tsx
<SEO
  title="Home"
  structuredData={{
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vishwajeet Kondi",
    jobTitle: "Software Developer",
    url: "https://vishwajeetkondi.vercel.app",
  }}
/>
```

---

## 2. Pre-rendering (SSG) with react-snap

The project uses `react-snap` for static site generation (pre-rendering).

### Configuration

Located in `package.json`:

```json
{
  "react-snap": {
    "source": "dist",
    "destination": "dist",
    "include": ["/", "/personal-projects", "/blogs"],
    "skipThirdPartyRequests": true
  }
}
```

### Adding New Routes

When adding new routes:

1. Add the route to the router (`src/router/index.tsx`)
2. Add the path to `react-snap.include` in `package.json`
3. Add the URL to `sitemap.xml`

---

## 3. Sitemap and Robots.txt

### Sitemap (`public/sitemap.xml`)

Contains all public URLs for search engines:

```xml
<url>
  <loc>https://vishwajeetkondi.vercel.app/</loc>
  <lastmod>2024-12-31</lastmod>
  <changefreq>monthly</changefreq>
  <priority>1.0</priority>
</url>
```

**Update the sitemap when:**

- Adding new pages
- Changing existing URLs
- Updating content (update `lastmod`)

### Robots.txt (`public/robots.txt`)

Controls search engine crawler access:

```txt
User-agent: *
Allow: /
Sitemap: https://vishwajeetkondi.vercel.app/sitemap.xml
```

---

## 4. Structured Data (Schema.org)

Structured data helps search engines understand page content. The project implements:

### Person Schema (Home page)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vishwajeet Kondi",
  "jobTitle": "Software Developer",
  "sameAs": [
    "https://github.com/vkondi",
    "https://linkedin.com/in/vishwajeetkondi"
  ]
}
```

### WebSite Schema (Home page)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vishwajeet Kondi - Portfolio",
  "url": "https://vishwajeetkondi.vercel.app"
}
```

### Testing Structured Data

Use [Google's Rich Results Test](https://search.google.com/test/rich-results) to validate structured data.

---

## 5. Open Graph and Twitter Cards

The SEO component automatically generates:

### Open Graph Tags

```html
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Description" />
<meta property="og:image" content="https://example.com/image.png" />
<meta property="og:url" content="https://example.com/page" />
<meta property="og:type" content="website" />
```

### Twitter Card Tags

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title" />
<meta name="twitter:description" content="Description" />
<meta name="twitter:image" content="https://example.com/image.png" />
```

### Testing Social Previews

- **Facebook**: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Twitter/X**: [Card Validator](https://cards-dev.twitter.com/validator)
- **LinkedIn**: [Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 6. Google Search Console

Google Search Console helps monitor your site's presence in Google Search results and optimize visibility.

### Setup

1. **Visit [Google Search Console](https://search.google.com/search-console)**
2. **Choose a property type**: URL prefix (recommended for single domain)
3. **Verify ownership** using one of these methods:
   - **HTML file**: Download and upload to `public/` folder
   - **HTML meta tag**: Add to `index.html` head (via SEO component or directly)
   - **DNS record**: Add TXT record to domain DNS
   - **Google Analytics**: Use existing GA property

### HTML Meta Tag Verification Example

If using HTML meta tag, add to your `index.html`:

```html
<meta name="google-site-verification" content="your-verification-code" />
```

Or programmatically via the SEO component in your root page.

### After Verification

1. **Submit sitemap**: Go to Sitemaps section and submit `https://vishwajeetkondi.vercel.app/sitemap.xml`
2. **Monitor performance**: Check impressions, clicks, and average position
3. **Check coverage**: Ensure all URLs are properly indexed
4. **Fix errors**: Address crawl errors and indexing issues reported

---

## 7. Analytics

The project uses Cloudflare Web Analytics for privacy-friendly tracking.

### Configuration

Located in `index.html`:

```html
<script
  defer
  src="https://static.cloudflareinsights.com/beacon.min.js"
  data-cf-beacon='{"token": "your-token"}'
></script>
```

### Features

- No cookies required
- GDPR compliant
- Page views and performance metrics
- Core Web Vitals tracking

---

## 8. Best Practices Checklist

### For Each New Page

- [ ] Add `<SEO>` component with unique title and description
- [ ] Include relevant keywords
- [ ] Set correct canonical URL
- [ ] Add to sitemap.xml if publicly accessible
- [ ] Add to react-snap include list

### For Content Updates

- [ ] Update `lastmod` in sitemap.xml
- [ ] Review and update meta descriptions if needed
- [ ] Ensure structured data reflects changes

### Performance (Core Web Vitals)

- [ ] Images have appropriate dimensions and lazy loading
- [ ] Critical CSS is inlined or preloaded
- [ ] JavaScript bundles are code-split (lazy loaded routes)
- [ ] Fonts use `display=swap`

### Accessibility (affects SEO)

- [ ] All images have alt text
- [ ] Headings follow proper hierarchy (h1, h2, h3...)
- [ ] Interactive elements are keyboard accessible
- [ ] Color contrast meets WCAG guidelines

---

## 9. Testing and Validation Tools

| Tool                                                                   | Purpose                         |
| ---------------------------------------------------------------------- | ------------------------------- |
| [Google Search Console](https://search.google.com/search-console)      | Monitor search performance      |
| [PageSpeed Insights](https://pagespeed.web.dev/)                       | Performance and Core Web Vitals |
| [Rich Results Test](https://search.google.com/test/rich-results)       | Validate structured data        |
| [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) | Mobile usability                |
| [Lighthouse](https://developer.chrome.com/docs/lighthouse/)            | Comprehensive audit             |

---

## Summary

Maintain SEO quality by:

1. **Using the SEO component** on every page
2. **Keeping sitemap.xml updated** with all public URLs
3. **Testing changes** with validation tools
4. **Monitoring performance** via Cloudflare Analytics
5. **Following accessibility** best practices

For questions or improvements, refer to the [Contributing Guide](../CONTRIBUTING.md).
