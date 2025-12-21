import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Header from "./Header";

describe("Header component", () => {
    const toggleThemeMock = vi.fn();

    it("renders title and theme toggle", () => {
        render(<Header toggleTheme={toggleThemeMock} isDarkMode={false} />);

        // Check that the title "Resume" is rendered
        expect(screen.getByText(/resume/i)).toBeInTheDocument();

        // Find the theme toggle button (Brightness4 icon when dark mode is false)
        const themeButton = screen.getByRole("button", { name: /switch to dark mode/i });
        expect(themeButton).toBeInTheDocument();

        // Click the toggle and verify callback is called
        fireEvent.click(themeButton);
        expect(toggleThemeMock).toHaveBeenCalledTimes(1);
    });
});
