import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Home";
import { DataProvider } from "../../context/DataContext";
import { LABELS } from "../../utils/constants";

describe("Home page", () => {
  it("renders profile, about and blogs sections", () => {
    render(
      <HelmetProvider>
        <DataProvider>
          <Home />
        </DataProvider>
      </HelmetProvider>,
    );

    expect(screen.getByText(/Vishwajeet Kondi/i)).toBeInTheDocument();

    expect(screen.getByText(LABELS.aboutMeTitle)).toBeInTheDocument();

    expect(screen.getByText(LABELS.blogsTitle)).toBeInTheDocument();
  });
});
