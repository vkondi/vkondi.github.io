import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ListRow from "./ListRow";

describe("ListRow component", () => {
  it("renders the text", () => {
    render(<ListRow text="Sample Text" />);
    expect(screen.getByText("Sample Text")).toBeInTheDocument();
  });

  it("renders the custom icon when provided", () => {
    const MockIcon = <span data-testid="custom-icon" />;
    render(<ListRow text="Sample Text" icon={MockIcon} />);
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });
});
