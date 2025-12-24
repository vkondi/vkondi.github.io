import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Blogs from "./Blogs";
import { DataProvider } from "../../context/DataContext";

describe("Blogs page", () => {
  it("renders list of blogs", () => {
    render(
      <DataProvider>
        <Blogs />
      </DataProvider>,
    );

    const matches = screen.getAllByText(/Ollama/);
    expect(matches.length).toBeGreaterThan(0);
  });
});
