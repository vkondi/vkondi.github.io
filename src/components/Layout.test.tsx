import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Layout from "./Layout";
import { ThemeProvider } from "../context/ThemeContext";

describe("Layout component", () => {
  it("renders header and children", () => {
    render(
      <ThemeProvider>
        <Layout>
          <div>Content</div>
        </Layout>
      </ThemeProvider>,
    );

    expect(screen.getByText(/resume/i)).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
