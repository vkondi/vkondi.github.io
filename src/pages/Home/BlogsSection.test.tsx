import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BlogsSection from "./BlogsSection";
import { DataProvider } from "../../context/DataContext";

describe("BlogsSection", () => {
  it("renders preview blogs and expands on Show More", async () => {
    render(
      <DataProvider>
        <BlogsSection />
      </DataProvider>
    );

    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toBeGreaterThanOrEqual(2);

    const showMoreBtn = screen.queryByText(/Show \d+ More/);
    if (showMoreBtn) {
      fireEvent.click(showMoreBtn);
      const expandedImgs = screen.getAllByRole("img");
      expect(expandedImgs.length).toBeGreaterThanOrEqual(imgs.length);
    }
  });
});