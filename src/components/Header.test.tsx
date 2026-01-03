import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Header from "./Header";

describe("Header component", () => {
  const toggleThemeMock = vi.fn();

  beforeEach(() => {
    toggleThemeMock.mockClear();
  });

  it("renders title and theme toggle", () => {
    render(<Header toggleTheme={toggleThemeMock} isDarkMode={false} />);

    expect(screen.getByText(/resume/i)).toBeInTheDocument();

    const themeButton = screen.getByRole("button", {
      name: /switch to dark mode/i,
    });
    expect(themeButton).toBeInTheDocument();

    fireEvent.click(themeButton);
    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });

  it("renders light mode icon when isDarkMode is true", () => {
    render(<Header toggleTheme={toggleThemeMock} isDarkMode={true} />);

    const themeButton = screen.getByRole("button", {
      name: /switch to light mode/i,
    });
    expect(themeButton).toBeInTheDocument();
  });

  it("opens PDF menu when download button is clicked", async () => {
    render(<Header toggleTheme={toggleThemeMock} isDarkMode={false} />);

    const downloadButton = screen.getByRole("button", {
      name: /download pdf/i,
    });
    expect(downloadButton).toBeInTheDocument();

    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeInTheDocument();
    });

    // Use menuitem role to find the correct Resume and Cover Letter items
    const menuItems = screen.getAllByRole("menuitem");
    expect(menuItems).toHaveLength(2);
  });

  it("closes menu when pressing Escape", async () => {
    render(<Header toggleTheme={toggleThemeMock} isDarkMode={false} />);

    const downloadButton = screen.getByRole("button", {
      name: /download pdf/i,
    });
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeInTheDocument();
    });

    // Press Escape to close menu
    fireEvent.keyDown(screen.getByRole("menu"), { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
  });

  it("downloads resume when Resume menu item is clicked", async () => {
    // Store original createElement
    const originalCreateElement = document.createElement.bind(document);

    // Mock link element
    const mockClick = vi.fn();
    let capturedHref = "";
    let capturedDownload = "";

    vi.spyOn(document, "createElement").mockImplementation(
      (tagName: string) => {
        if (tagName === "a") {
          const mockLink = originalCreateElement("a");
          Object.defineProperty(mockLink, "href", {
            set: (value) => {
              capturedHref = value;
            },
            get: () => capturedHref,
          });
          Object.defineProperty(mockLink, "download", {
            set: (value) => {
              capturedDownload = value;
            },
            get: () => capturedDownload,
          });
          mockLink.click = mockClick;
          return mockLink;
        }
        return originalCreateElement(tagName);
      },
    );

    render(<Header toggleTheme={toggleThemeMock} isDarkMode={false} />);

    const downloadButton = screen.getByRole("button", {
      name: /download pdf/i,
    });
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeInTheDocument();
    });

    // Click the first menu item (Resume)
    const menuItems = screen.getAllByRole("menuitem");
    fireEvent.click(menuItems[0]);

    expect(capturedHref).toBe("/resume.pdf");
    expect(capturedDownload).toBe("Vishwajeet_Kondi_Resume.pdf");
    expect(mockClick).toHaveBeenCalled();

    vi.restoreAllMocks();
  });

  it("downloads cover letter when Cover Letter menu item is clicked", async () => {
    // Store original createElement
    const originalCreateElement = document.createElement.bind(document);

    // Mock link element
    const mockClick = vi.fn();
    let capturedHref = "";
    let capturedDownload = "";

    vi.spyOn(document, "createElement").mockImplementation(
      (tagName: string) => {
        if (tagName === "a") {
          const mockLink = originalCreateElement("a");
          Object.defineProperty(mockLink, "href", {
            set: (value) => {
              capturedHref = value;
            },
            get: () => capturedHref,
          });
          Object.defineProperty(mockLink, "download", {
            set: (value) => {
              capturedDownload = value;
            },
            get: () => capturedDownload,
          });
          mockLink.click = mockClick;
          return mockLink;
        }
        return originalCreateElement(tagName);
      },
    );

    render(<Header toggleTheme={toggleThemeMock} isDarkMode={false} />);

    const downloadButton = screen.getByRole("button", {
      name: /download pdf/i,
    });
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeInTheDocument();
    });

    // Click the second menu item (Cover Letter)
    const menuItems = screen.getAllByRole("menuitem");
    fireEvent.click(menuItems[1]);

    expect(capturedHref).toBe("/cover_letter.pdf");
    expect(capturedDownload).toBe("Vishwajeet_Kondi_Cover_Letter.pdf");
    expect(mockClick).toHaveBeenCalled();

    vi.restoreAllMocks();
  });
});
