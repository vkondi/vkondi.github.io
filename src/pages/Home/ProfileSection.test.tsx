import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProfileSection from "./ProfileSection";
import { DataProvider } from "../../context/DataContext";

describe("ProfileSection", () => {
  it("shows name and social links", () => {
    const { container } = render(
      <DataProvider>
        <ProfileSection />
      </DataProvider>
    );

    expect(screen.getByText(/Vishwajeet Kondi/i)).toBeInTheDocument();

    const githubLink = Array.from(container.querySelectorAll('a')).find((a) => {
      try {
        // Parse the anchor href and verify the hostname explicitly (prevents
        // matching arbitrary URLs that merely contain 'github.com' elsewhere).
        return new URL(a.href).hostname.endsWith("github.com");
      } catch {
        return false;
      }
    });
    expect(githubLink).toBeTruthy();

    const mailLink = Array.from(container.querySelectorAll('a')).find(a =>
      a.href.startsWith('mailto:')
    );
    expect(mailLink).toBeTruthy();
  });
});