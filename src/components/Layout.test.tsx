import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Layout from "./Layout";

describe("Layout component", () => {
  it("renders header and children", () => {
    const toggleThemeMock = vi.fn();
    render(
      <Layout toggleTheme={toggleThemeMock} isDarkMode={false}>
        <div>Content</div>
      </Layout>,
    );

    expect(screen.getByText(/resume/i)).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
