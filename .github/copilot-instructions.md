# AI Coding Agent Instructions for `shijuapps-ui`

Welcome to the `shijuapps-ui` codebase! This document provides essential guidance for AI coding agents to be productive in this project. Follow these instructions to understand the architecture, workflows, and conventions specific to this repository.

---

## Project Overview

This is a React-based project bootstrapped with Vite. It uses modern JavaScript (ES6+) and JSX for building user interfaces. The project emphasizes fast development cycles with Hot Module Replacement (HMR) and includes ESLint for code quality.

### Key Files and Directories

- **`src/`**: Contains all source code for the application.
  - `App.jsx`: Main application component.
  - `main.jsx`: Entry point for the React app.
  - `assets/`: Static assets like images.
- **`public/`**: Static files served directly.
- **`vite.config.js`**: Configuration for Vite.
- **`eslint.config.js`**: ESLint rules for code quality.

---

## Developer Workflows

### Build and Run
- **Development**: Use `npm run dev` to start the development server with HMR.
- **Build**: Use `npm run build` to create a production build.
- **Preview**: Use `npm run preview` to preview the production build locally.

### Linting
- Run `npm run lint` to check for code quality issues.

---

## Project-Specific Conventions

### Code Style
- Follow the ESLint rules defined in `eslint.config.js`.
- Use functional components and React hooks.

### File Structure
- Group related components and assets together.
- Use `index.js` or `index.jsx` for barrel exports when necessary.

### External Dependencies
- React and ReactDOM are the primary libraries for UI development.
- Vite plugins are used for React-specific optimizations.

---

## Tips for AI Agents

1. **Understand the Vite Ecosystem**: Familiarize yourself with Vite's configuration and plugin system.
2. **Focus on React Best Practices**: Use hooks like `useState` and `useEffect` effectively.
3. **Respect Existing Patterns**: Follow the structure and patterns already established in the `src/` directory.
4. **Testing**: While no explicit testing framework is set up, consider suggesting or integrating tools like Jest or React Testing Library if needed.

---

For any unclear or incomplete sections, consult the README or the `vite.config.js` file for additional context.