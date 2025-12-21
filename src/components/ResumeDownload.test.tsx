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

        const originalCreateElement = document.createElement.bind(document);
        const appendChildSpy = vi.spyOn(document.body, "appendChild").mockImplementation(() => null as any);
        const removeChildSpy = vi.spyOn(document.body, "removeChild").mockImplementation(() => null as any);

        const mockLink = {
            href: "",
            download: "",
            click: vi.fn(),
        };

        const createElementSpy = vi.spyOn(document, "createElement").mockImplementation((tagName: any, options?: any) => {
            if (typeof tagName === "string" && tagName.toLowerCase() === "a") {
                return mockLink as any;
            }
            return originalCreateElement(tagName, options);
        });

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
