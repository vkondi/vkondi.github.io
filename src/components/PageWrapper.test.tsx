import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PageWrapper from "./PageWrapper";

describe("PageWrapper component", () => {
  it("renders children correctly", () => {
    render(
      <PageWrapper>
        <div>Test Child</div>
      </PageWrapper>,
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
