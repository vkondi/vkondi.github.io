import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ResumeDownload from "./ResumeDownload";

describe("ResumeDownload component", () => {
  it("renders download button", () => {
    render(<ResumeDownload />);
    expect(screen.getByText(/download resume/i)).toBeInTheDocument();
  });

  it("creates a link and clicks it when button is clicked", () => {
    render(<ResumeDownload />);

    const originalCreateElement = document.createElement;
    const appendChildSpy = vi
      .spyOn(document.body, "appendChild")
      .mockImplementation(() => null as unknown as Node);
    const removeChildSpy = vi
      .spyOn(document.body, "removeChild")
      .mockImplementation(() => null as unknown as Node);

    const mockLink = {
      href: "",
      download: "",
      click: vi.fn(),
    } as unknown as HTMLAnchorElement;

    const createElementSpy = vi
      .spyOn(document, "createElement")
      .mockImplementation(
        (tagName: string, options?: ElementCreationOptions) => {
          if (typeof tagName === "string" && tagName.toLowerCase() === "a") {
            return mockLink;
          }
          return originalCreateElement(tagName, options);
        },
      );

    fireEvent.click(screen.getByText(/download resume/i));

    expect(createElementSpy).toHaveBeenCalledWith("a");
    expect(mockLink.href).toContain("/resume.pdf");
    expect(mockLink.download).toBe("Vishwajeet_Kondi_Resume.pdf");
    expect(mockLink.click).toHaveBeenCalled();

    createElementSpy.mockRestore();
    appendChildSpy.mockRestore();
    removeChildSpy.mockRestore();
  });
});
