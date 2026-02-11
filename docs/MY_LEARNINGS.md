# My Learnings

**Last Updated:** February 11, 2026

## Technical Learnings

- I learned React 19 hoists `<title>`, `<meta>`, and `<link>` tags to `<head>` when rendered anywhere in JSX, eliminating react-helmet dependency—but these don't fully render in jsdom, requiring tests to check for presence rather than exact DOM structure

- I discovered TanStack Router's `autoCodeSplitting: true` generates route-based splits automatically and outputs `routeTree.gen.ts`—the tradeoff is build-time codegen for type-safe routing without manual `React.lazy()` wrappers

- I set Vitest branch coverage to 75% (vs 90% for lines/functions) because MUI's `sx` responsive breakpoints create unreachable branches in jsdom—this is documented in the config as a framework limitation, not a testing failure

- I mandated accessibility-first selectors (`getByRole`, `getByLabelText`) over `data-testid` in TEST-CASE-GUIDELINES.md because it enforces accessible markup as a testing side effect—if you can't query it semantically, users can't access it either

- I implemented conditional JSDOM initialization in `test-setup.tsx` (only when `document` is undefined) with explicit `globalThis` assignments for `window`, `document`, `navigator`, and DOM constructors—guards against test runners in non-standard environments

## Code Quality & Maintainability

- I separated context creation (`DataContextImpl.ts`), provider logic (`DataContext.tsx`), and hooks (`usePortfolioData.ts`) into distinct files—keeps `createContext` calls minimal while allowing complex async provider implementations to scale independently

- I configured ESLint flat config with `parserOptions.project` for type-aware linting, then disabled it for `*.config.{ts,js,mjs}` files using `tseslint.configs.disableTypeChecked`—config files shouldn't be subject to the same strict type checking as application code to avoid circular dependencies

- I used `verbatimModuleSyntax` and `erasableSyntaxOnly` in TypeScript config to catch import-only type usage that would be dead code at runtime and prevent runtime-breaking TS features—stricter than standard strict mode

## Architecture & Design Decisions

- I chose react-snap over SSR frameworks for this static portfolio: build the SPA, then crawl and pre-render routes to HTML—`skipThirdPartyRequests: true` prevents hanging on external resources, but requires manual `include` array maintenance on route changes

- I kept both `@tanstack/react-router` (for routing) and `react-router-dom` (for `useNavigate`/`useLocation` hooks) because Navigation.tsx depends on react-router-dom's imperative navigation while TanStack handles declarative routing—this dual-router pattern emerged during migration

- I designed DataContext to fetch blogs only when `isAuthenticated === true` with `useCallback` wrapping to stabilize effect dependencies—prevents re-fetching on every render while allowing the same context to work in both authenticated and unauthenticated states

- I implemented ThemeContext using localStorage for persistence with system preference fallback (`prefers-color-scheme`)—respects user's OS theme as initial default, saves manual changes, and listens to system changes only when no saved preference exists, following the same context separation pattern as AuthContext and DataContext

## Tooling & Developer Experience

- I extracted Node.js and Yarn setup into a composite action at `.github/actions/setup-node-yarn` to eliminate repetition across four CI jobs—composite actions use `action.yml` and are referenced via local path, not marketplace

## What I'd Do Differently Next Time

- I'd use Next.js instead of react-snap for SEO-critical sites—the manual `include` array maintenance is error-prone, and Next.js file-based routing eliminates this entire class of errors

- I'd evaluate Biome over ESLint + Prettier to reduce tooling complexity—managing separate configs for linting and formatting is overhead the ecosystem no longer requires

- I'd reconsider MUI for performance-sensitive projects—the bundle weight, CSS-in-JS runtime overhead, and testing complexity (unreachable responsive branches) outweigh component library benefits for lightweight apps
