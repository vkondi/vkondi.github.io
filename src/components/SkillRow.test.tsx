import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SkillRow from "./SkillRow";

describe("SkillRow component", () => {
    it("renders title and joined skills", () => {
        const skills = ["React", "TypeScript", "Node.js"];
        render(<SkillRow title="Frontend" skills={skills} />);

        expect(screen.getByText("Frontend")).toBeInTheDocument();
        expect(screen.getByText("React, TypeScript, Node.js")).toBeInTheDocument();
    });
});
