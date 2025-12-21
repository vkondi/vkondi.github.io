import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { DataProvider, usePortfolioData } from "./DataContext";
import axios from "axios";
import { useAuth } from "./AuthContext";

// Mock axios
vi.mock("axios");
const mockedAxios = vi.mocked(axios);

// Mock AuthContext
vi.mock("./AuthContext", () => ({
    useAuth: vi.fn(),
}));

const TestComponent = () => {
    const data = usePortfolioData();
    return (
        <div>
            <span data-testid="name">{data.generalDetails.name}</span>
            <span data-testid="blog-count">{data.blogs.length}</span>
        </div>
    );
};

describe("DataContext", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("provides initial portfolio data", () => {
        vi.mocked(useAuth).mockReturnValue({ isAuthenticated: false } as { isAuthenticated: boolean });

        render(
            <DataProvider>
                <TestComponent />
            </DataProvider>
        );

        expect(screen.getByTestId("name")).toHaveTextContent("Vishwajeet Kondi");
        expect(screen.getByTestId("blog-count")).toHaveTextContent("3");
    });

    it("fetches blogs when authenticated", async () => {
        vi.mocked(useAuth).mockReturnValue({ isAuthenticated: true } as { isAuthenticated: boolean });
        const mockBlogs = [
            { id: 1, title: "New Blog", published_at: new Date().toISOString() },
        ];
        mockedAxios.get.mockResolvedValueOnce({ data: { blogs: mockBlogs } });

        render(
            <DataProvider>
                <TestComponent />
            </DataProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("blog-count")).toHaveTextContent("1");
        });
        expect(mockedAxios.get).toHaveBeenCalled();
    });

    it("throws error when used outside provider", () => {
        // Suppress console.error for this test
        const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => { });

        expect(() => render(<TestComponent />)).toThrow(
            "usePortfolioData must be used within a DataProvider"
        );

        consoleSpy.mockRestore();
    });
});
