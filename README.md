# React + Vite + TypeScript + Tailwind CSS Starter

This repository provides a custom starter template for React applications using **Vite**, **TypeScript**, and **Tailwind CSS** with path alias support. It includes the necessary configuration for a seamless development experience and follows best practices for TypeScript, Vite, and Tailwind integration.

---

## 🚀 Features

-   **React** with **SWC** for fast JSX transformation.
-   **Vite** as the build tool for fast development and optimized production builds.
-   **TypeScript** with strict configurations for better type safety.
-   **Tailwind CSS** for utility-first styling.
-   Path aliases set up for cleaner imports.

---

## ⚙️ Configuration Highlights

## 📦 Additional Dependencies

These dependencies have been added to resolve TypeScript-related errors and improve the development experience:

-   **ts-node** - To execute TypeScript code directly without compiling it first.
-   **@types/node** - Provides TypeScript definitions for Node.js.
-   **vite-plugin-tsconfig-paths** - Helps resolve path aliases defined in the **tsconfig.json** file during development.

You can install them by running:

```
yarn add ts-node @types/node vite-plugin-tsconfig-paths -D

```

### 1. Vite Configuration

The **`vite.config.ts`** file is set up with vite-plugin-tsconfig-paths to resolve TypeScript path aliases:

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            // '@components': resolve(__dirname, 'src/components'),
        },
    },
    plugins: [react(), tsconfigPaths()],
});
```

### 2. Path Aliases

Path aliases are configured in **`tsconfig.json`** for cleaner imports:

```
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/": ["./"]
      // "@components": ["components"],
    }
  }
}

```

### 3. TypeScript Configuration

The TypeScript configuration is split into multiple files for flexibility:

-   **tsconfig.json** - Base configuration for TypeScript with shared settings across the app.
-   **tsconfig.app.json** - Specific settings for the application code.
-   **tsconfig.node.json** - Settings for server-side or Node.js-specific code.

**`Base`** tsconfig.json

```
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }],
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/": ["./"]
    }
  }
}

```

**`Application`** tsconfig.app.json

```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}

```

**`Node`** tsconfig.node.json

```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}

```

## 📦 Technologies Used

-   **React** with **SWC** for fast JSX compilation
-   **Vite** for fast bundling and development
-   **TypeScript** for type safety
-   **Tailwind** CSS for utility-first styling
-   **ESLint** for code linting and quality assurance
-   **PostCSS** for transforming Tailwind and other CSS plugins

## 📝 License

This project is licensed under the MIT License. Feel free to use it as a reference or starting point for your projects.

## 🙌 Contributions

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

## 📧 Contact

For any questions, feel free to reach out at sumanadithan34@gmail.com.
