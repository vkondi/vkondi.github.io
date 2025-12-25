# Contributing to Vishwajeet Kondi's Portfolio

Thank you for your interest in contributing to my portfolio website! 🎉

This project is a personal showcase of my professional work and skills, but I welcome contributions that help improve the codebase, add new features, or enhance the user experience. Whether you're fixing a bug, improving documentation, or suggesting new features, your contributions are valuable.

## 📋 Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Code Standards](#code-standards)
- [Testing Guidelines](#testing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code of Conduct](#code-of-conduct)
- [Getting Help](#getting-help)

## 🤝 Ways to Contribute

### 🐛 Reporting Bugs

Found a bug? Please [open an issue](https://github.com/vkondi/vkondi.github.io/issues/new?template=bug_report.md) with:

- **Clear title** describing the issue
- **Steps to reproduce** the problem
- **Expected behavior** vs. actual behavior
- **Screenshots** if applicable
- **Browser and OS** information
- **Console errors** or logs

### 💡 Suggesting Features

Have an idea for a new feature? [Create a feature request](https://github.com/vkondi/vkondi.github.io/issues/new?template=feature_request.md) including:

- **Feature description** and use case
- **Mockups or examples** if possible
- **Why this would benefit the portfolio**

### 🛠️ Code Contributions

Ready to contribute code? Here's how:

1. **Fork** the repository
2. **Create a feature branch** from `master`
3. **Make your changes** following the guidelines below
4. **Test thoroughly** (see testing guidelines)
5. **Submit a pull request**

### 📖 Documentation Improvements

Help improve documentation by:
- Fixing typos or unclear explanations
- Adding code examples
- Improving setup instructions
- Creating tutorials or guides

### 🎨 Design Contributions

Suggestions for UI/UX improvements are welcome:
- Color scheme enhancements
- Layout improvements
- Accessibility improvements
- Mobile responsiveness fixes

## 🚀 Development Setup

### Prerequisites

- **Node.js** 18 or higher
- **Yarn** package manager (recommended)
- **Git** for version control

### Quick Start

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/vkondi.github.io.git
   cd vkondi.github.io
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development
yarn dev              # Start development server
yarn preview          # Preview production build

# Code Quality
yarn lint             # Run ESLint
yarn lint:fix         # Fix ESLint issues automatically
yarn format           # Format code with Prettier
yarn format:check     # Check code formatting
yarn type-check       # Run TypeScript type checking

# Testing
yarn test             # Run tests in watch mode
yarn test:ui          # Run tests with Vitest UI
yarn test:coverage    # Run tests with coverage report

# Build
yarn build            # Build for production
```

### Project Structure

```
src/
├── components/       # Reusable UI components
├── context/          # React context providers
├── pages/            # Page components
├── router/           # Routing configuration
├── utils/            # Utility functions
├── assets/           # Static assets
└── test-setup.tsx    # Test configuration

docs/                 # Documentation
.github/              # GitHub Actions and templates
```

## 📏 Code Standards

### General Guidelines

- **TypeScript First**: All new code must be written in TypeScript
- **Functional Components**: Prefer functional components with hooks
- **Performance**: Optimize for performance and bundle size
- **Accessibility**: Ensure WCAG 2.1 AA compliance

### Code Style

- **ESLint**: Follow all ESLint rules (auto-fixable with `yarn lint:fix`)
- **Prettier**: Code is automatically formatted
- **Imports**: Group imports (React, third-party, local) with empty lines between groups

```typescript
// ✅ Good
import React from 'react';
import { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import axios from 'axios';

import { usePortfolioData } from '../context/DataContext';
import { formatDate } from '../utils/utility';

// ❌ Avoid
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { usePortfolioData } from '../context/DataContext';
import { formatDate } from '../utils/utility';
```

### Component Guidelines

#### **Mandatory**
- **Single Responsibility**: Each component should have one clear purpose
- **Default Props**: Use default parameters instead of defaultProps

#### **Good to Have**
- **Props Interface**: Define separate TypeScript interfaces for component props (currently used in ~50% of components)
- **Error Boundaries**: Consider error boundaries for complex components with async operations

```typescript
// ✅ Good
interface SectionTitleProps {
  title: string;
  iconComponent?: ElementType;
}

const SectionTitle = ({ title, iconComponent: IconComponent }: SectionTitleProps) => {
  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
      {IconComponent && <IconComponent />}
    </Box>
  );
};

// ❌ Avoid
const SectionTitle = ({ title, iconComponent }) => {
  // No TypeScript interface
  // No default props pattern
};
```

### File Naming

- **Components**: PascalCase (e.g., `SectionTitle.tsx`)
- **Utilities**: camelCase (e.g., `utility.ts`)
- **Tests**: Same name as component with `.test.tsx` suffix
- **Directories**: camelCase or kebab-case

## 🧪 Testing Guidelines

This project follows comprehensive testing guidelines documented in [`docs/test-cases-guidelines.md`](./docs/test-cases-guidelines.md).

### Key Principles

- **Semantic Selectors**: Use `getByRole`, `getByLabelText`, `getByText` over `data-testid`
- **User-Centric Testing**: Test user interactions and outcomes, not implementation details
- **100% Coverage Goal**: Aim for complete code coverage with meaningful tests
- **Fast Execution**: Keep test suites under 1 second per file

### Testing Commands

```bash
# Run all tests
yarn test

# Run tests with UI
yarn test:ui

# Generate coverage report
yarn test:coverage
```

### Test Structure

```typescript
// ✅ Good test structure
describe('ComponentName', () => {
  beforeEach(() => {
    // Setup mocks and initial state
  });

  it('should render correctly', () => {
    render(<ComponentName />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should handle user interaction', async () => {
    render(<ComponentName />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockFunction).toHaveBeenCalled();
  });
});
```

## 🔄 Pull Request Process

### Before Submitting

1. **Update Tests**: Ensure all tests pass and add new tests for new features
2. **Code Quality**: Run all quality checks
   ```bash
   yarn type-check && yarn lint && yarn format:check
   ```
3. **Test Coverage**: Maintain or improve test coverage
4. **Documentation**: Update documentation for any API changes

### Creating a Pull Request

1. **Branch Naming**: Use descriptive names
   ```
   feature/add-dark-mode-toggle
   fix/mobile-navigation-bug
   docs/update-contributing-guide
   ```

2. **Commit Messages**: Follow conventional commits
   ```
   feat: add dark mode toggle component
   fix: resolve mobile navigation overflow
   docs: update installation instructions
   ```

3. **PR Description**: Include
   - **What** was changed and **why**
   - **Screenshots** for UI changes
   - **Testing instructions**
   - **Breaking changes** (if any)

4. **PR Size**: Keep PRs focused and reviewable (under 500 lines if possible)

### Review Process

1. **Automated Checks**: All CI checks must pass
2. **Code Review**: At least one maintainer review required
3. **Approval**: PR approved and merged by maintainer
4. **Merge**: Squash merge with descriptive commit message

## 🤝 Code of Conduct

This project follows a simple code of conduct:

- **Be Respectful**: Treat all contributors with respect and kindness
- **Be Constructive**: Provide helpful feedback and suggestions
- **Be Inclusive**: Welcome contributors from all backgrounds
- **Be Patient**: Remember that everyone is learning and growing

### Unacceptable Behavior

- Harassment or discriminatory language
- Personal attacks or insults
- Trolling or disruptive comments
- Sharing private information without consent

Violations will result in removal from the project.

## 🆘 Getting Help

### Communication Channels

- **Issues**: For bugs, features, and general discussion
- **Discussions**: For questions and longer-form conversations
- **Pull Request Comments**: For code review feedback

### Asking for Help

When asking for help, please:

- **Be Specific**: Include error messages, code snippets, and steps to reproduce
- **Share Context**: Explain what you're trying to achieve
- **Show Your Work**: Include what you've already tried

### Resources

- [React Documentation](https://react.dev)
- [Material-UI Documentation](https://mui.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev)

## 🙏 Recognition

Contributors will be recognized in:

- **Repository Contributors**: GitHub's contributor insights
- **Changelog**: For significant features and fixes
- **README**: Special mentions for major contributions

Thank you for contributing to my portfolio! Your efforts help make this project better for everyone. 🚀

---

*This contributing guide is inspired by open source best practices and adapted for this personal portfolio project.*
