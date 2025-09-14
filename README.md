# frontend-javascript

This repository contains the frontend JavaScript curriculum for ALX, focusing on TypeScript fundamentals.

## Project: 0x04-TypeScript

This project covers various TypeScript concepts including basic types, interfaces, classes, DOM manipulation, and advanced features.

### Tasks Included in this Repository

#### Task 0: Creating an interface for a student
- Basic TypeScript interfaces
- DOM manipulation with TypeScript
- Array manipulation and table rendering

**Files:**
- `task_0/js/main.ts` - Student interface and table rendering
- `task_0/package.json`, `task_0/tsconfig.json`, `task_0/webpack.config.js`, `task_0/.eslintrc.js`

#### Task 3: Ambient Namespaces
- Ambient module declarations for external libraries
- Type definitions for CRUD operations
- Triple slash directives
- Module imports and type safety

**Files:**
- `task_3/js/main.ts` - Main application with CRUD operations
- `task_3/js/interface.ts` - Type definitions
- `task_3/js/crud.d.ts` - Ambient declarations
- `task_3/js/crud.js` - External library simulation

#### Task 5: Brand convention & Nominal typing
- Branded types for type safety
- MajorCredits and MinorCredits interfaces
- Nominal typing with brand properties
- Generic functions with branded types

**Files:**
- `task_5/js/main.ts` - Brand convention implementation
- `task_5/package.json`, `task_5/tsconfig.json`, `task_5/webpack.config.js`

## Directory Structure

```
frontend-javascript/
├── README.md
└── 0x04-TypeScript/
    ├── task_0/
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── webpack.config.js
    │   ├── .eslintrc.js
    │   ├── index.html
    │   └── js/
    │       └── main.ts
    ├── task_3/
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── webpack.config.js
    │   ├── index.html
    │   └── js/
    │       ├── main.ts
    │       ├── interface.ts
    │       ├── crud.d.ts
    │       └── crud.js
    └── task_5/
        ├── package.json
        ├── tsconfig.json
        ├── webpack.config.js
        ├── index.html
        └── js/
            └── main.ts
```

## Installation and Usage

Each task directory is self-contained with its own configuration. To run any task:

```bash
cd 0x04-TypeScript/task_X
npm install
npm run build
```

## Learning Objectives

By completing this project, you will understand:
- Basic types in TypeScript
- Interfaces, Classes, and functions
- How to work with the DOM and TypeScript
- Generic types and ambient namespaces
- Declaration merging and namespaces
- Nominal typing with branded types

## Requirements

- TypeScript compiler should show no warnings or errors
- All files use `.ts` extension where possible
- Webpack configuration for bundling
- ESLint configuration for code quality
- All variables use TypeScript when possible

## Technologies Used

- TypeScript 3.6.4
- Webpack 4.41.5
- ESLint with TypeScript rules
- HTML5 and CSS3 for DOM manipulation

## Author

ALX Frontend JavaScript Curriculum
