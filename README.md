# Vishwajeet Kondi - Portfolio Website

[![CI](https://github.com/vkondi/vkondi.github.io/workflows/CI/badge.svg)](https://github.com/vkondi/vkondi.github.io/actions?query=workflow%3ACI)
[![Coverage](https://img.shields.io/badge/coverage-95.26%25-brightgreen)](https://github.com/vkondi/vkondi.github.io/actions)
[![License](https://img.shields.io/github/license/vkondi/vkondi.github.io)](./LICENSE)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Material-UI](https://img.shields.io/badge/Material--UI-7.1.0-0081CB?logo=material-ui)](https://mui.com)
[![Vite](https://img.shields.io/badge/Vite-6.4.1-646CFF?logo=vite)](https://vitejs.dev)

A modern, responsive portfolio website showcasing my professional experience, skills, and personal projects. Built with React, TypeScript, and Material-UI for a clean, professional presentation.

## 🌟 Features

### **Professional Presentation**

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Modern UI**: Clean, professional interface using Material-UI components
- **Smooth Animations**: Subtle hover effects and transitions for enhanced UX

### **Content Sections**

- **Profile**: Professional summary and contact information
- **About**: Brief introduction and background
- **Skills**: Comprehensive skill matrix
- **Education**: Degrees, universities, and year of passing
- **Work Experience**: Interactive timeline with company logos and detailed descriptions
- **Personal Projects**: Previews of personal web applications with GitHub links
- **Professional Projects**: Previews of enterprise-level projects with technologies used
- **Blogs**: List of published blogs

### **Interactive Elements**

- **PDF Downloads**: Resume and cover letter downloads with dropdown menu
- **Show More/Less**: Expandable sections for better content organization
- **Live Previews**: Embedded iframe previews of personal projects
- **Social Links**: Direct links to GitHub, LinkedIn, and email

### **Technical Features**

- **TypeScript**: Full type safety and better development experience
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Performance Optimized**: Fast loading with Vite build system
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

### **Frontend Framework**

- **React 19**: Latest React with modern features
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server

### **UI Framework**

- **Material-UI (MUI)**: Professional component library
- **Emotion**: CSS-in-JS styling solution
- **Framer Motion**: Smooth animations and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vkondi/vkondi.github.io.git
   cd vkondi.github.io
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start development server**

   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build for production
- `yarn preview` - Preview production build locally
- `yarn lint` - Run ESLint for code quality
- `yarn lint:fix` - Fix ESLint issues automatically
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting
- `yarn type-check` - Run TypeScript type checking
- `yarn test` - Run tests in watch mode
- `yarn test:ui` - Run tests with Vitest UI
- `yarn test:coverage` - Run tests with coverage report
- `yarn prepare` - Set up Husky git hooks
- `yarn clean` - Clean build artifacts and cache

## 🎨 Customization

### **Adding New Content**

- Update `portfolioData` object in `DataContext.tsx` which is the master data for all the portfolio information displayed on the website.

### **Styling**

- **Theme**: Modify `theme.ts` for color schemes and typography
- **Components**: Update individual component styles in their respective files
- **Responsive**: Use Material-UI's responsive breakpoints for mobile optimization

## 📱 Mobile Optimization

The portfolio is fully optimized for mobile devices with:

- **Responsive Grid**: Adaptive layouts for different screen sizes
- **Touch-Friendly**: Proper touch targets and spacing
- **Performance**: Optimized images and assets
- **Accessibility**: Screen reader support and keyboard navigation

## 🌐 Deployment

This portfolio is automatically deployed to [Vercel](https://vercel.com) via GitHub Actions CI/CD pipeline.

- **Production URL**: [vkondi.github.io](https://vishwajeetkondi.vercel.app/)
- **Build Status**: See CI badge above
- **Deployment Branch**: `master`
- **Build Command**: `yarn build`
- **Output Directory**: `dist`

The deployment process includes:

- Automated testing and linting
- Type checking validation
- Build optimization with Vite

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

## 📚 Documentation

- **[Contributing Guide](./CONTRIBUTING.md)**: Detailed guidelines for contributors including development setup, code standards, and pull request process
- **[Testing Guidelines](./docs/TEST-CASE-GUIDELINES.md)**: Comprehensive testing standards and best practices
- **[SEO Guide](./docs/SEO-GUIDE.md)**: SEO implementation details and best practices
- **[Code of Conduct](./CODE_OF_CONDUCT.md)**: Community guidelines and expectations
- **[Pull Request Template](./.github/PULL_REQUEST_TEMPLATE.md)**: Template for submitting pull requests with comprehensive checklists

## 📞 Contact

- **Email**: vkondi@gmail.com
- **LinkedIn**: [Vishwajeet Kondi](https://www.linkedin.com/in/vishwajeetkondi/)
- **GitHub**: [@vkondi](https://github.com/vkondi)

---

_Crafted with chai, code, and a dash of Material-UI magic ☕💻✨_
