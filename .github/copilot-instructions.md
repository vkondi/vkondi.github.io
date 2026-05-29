# GitHub Copilot Instructions

## Project Overview

Personal portfolio site — React 19, TypeScript, Vite, MUI v9, TanStack Router.

---

## Tech Stack

| Concern       | Library                                                      |
| ------------- | ------------------------------------------------------------ |
| UI components | MUI v9 (`@mui/material`) + Emotion                           |
| Routing       | TanStack Router (`@tanstack/react-router`)                   |
| State         | React Context — `ThemeContext`, `DataContext`, `AuthContext` |
| HTTP          | Axios                                                        |
| Dates         | date-fns — use `DATE_FORMAT` from `utils/constants.ts`       |
| Animations    | Framer Motion                                                |
| Testing       | Vitest + @testing-library/react + jest-dom                   |

---

## Project Structure

```
src/
  components/       # Shared UI components — test file co-located (*.test.tsx)
  pages/            # Feature pages grouped by route
  context/
    <Name>/         # One folder per context:
      index.ts              # Barrel export
      <Name>Context.tsx     # Provider component
      <Name>ContextImpl.ts  # Raw context object
      use<Name>.ts          # Hook
      utils.ts              # Helpers
  utils/
    constants.ts    # App-wide constants
    utility.ts      # Pure utility functions
  types/            # Global type declarations
```

---

## Code Conventions

### Components

- Default export for components; named exports for context providers and hooks.
- PascalCase filenames and component names.
- Co-locate test file: `ComponentName.test.tsx` beside `ComponentName.tsx`.
- Use MUI components — avoid raw HTML when MUI provides an equivalent.
- Responsive layout: `useMediaQuery(theme.breakpoints.down("md"))` for mobile.

### Types

- Shared domain interfaces in `src/context/types.ts`.
- Prefer `interface` over `type` for object shapes.
- Avoid `any` — use `unknown` or proper types.

### Linting / Quality

- `console.warn` and `console.error` are allowed; all other `console.*` trigger a warning.
- Run `npm run qa` before committing (format + lint + type-check + test coverage).

---

## Testing Conventions

- **Framework:** Vitest + `@testing-library/react`
- **Test files:** `*.test.tsx` (components), `*.test.ts` (utilities) — co-located with source.

### Imports

```tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
```

### describe / it naming

- Top-level `describe`: component name or function name  
  e.g. `describe('BlogCard component')`, `describe('getYearsAndMonthsDifference')`
- `it` titles describe expected behavior:  
  e.g. `it('opens blog URL in a new tab when card is clicked')`

### Selectors — prefer accessible queries

```tsx
// ✅ Prefer
screen.getByRole("button", { name: /submit/i });
screen.getByText("Hello");
screen.getByLabelText("Email");

// ❌ Avoid
screen.getByTestId("submit-btn");
```

### Mocking

- `vi.mock(...)` at module level for module mocks.
- `vi.spyOn(...)` for method-level spies; call `spy.mockRestore()` after use.
- Reset shared state in `beforeEach`: `localStorage.clear(); vi.clearAllMocks();`
- TanStack Router is globally mocked in `src/test-setup.tsx` — do not re-mock it.

### Async

- `await screen.findBy*` or `await waitFor(...)` for async assertions.
- Never use `setTimeout` as a wait mechanism in tests.

### Providers

- Wrap components in the providers they depend on (e.g., `ThemeProvider`, `DataProvider`).

### Coverage

- Target 100% coverage with the **fewest meaningful tests**. Do not add tests that duplicate assertions.
