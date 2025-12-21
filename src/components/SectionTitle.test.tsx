import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionTitle from "./SectionTitle";

describe("SectionTitle component", () => {
    it("renders the title", () => {
        render(<SectionTitle title="Test Title" />);
        expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders the icon when provided", () => {
        const MockIcon = () => <span data-testid="mock-icon" />;
        render(<SectionTitle title="Test Title" IconComponent={MockIcon} />);
        expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    });
});
