import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import BlogCard from "./BlogCard";
import type { Article } from "../context/DataContext";

describe("BlogCard component", () => {
  const blog: Article = {
    type_of: "article",
    id: 1,
    title: "Test Blog",
    description: "Test description",
    published: true,
    published_at: "2023-01-01T00:00:00Z",
    slug: "test-blog",
    path: "/test-blog",
    url: "https://example.com/blog",
    comments_count: 0,
    public_reactions_count: 0,
    page_views_count: 0,
    published_timestamp: "2023-01-01T00:00:00Z",
    body_markdown: "",
    positive_reactions_count: 0,
    cover_image: "https://example.com/image.jpg",
    tag_list: [],
    canonical_url: "",
    reading_time_minutes: 1,
    user: {
      name: "Tester",
      username: "tester",
      twitter_username: null,
      github_username: "tester",
      user_id: 1,
      website_url: "",
      profile_image: "",
      profile_image_90: "",
    },
  } as Article;

  it("renders blog title, description and date", () => {
    render(<BlogCard blog={blog} />);

    expect(screen.getByText("Test Blog")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByText(/2023/)).toBeInTheDocument();
  });

  it("renders cover image with correct alt text", () => {
    render(<BlogCard blog={blog} />);
    const img = screen.getByAltText("Test Blog");
    expect(img).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  it("opens blog URL in new tab when clicked", () => {
    const windowOpenSpy = vi
      .spyOn(window, "open")
      .mockImplementation(() => null);
    render(<BlogCard blog={blog} />);

    fireEvent.click(screen.getByText("Test Blog"));

    expect(windowOpenSpy).toHaveBeenCalledWith(
      "https://example.com/blog",
      "_blank",
    );
    windowOpenSpy.mockRestore();
  });
});
