import "@testing-library/jest-dom";
import { vi } from "vitest";
import type React from "react";
import { JSDOM } from "jsdom";

// Provide a minimal JSDOM environment when `document` is missing (some runners/agents lack jsdom)
if (typeof document === "undefined") {
  const dom = new JSDOM("<!doctype html><html><body></body></html>");

  const g = globalThis as unknown as Record<string, unknown>;
  g.window = dom.window;
  g.document = dom.window.document;
  g.navigator = dom.window.navigator;
  g.HTMLElement = dom.window.HTMLElement;
  g.Node = dom.window.Node;
}

// Mock @tanstack/react-router
vi.mock("@tanstack/react-router", () => ({
  Link: ({
    to,
    children,
    ...props
  }: { to: string; children: React.ReactNode } & Record<string, unknown>) => (
    <a href={to} {...(props as Record<string, unknown>)}>
      {children}
    </a>
  ),
  useNavigate: () => vi.fn() as unknown as () => void,
  useParams: () => ({}) as Record<string, string>,
  useSearch: () => ({}) as Record<string, string>,
}));
