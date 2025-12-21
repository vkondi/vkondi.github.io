import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import BlogCard from "./BlogCard";

describe("BlogCard component", () => {
    const blog = {
        id: 1,
        title: "Test Blog",
        description: "Test description",
        published_at: "2023-01-01T00:00:00Z",
        url: "https://example.com/blog",
        cover_image: "https://example.com/image.jpg",
    } as any;

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
        const windowOpenSpy = vi.spyOn(window, "open").mockImplementation(() => null);
        render(<BlogCard blog={blog} />);

        fireEvent.click(screen.getByText("Test Blog"));

        expect(windowOpenSpy).toHaveBeenCalledWith("https://example.com/blog", "_blank");
        windowOpenSpy.mockRestore();
    });
});
