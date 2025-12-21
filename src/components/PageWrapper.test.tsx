import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PageWrapper from "./PageWrapper";

describe("PageWrapper component", () => {
    it("renders children correctly", () => {
        render(
            <PageWrapper>
                <div data-testid="child">Test Child</div>
            </PageWrapper>
        );
        expect(screen.getByTestId("child")).toBeInTheDocument();
        expect(screen.getByText("Test Child")).toBeInTheDocument();
    });
});
