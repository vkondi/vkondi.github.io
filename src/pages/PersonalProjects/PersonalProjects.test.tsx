import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PersonalProjects from "./PersonalProjects";
import { DataProvider } from "../../context/DataContext";
import { LABELS } from "../../utils/constants";

describe("PersonalProjects page", () => {
  it("renders title and previews", () => {
    render(
      <DataProvider>
        <PersonalProjects />
      </DataProvider>
    );

    expect(screen.getByText(LABELS.personalProjectsTitle)).toBeInTheDocument();

    const liveLinks = screen.getAllByRole("link", { name: /live demo/i });
    expect(liveLinks.length).toBeGreaterThan(0);
    expect((liveLinks[0] as HTMLAnchorElement).href).toMatch(/^https?:\/\//i);
  });
});