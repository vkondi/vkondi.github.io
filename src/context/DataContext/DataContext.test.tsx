import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { DataProvider, usePortfolioData } from ".";
import { portfolioData } from "./portfolioData";
import axios from "axios";
import { useAuth } from "../AuthContext";

vi.mock("axios");
const mockedAxios = vi.mocked(axios);

vi.mock("../AuthContext", () => ({
  useAuth: vi.fn(),
}));

const TestComponent = () => {
  const data = usePortfolioData();
  return (
    <div>
      <span>{data.generalDetails.name}</span>
      <span>{data.blogs.length}</span>
    </div>
  );
};

describe("DataContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
  });

  it("provides initial portfolio data when not authenticated", () => {
    vi.mocked(useAuth).mockReturnValue({ isAuthenticated: false } as {
      isAuthenticated: boolean;
    });

    render(
      <DataProvider>
        <TestComponent />
      </DataProvider>,
    );

    expect(screen.getByText("Vishwajeet Kondi")).toBeInTheDocument();
    expect(
      screen.getByText(String(portfolioData.blogs.length)),
    ).toBeInTheDocument();
    expect(mockedAxios.get).not.toHaveBeenCalled();
  });

  it("fetches blogs with authorization header when authenticated", async () => {
    vi.mocked(useAuth).mockReturnValue({ isAuthenticated: true } as {
      isAuthenticated: boolean;
    });
    sessionStorage.setItem("authToken", "test-token");
    const mockBlogs = [
      { id: 1, title: "New Blog", published_at: new Date().toISOString() },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: { blogs: mockBlogs } });

    render(
      <DataProvider>
        <TestComponent />
      </DataProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("1")).toBeInTheDocument();
    });
    expect(mockedAxios.get).toHaveBeenCalledWith(
      expect.stringContaining("/api/v1/portfolio/blogs"),
      expect.objectContaining({
        headers: { Authorization: "Bearer test-token" },
      }),
    );
  });

  it("falls back to existing blogs when response blogs are nullish", async () => {
    vi.mocked(useAuth).mockReturnValue({ isAuthenticated: true } as {
      isAuthenticated: boolean;
    });
    mockedAxios.get.mockResolvedValueOnce({ data: { blogs: null } });

    render(
      <DataProvider>
        <TestComponent />
      </DataProvider>,
    );

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(
        screen.getByText(String(portfolioData.blogs.length)),
      ).toBeInTheDocument();
    });
  });

  it("logs error when fetch fails and request is not aborted", async () => {
    vi.mocked(useAuth).mockReturnValue({ isAuthenticated: true } as {
      isAuthenticated: boolean;
    });
    const consoleSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);
    mockedAxios.get.mockRejectedValueOnce(new Error("Network error"));

    render(
      <DataProvider>
        <TestComponent />
      </DataProvider>,
    );

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        "[DataProvider][fetchBlogs] >> Exception:",
        expect.any(Error),
      );
    });
    consoleSpy.mockRestore();
  });

  it("does not log error when fetch is aborted on unmount", async () => {
    vi.mocked(useAuth).mockReturnValue({ isAuthenticated: true } as {
      isAuthenticated: boolean;
    });
    const consoleSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);

    let rejectFn!: (reason: unknown) => void;
    mockedAxios.get.mockReturnValueOnce(
      new Promise<never>((_, reject) => {
        rejectFn = reject;
      }),
    );

    const { unmount } = render(
      <DataProvider>
        <TestComponent />
      </DataProvider>,
    );

    unmount(); // triggers controller.abort(), signal.aborted = true
    rejectFn(new Error("Request aborted"));

    // Flush microtasks to let the catch block execute
    await Promise.resolve();
    await Promise.resolve();

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("throws when used outside DataProvider", () => {
    const consoleSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);

    expect(() => render(<TestComponent />)).toThrow(
      "usePortfolioData must be used within a DataProvider",
    );

    consoleSpy.mockRestore();
  });
});
