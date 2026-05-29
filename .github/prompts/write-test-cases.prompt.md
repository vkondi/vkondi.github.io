---
agent: 'agent'
description: 'Generate a complete test suite for the currently open source file'
---

# Write Test Cases

Generate a complete test suite for the currently open file.

**If no file is open, or the target file is unclear, ask for confirmation before proceeding.**

If the open file contains no testable logic (e.g., only type definitions, style imports, or re-exports), state that no meaningful tests can be generated and explain why.

If a test file already exists, perform a **full rewrite** — recreate the entire suite from scratch based on the latest implementation. Do not patch outdated tests.

---

## Test File Location & Naming

- Place the test file alongside the source file.
- Components: `ComponentName.test.tsx`
- Utilities / hooks: `fileName.test.ts`

---

## Guidelines

Follow all principles in [TEST-CASE-GUIDELINES.md](../../docs/TEST-CASE-GUIDELINES.md). If that file cannot be read, proceed using only the guidelines defined in this prompt and notify the user that the external guidelines file was not accessible.

### Structure

- Top-level `describe`: component name or function name.
  - e.g. `describe('BlogCard component')`, `describe('getYearsAndMonthsDifference')`
- Each `it` title must clearly describe the assertion.
  - e.g. `it('opens blog URL in a new tab when card is clicked')`
- Use nested `describe` blocks when a function or component has 3 or more distinct behavioral groups (e.g., by prop variant, auth state, or async outcome).

### Standard Imports

```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
```

### Selectors — prefer accessible queries

```tsx
// ✅ Prefer
screen.getByRole('button', { name: /submit/i })
screen.getByText('Hello')
screen.getByLabelText('Email')

// ❌ Avoid
screen.getByTestId('...')
```

### Mocking

- `vi.mock(...)` at module level for module-level mocks.
- `vi.spyOn(...)` for method-level spies; call `spy.mockRestore()` after each use.
- Reset shared state in `beforeEach`: `localStorage.clear(); vi.clearAllMocks();`
- TanStack Router is globally mocked in `src/test-setup.tsx` — do not re-mock it.
- For browser globals or APIs not accessible via module imports (e.g., `window.matchMedia`, `IntersectionObserver`), define a manual mock in `beforeEach` using `Object.defineProperty` or `vi.stubGlobal`, and restore it in `afterEach`.

### Async

- Use `await screen.findBy*` or `await waitFor(...)` for async assertions.
- Never use `setTimeout` as a wait mechanism.

### Providers

- Wrap components in the providers they depend on (e.g., `ThemeProvider`, `DataProvider`).
- Infer required providers by inspecting the component's imports and context usage. If provider requirements are ambiguous, add a comment in the test file listing assumed providers.

---

## Coverage Goal

Aim for **100% coverage with the minimum number of meaningful tests**. Do not add tests that assert the exact same behavior as another test with no difference in input, path, or edge case covered.

---

## Quality Check

Before finishing, review the generated file for obvious import mistakes and type mismatches you can detect statically. Note any imports or types you are uncertain about so the user can verify them.
