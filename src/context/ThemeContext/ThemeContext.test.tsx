import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { ThemeProvider } from "./ThemeContext";
import useTheme from "./useTheme";

const TestComponent = () => {
  const { isDarkMode, themeMode, toggleTheme } = useTheme();

  return (
    <div>
      <div data-testid="theme-mode">{themeMode}</div>
      <div data-testid="is-dark-mode">{isDarkMode.toString()}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("provides theme context to children", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme-mode")).toBeInTheDocument();
    expect(screen.getByTestId("is-dark-mode")).toBeInTheDocument();
  });

  it("initializes with light theme when no preference exists and system prefers light", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
        media: "(prefers-color-scheme: dark)",
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme-mode")).toHaveTextContent("light");
    expect(screen.getByTestId("is-dark-mode")).toHaveTextContent("false");
  });

  it("initializes with dark theme when system prefers dark", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query === "(prefers-color-scheme: dark)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("is-dark-mode")).toHaveTextContent("true");
  });

  it("initializes with saved theme from localStorage", () => {
    localStorage.setItem("vkondi.github.io_theme", "dark");

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
        media: "(prefers-color-scheme: dark)",
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("is-dark-mode")).toHaveTextContent("true");
  });

  it("toggles theme and saves to localStorage", async () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
        media: "(prefers-color-scheme: dark)",
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const toggleButton = screen.getByRole("button", { name: /toggle theme/i });

    expect(screen.getByTestId("theme-mode")).toHaveTextContent("light");

    toggleButton.click();

    await waitFor(() => {
      expect(screen.getByTestId("theme-mode")).toHaveTextContent("dark");
      expect(localStorage.getItem("vkondi.github.io_theme")).toBe("dark");
    });

    toggleButton.click();

    await waitFor(() => {
      expect(screen.getByTestId("theme-mode")).toHaveTextContent("light");
      expect(localStorage.getItem("vkondi.github.io_theme")).toBe("light");
    });
  });

  it("listens to system theme changes when no saved preference", async () => {
    let changeHandler: ((e: MediaQueryListEvent) => void) | undefined;

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
        media: "(prefers-color-scheme: dark)",
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(
          (event: string, handler: (e: MediaQueryListEvent) => void) => {
            if (event === "change") {
              changeHandler = handler;
            }
          },
        ),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme-mode")).toHaveTextContent("light");

    // Simulate system theme change
    if (changeHandler) {
      changeHandler({ matches: true } as MediaQueryListEvent);
    }

    await waitFor(() => {
      expect(screen.getByTestId("theme-mode")).toHaveTextContent("dark");
    });
  });

  it("does not respond to system theme changes when user has saved preference", async () => {
    localStorage.setItem("vkondi.github.io_theme", "light");

    let changeHandler: ((e: MediaQueryListEvent) => void) | undefined;

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
        media: "(prefers-color-scheme: dark)",
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(
          (event: string, handler: (e: MediaQueryListEvent) => void) => {
            if (event === "change") {
              changeHandler = handler;
            }
          },
        ),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme-mode")).toHaveTextContent("light");

    // Simulate system theme change
    if (changeHandler) {
      changeHandler({ matches: true } as MediaQueryListEvent);
    }

    // Theme should remain light because user has saved preference
    await waitFor(() => {
      expect(screen.getByTestId("theme-mode")).toHaveTextContent("light");
    });
  });

  it("handles legacy browsers with addListener", () => {
    const mockAddListener = vi.fn();
    const mockRemoveListener = vi.fn();

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
        media: "(prefers-color-scheme: dark)",
        onchange: null,
        addListener: mockAddListener,
        removeListener: mockRemoveListener,
        dispatchEvent: vi.fn(),
      })),
    });

    const { unmount } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(mockAddListener).toHaveBeenCalled();

    unmount();

    expect(mockRemoveListener).toHaveBeenCalled();
  });
});
