import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SeeAllIcon from "./SeeAllIcon";

describe("SeeAllIcon component", () => {
  it("renders with correct tooltip and link", () => {
    render(<SeeAllIcon title="See All Blogs" navTo="/blogs" />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/blogs");
    expect(screen.getByTestId("ReadMoreIcon")).toBeInTheDocument();
  });
});
