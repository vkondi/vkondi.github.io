import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./Home";
import { DataProvider } from "../../context/DataContext";
import { LABELS } from "../../utils/constants";

describe("Home page", () => {
  it("renders profile, about and blogs sections", () => {
    render(
      <DataProvider>
        <Home />
      </DataProvider>,
    );

    expect(screen.getByText(/Vishwajeet Kondi/i)).toBeInTheDocument();

    expect(screen.getByText(LABELS.aboutMeTitle)).toBeInTheDocument();

    expect(screen.getByText(LABELS.blogsTitle)).toBeInTheDocument();
  });

  it("renders all major sections", () => {
    render(
      <DataProvider>
        <Home />
      </DataProvider>,
    );

    expect(screen.getByText(LABELS.skillsTitle)).toBeInTheDocument();
    expect(screen.getByText(LABELS.experienceTitle)).toBeInTheDocument();
    expect(screen.getByText(LABELS.educationTitle)).toBeInTheDocument();
    expect(screen.getByText(LABELS.personalProjectsTitle)).toBeInTheDocument();
    expect(
      screen.getByText(LABELS.professionalProjectsTitle),
    ).toBeInTheDocument();
  });

  it("toggles experience section when Show More is clicked", () => {
    render(
      <DataProvider>
        <Home />
      </DataProvider>,
    );

    // Find Show More buttons by partial text match
    const showMoreButtons = screen.getAllByRole("button", {
      name: /show \d+ more/i,
    });

    // Click to expand first section
    fireEvent.click(showMoreButtons[0]);

    // After expanding, button should say "Show Less"
    const showLessButtons = screen.getAllByRole("button", {
      name: /show less/i,
    });
    expect(showLessButtons.length).toBeGreaterThan(0);

    // Click to collapse
    fireEvent.click(showLessButtons[0]);

    // Should show "Show X More" again
    const updatedShowMoreButtons = screen.getAllByRole("button", {
      name: /show \d+ more/i,
    });
    expect(updatedShowMoreButtons.length).toBeGreaterThan(0);
  });

  it("toggles personal projects section when Show More is clicked", () => {
    render(
      <DataProvider>
        <Home />
      </DataProvider>,
    );

    // Find all Show More buttons
    const showMoreButtons = screen.getAllByRole("button", {
      name: /show \d+ more/i,
    });

    // Click the second one (personal projects section)
    if (showMoreButtons.length > 1) {
      fireEvent.click(showMoreButtons[1]);

      // Verify some Show Less button appears
      const showLessButtons = screen.getAllByRole("button", {
        name: /show less/i,
      });
      expect(showLessButtons.length).toBeGreaterThan(0);
    }
  });

  it("toggles education section when Show More is clicked", () => {
    render(
      <DataProvider>
        <Home />
      </DataProvider>,
    );

    const showMoreButtons = screen.getAllByRole("button", {
      name: /show \d+ more/i,
    });

    // Click the third one (education section)
    if (showMoreButtons.length > 2) {
      fireEvent.click(showMoreButtons[2]);

      const showLessButtons = screen.getAllByRole("button", {
        name: /show less/i,
      });
      expect(showLessButtons.length).toBeGreaterThan(0);
    }
  });

  it("toggles projects section when Show More is clicked", () => {
    render(
      <DataProvider>
        <Home />
      </DataProvider>,
    );

    const showMoreButtons = screen.getAllByRole("button", {
      name: /show \d+ more/i,
    });

    // Click the fourth one (projects section)
    if (showMoreButtons.length > 3) {
      fireEvent.click(showMoreButtons[3]);

      const showLessButtons = screen.getAllByRole("button", {
        name: /show less/i,
      });
      expect(showLessButtons.length).toBeGreaterThan(0);
    }
  });
});
