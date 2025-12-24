import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AboutSection from "./AboutSection";
import { DataProvider } from "../../context/DataContext";

describe("AboutSection", () => {
  it("renders about points", () => {
    render(
      <DataProvider>
        <AboutSection isMobile={false} />
      </DataProvider>,
    );

    expect(
      screen.getByText(/Full-stack developer with 13\+ years of experience/i),
    ).toBeInTheDocument();
  });
});
