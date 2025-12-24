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
});
