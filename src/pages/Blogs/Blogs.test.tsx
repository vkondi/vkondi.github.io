import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import Blogs from "./Blogs";
import { DataProvider } from "../../context/DataContext";

describe("Blogs page", () => {
  it("renders list of blogs", () => {
    render(
      <HelmetProvider>
        <DataProvider>
          <Blogs />
        </DataProvider>
      </HelmetProvider>,
    );

    const matches = screen.getAllByText(/Ollama/);
    expect(matches.length).toBeGreaterThan(0);
  });
});
