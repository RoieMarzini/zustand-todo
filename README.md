# Zustand To-Do App

A minimal, modern To-Do application built with React + TypeScript, Zustand for state management, TailwindCSS for styling, and Shadcn/UI for accessible, beautiful UI components.

## Features

- Add, edit, toggle, and delete tasks (full CRUD)
- State managed globally with Zustand
- Clean, responsive UI with TailwindCSS
- Accessible and stylish UI elements from Shadcn/UI (Button, Input, Checkbox, Card)
- Keyboard and screen reader friendly

## Tech Stack

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/) for state management
- [TailwindCSS](https://tailwindcss.com/) for utility-first styling
- [Shadcn/UI](https://ui.shadcn.com/) for accessible, composable UI components

## Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Start the development server

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### 3. Build for production

```
npm run build
```

### 4. Run tests

```
npm test
```

## Customization
- Edit `src/App.tsx` to change the UI or logic.
- Add more Shadcn/UI components from [the registry](https://ui.shadcn.com/docs/components).
- Update styles in `src/index.css` or Tailwind config as needed.

## Folder Structure
- `src/store/store.ts` — Zustand store for tasks
- `src/components/ui/` — Shadcn/UI components (Button, Input, Checkbox, Card)
- `src/lib/utils.ts` — Utility functions (e.g., `cn` for class merging)
- `src/App.tsx` — Main To-Do app UI

## Credits
- [Create React App](https://create-react-app.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)

---


