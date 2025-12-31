import { render, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./SEO";

describe("SEO component", () => {
  // Helper to render with HelmetProvider
  const renderSEO = (props?: Partial<React.ComponentProps<typeof SEO>>) => {
    return render(
      <HelmetProvider>
        <SEO {...props} />
      </HelmetProvider>,
    );
  };

  // Mock document.head.querySelector to test meta tags
  const getMetaTag = (name: string, property?: string) => {
    const selector = property
      ? `meta[property="${property}"]`
      : `meta[name="${name}"]`;
    return document.head.querySelector(selector) as HTMLMetaElement;
  };

  beforeEach(() => {
    // Clear document head before each test
    document.head.innerHTML = "";
  });

  describe("Default props", () => {
    it("renders with default title", async () => {
      renderSEO();

      await waitFor(() => {
        const titleTag = document.head.querySelector("title");
        expect(titleTag?.textContent).toBe("Vishwajeet Kondi - Portfolio");
      });
    });

    it("renders with default description", async () => {
      renderSEO();

      await waitFor(() => {
        const metaDesc = getMetaTag("description");
        expect(metaDesc?.content).toBe(
          "Portfolio website showcasing my work and experience in software development",
        );
      });
    });

    it("renders with default Open Graph tags", async () => {
      renderSEO();

      await waitFor(() => {
        expect(getMetaTag("", "og:title")?.content).toBe(
          "Vishwajeet Kondi - Portfolio",
        );
        expect(getMetaTag("", "og:description")?.content).toBe(
          "Portfolio website showcasing my work and experience in software development",
        );
        expect(getMetaTag("", "og:image")?.content).toBe(
          "https://vishwajeetkondi.vercel.app/thumbnail.png",
        );
        expect(getMetaTag("", "og:url")?.content).toBe(
          "https://vishwajeetkondi.vercel.app",
        );
        expect(getMetaTag("", "og:type")?.content).toBe("website");
        expect(getMetaTag("", "og:site_name")?.content).toBe(
          "Vishwajeet Kondi Portfolio",
        );
      });
    });

    it("renders with default Twitter Card tags", async () => {
      renderSEO();

      await waitFor(() => {
        expect(getMetaTag("twitter:card")?.content).toBe("summary_large_image");
        expect(getMetaTag("twitter:title")?.content).toBe(
          "Vishwajeet Kondi - Portfolio",
        );
        expect(getMetaTag("twitter:description")?.content).toBe(
          "Portfolio website showcasing my work and experience in software development",
        );
        expect(getMetaTag("twitter:image")?.content).toBe(
          "https://vishwajeetkondi.vercel.app/thumbnail.png",
        );
      });
    });

    it("renders canonical URL", async () => {
      renderSEO();

      await waitFor(() => {
        const canonical = document.head.querySelector(
          'link[rel="canonical"]',
        ) as HTMLLinkElement;
        expect(canonical?.href).toBe("https://vishwajeetkondi.vercel.app/");
      });
    });
  });

  describe("Custom props", () => {
    it("renders custom title with proper formatting", async () => {
      renderSEO({ title: "About" });

      await waitFor(() => {
        const titleTag = document.head.querySelector("title");
        expect(titleTag?.textContent).toBe("About | Vishwajeet Kondi");
      });
    });

    it("renders custom title that already includes site name", async () => {
      renderSEO({ title: "Custom Vishwajeet Kondi Page" });

      await waitFor(() => {
        const titleTag = document.head.querySelector("title");
        expect(titleTag?.textContent).toBe("Custom Vishwajeet Kondi Page");
      });
    });

    it("renders custom description", async () => {
      renderSEO({ description: "Custom description for testing" });

      await waitFor(() => {
        const metaDesc = getMetaTag("description");
        expect(metaDesc?.content).toBe("Custom description for testing");
      });
    });

    it("renders custom image with full URL", async () => {
      renderSEO({ image: "https://example.com/custom-image.jpg" });

      await waitFor(() => {
        expect(getMetaTag("", "og:image")?.content).toBe(
          "https://example.com/custom-image.jpg",
        );
      });
    });

    it("renders custom image with relative path", async () => {
      renderSEO({ image: "/custom-image.jpg" });

      await waitFor(() => {
        expect(getMetaTag("", "og:image")?.content).toBe(
          "https://vishwajeetkondi.vercel.app/custom-image.jpg",
        );
      });
    });

    it("renders custom URL with full URL", async () => {
      renderSEO({ url: "https://example.com/page" });

      await waitFor(() => {
        expect(getMetaTag("", "og:url")?.content).toBe(
          "https://example.com/page",
        );
      });
    });

    it("renders custom URL with relative path", async () => {
      renderSEO({ url: "/about" });

      await waitFor(() => {
        expect(getMetaTag("", "og:url")?.content).toBe(
          "https://vishwajeetkondi.vercel.app/about",
        );
      });
    });

    it("renders custom keywords", async () => {
      renderSEO({ keywords: ["react", "typescript", "testing"] });

      await waitFor(() => {
        const metaKeywords = getMetaTag("keywords");
        expect(metaKeywords?.content).toBe("react, typescript, testing");
      });
    });

    it("renders custom type", async () => {
      renderSEO({ type: "article" });

      await waitFor(() => {
        expect(getMetaTag("", "og:type")?.content).toBe("article");
      });
    });
  });

  describe("Article-specific features", () => {
    it("renders article published time when type is article", async () => {
      renderSEO({
        type: "article",
        publishedTime: "2024-01-01T00:00:00Z",
      });

      await waitFor(() => {
        expect(getMetaTag("", "article:published_time")?.content).toBe(
          "2024-01-01T00:00:00Z",
        );
      });
    });

    it("renders article modified time when type is article", async () => {
      renderSEO({
        type: "article",
        modifiedTime: "2024-01-02T00:00:00Z",
      });

      await waitFor(() => {
        expect(getMetaTag("", "article:modified_time")?.content).toBe(
          "2024-01-02T00:00:00Z",
        );
      });
    });

    it("renders article author when type is article", async () => {
      renderSEO({
        type: "article",
        author: "John Doe",
      });

      await waitFor(() => {
        expect(getMetaTag("", "article:author")?.content).toBe("John Doe");
      });
    });

    it("does not render article tags when type is not article", () => {
      renderSEO({
        publishedTime: "2024-01-01T00:00:00Z",
      });

      expect(getMetaTag("", "article:published_time")).toBeNull();
    });
  });

  describe("Canonical URL", () => {
    it("uses custom canonical URL when provided", async () => {
      renderSEO({ canonical: "https://canonical.example.com/page" });

      await waitFor(() => {
        const canonical = document.head.querySelector(
          'link[rel="canonical"]',
        ) as HTMLLinkElement;
        expect(canonical?.href).toBe("https://canonical.example.com/page");
      });
    });

    it("uses full URL as canonical when no custom canonical provided", async () => {
      renderSEO({ url: "https://example.com/page" });

      await waitFor(() => {
        const canonical = document.head.querySelector(
          'link[rel="canonical"]',
        ) as HTMLLinkElement;
        expect(canonical?.href).toBe("https://example.com/page");
      });
    });
  });

  describe("Robots meta tag", () => {
    it("does not render robots tag by default", () => {
      renderSEO();

      const robotsMeta = getMetaTag("robots");
      expect(robotsMeta).toBeNull();
    });

    it("renders noindex,nofollow when noindex is true", async () => {
      renderSEO({ noindex: true });

      await waitFor(() => {
        const robotsMeta = getMetaTag("robots");
        expect(robotsMeta?.content).toBe("noindex,nofollow");
      });
    });
  });

  describe("Structured data", () => {
    it("does not render structured data by default", () => {
      renderSEO();

      const structuredDataScript = document.head.querySelector(
        'script[type="application/ld+json"]',
      );
      expect(structuredDataScript).toBeNull();
    });

    it("renders structured data when provided", async () => {
      const mockStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Test Website",
      };

      renderSEO({ structuredData: mockStructuredData });

      await waitFor(() => {
        const structuredDataScript = document.head.querySelector(
          'script[type="application/ld+json"]',
        ) as HTMLScriptElement;
        expect(structuredDataScript).toBeTruthy();
        expect(JSON.parse(structuredDataScript.textContent || "")).toEqual(
          mockStructuredData,
        );
      });
    });
  });

  describe("Author and other meta tags", () => {
    it("renders author meta tag", async () => {
      renderSEO({ author: "Jane Smith" });

      await waitFor(() => {
        const authorMeta = getMetaTag("author");
        expect(authorMeta?.content).toBe("Jane Smith");
      });
    });

    it("uses default author when not provided", async () => {
      renderSEO();

      await waitFor(() => {
        const authorMeta = getMetaTag("author");
        expect(authorMeta?.content).toBe("Vishwajeet Kondi");
      });
    });
  });
});
