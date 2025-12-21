import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TitleWithBack from "./TitleWithBack";

describe("TitleWithBack component", () => {
    it("renders the title and back link", () => {
        render(<TitleWithBack title="My Page" />);

        expect(screen.getByText("My Page")).toBeInTheDocument();
        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/");
        expect(screen.getByTestId("ArrowBackIcon")).toBeInTheDocument();
    });
});
