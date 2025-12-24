import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner component", () => {
  it("renders a CircularProgress element", () => {
    render(<LoadingSpinner />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toBeInTheDocument();
  });
});
