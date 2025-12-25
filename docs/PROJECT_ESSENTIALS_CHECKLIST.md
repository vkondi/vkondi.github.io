# Project Must-Have Checklist

This checklist ensures that all basic essentials are covered for maintaining code quality and consistency across the project.

## 1. Testing

- [x] Unit testing is enabled
- [ ] Coverage target set to greater than 90%

## 2. Linting

- [x] Linting is enabled
- [x] Lint script added to `package.json`
- [x] Recommended linting rules added based on the project tech stack

## 3. Type Safety

- [x] TypeScript is enabled
- [x] Type safety check script added to `package.json`

## 4. Formatter

- [x] Formatter is enabled
- [x] Format script added to `package.json`

## 5. Husky

- [x] Husky is configured
- [x] Lint check added to pre-commit hook
- [x] Type check added to pre-commit hook
- [x] Formatting check added to pre-commit hook
- [x] Husky prepare script added to `package.json`

## 6. GitHub Actions

- [x] CI configured with lint job
- [x] CI configured with type check job
- [x] CI configured with test job
- [x] CI configured with build job

## 7. Documentation

- [x] Code of Conduct document added
- [x] Contributing document added
- [x] Testing guidelines document added
- [x] Pull request guidelines document added
- [x] README includes CI status badge
- [x] README includes Tech Stack information
- [x] README includes other relevant badges
- [x] README properly embeds documentation details

---

**Note:** Check off each item as you implement it in your project. All items should be completed before considering the project setup complete.