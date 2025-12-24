import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WebsitePreview from "./WebsitePreview";

describe("WebsitePreview component", () => {
  const props = {
    name: "Test Project",
    description: "Test description",
    previewUrl: "https://example.com/demo",
    repoUrl: "https://github.com/user/project",
    tags: ["React", "Vitest"],
  };

  it("renders name, description and tags", () => {
    render(<WebsitePreview {...props} />);

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Vitest")).toBeInTheDocument();
  });

  it("renders demo and source buttons with correct links", () => {
    render(<WebsitePreview {...props} />);

    const demoButton = screen.getByRole("link", { name: /live demo/i });
    expect(demoButton).toHaveAttribute("href", "https://example.com/demo");

    const sourceButton = screen.getByRole("link", { name: /source code/i });
    expect(sourceButton).toHaveAttribute(
      "href",
      "https://github.com/user/project",
    );
  });

  it("renders iframe with correct src", () => {
    render(<WebsitePreview {...props} />);
    const iframe = screen.getByTitle("Test Project");
    expect(iframe).toHaveAttribute("src", "https://example.com/demo");
  });

  it("displays formatted URL in browser bar", () => {
    render(<WebsitePreview {...props} />);
    expect(screen.getByText("example.com/demo")).toBeInTheDocument();
  });
});
