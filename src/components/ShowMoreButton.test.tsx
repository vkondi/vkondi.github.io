import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ShowMoreButton from "./ShowMoreButton";

describe("ShowMoreButton component", () => {
    const defaultProps = {
        expanded: false,
        onClick: vi.fn(),
        previewCount: 2,
        totalCount: 5,
    };

    it("renders 'Show X More' when not expanded", () => {
        render(<ShowMoreButton {...defaultProps} />);
        expect(screen.getByText("Show 3 More")).toBeInTheDocument();
    });

    it("renders 'Show Less' when expanded", () => {
        render(<ShowMoreButton {...defaultProps} expanded={true} />);
        expect(screen.getByText("Show Less")).toBeInTheDocument();
    });

    it("calls onClick when clicked", () => {
        const onClick = vi.fn();
        render(<ShowMoreButton {...defaultProps} onClick={onClick} />);
        fireEvent.click(screen.getByRole("button"));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
