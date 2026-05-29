---
agent: 'agent'
description: 'Update the existing test file to reflect the current implementation of the open source file'
---

# Update Test Cases

Update the test file corresponding to the currently open source file so it fully reflects the latest implementation.

**If no file is open, or the target file is unclear, ask for confirmation before proceeding.**

**If no test file exists, create one** following the same conventions as `write-test-cases`.

---

## Before Updating

**Precedence when rules conflict:** (1) correctness and accuracy, (2) coverage, (3) minimum test count.

1. Read the **latest implementation** of the source file in full.
2. Read the **existing test file** in full.
3. Identify:
   - Tests that are outdated or cover removed/changed behavior.
   - Behaviors in the implementation not yet covered by tests.
   - Redundant tests that assert the exact same behavior as another test with no difference in input, path, or edge case covered.

---

## What to Update

- **Remove** tests for behaviors that no longer exist.
- **Update** tests that reflect changed signatures, logic, or output.
- **Add** tests for new or uncovered behaviors.
- **Keep** tests that remain valid and accurate.

Make only the changes necessary to align the test suite with the current implementation. Avoid rewriting tests that are already correct and accurate. Perform a full rewrite only if the test file is entirely outdated or empty.

If the test file exists but contains no tests, treat it as a new file and generate full coverage from scratch following the same conventions as `write-test-cases`.

If the existing test file uses a different test runner than Vitest, flag the inconsistency to the user and ask whether to migrate or preserve the existing runner before proceeding.

---

## Test File Location & Naming

- Test file lives alongside the source file.
- Components: `ComponentName.test.tsx`
- Utilities / hooks: `fileName.test.ts`

---

## Guidelines

Follow all principles in [TEST-CASE-GUIDELINES.md](../../docs/TEST-CASE-GUIDELINES.md). If that file cannot be read, proceed using only the guidelines defined in this prompt and notify the user that the external guidelines file was not accessible.

### Structure

- Top-level `describe`: component name or function name.
  - e.g. `describe('BlogCard component')`, `describe('getYearsAndMonthsDifference')`
- Each `it` title must clearly describe the assertion.
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

Aim for **100% coverage with the minimum number of meaningful tests**. Remove tests that assert the exact same behavior as another test with no difference in input, path, or edge case covered.

---

## Quality Check

Before finishing, verify the updated test file has:
- No TypeScript errors
- No ESLint violations
- All imports correctly resolved

If any of these checks fail, fix the violation before outputting the final file. If a violation cannot be resolved automatically, leave an inline `// TODO:` comment describing the issue and notify the user.
