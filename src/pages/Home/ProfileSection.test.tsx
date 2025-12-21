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

    const githubLink = Array.from(container.querySelectorAll('a')).find(a =>
      a.href.includes('github.com')
    );
    expect(githubLink).toBeTruthy();

    const mailLink = Array.from(container.querySelectorAll('a')).find(a =>
      a.href.startsWith('mailto:')
    );
    expect(mailLink).toBeTruthy();
  });
});