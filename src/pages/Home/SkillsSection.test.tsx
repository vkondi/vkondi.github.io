import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SkillsSection from "./SkillsSection";
import { DataProvider } from "../../context/DataContext";

describe("SkillsSection", () => {
  it("renders skill group titles", () => {
    render(
      <DataProvider>
        <SkillsSection isMobile={false} />
      </DataProvider>,
    );

    const matches = screen.getAllByText(/Frontend/);
    expect(matches.length).toBeGreaterThan(0);
  });

  it("renders AI Tools category", () => {
    render(
      <DataProvider>
        <SkillsSection isMobile={false} />
      </DataProvider>,
    );

    expect(screen.getByText(/AI Tools/i)).toBeInTheDocument();
    expect(screen.getByText(/Cursor, Copilot, Cline/i)).toBeInTheDocument();
  });
});
