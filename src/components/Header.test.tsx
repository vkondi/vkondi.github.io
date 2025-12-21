import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Header from "./Header";

describe("Header component", () => {
    const toggleThemeMock = vi.fn();

    it("renders title and theme toggle", () => {
        render(<Header toggleTheme={toggleThemeMock} isDarkMode={false} />);

        expect(screen.getByText(/resume/i)).toBeInTheDocument();

        const themeButton = screen.getByRole("button", { name: /switch to dark mode/i });
        expect(themeButton).toBeInTheDocument();

        fireEvent.click(themeButton);
        expect(toggleThemeMock).toHaveBeenCalledTimes(1);
    });
});
