import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Navigation from "./Navigation";
import { useNavigate, useLocation } from "react-router-dom";

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
    useNavigate: vi.fn(),
    useLocation: vi.fn(),
}));

describe("Navigation component", () => {
    it("renders all menu items", () => {
        vi.mocked(useLocation).mockReturnValue({ pathname: "/" } as any);
        render(<Navigation />);

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Experience")).toBeInTheDocument();
        expect(screen.getByText("Projects")).toBeInTheDocument();
        expect(screen.getByText("Education")).toBeInTheDocument();
    });

    it("navigates to correct path when item is clicked", () => {
        const navigateMock = vi.fn();
        vi.mocked(useNavigate).mockReturnValue(navigateMock);
        vi.mocked(useLocation).mockReturnValue({ pathname: "/" } as any);

        render(<Navigation />);

        fireEvent.click(screen.getByText("Experience"));
        expect(navigateMock).toHaveBeenCalledWith("/experience");
    });

    it("marks current path as selected", () => {
        vi.mocked(useLocation).mockReturnValue({ pathname: "/projects" } as any);
        render(<Navigation />);

        const projectsItem = screen.getByText("Projects").closest(".MuiListItemButton-root");
        expect(projectsItem).toHaveClass("Mui-selected");
    });
});
