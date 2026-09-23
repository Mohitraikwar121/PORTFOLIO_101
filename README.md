# Mohit Raikwar — Developer Portfolio

A complete, runnable React + TypeScript + Vite portfolio reconstructed from the supplied project entry file. The original archive contained only `Index.tsx` and `README.md`; the missing components, project configuration, entry point, and styling have been supplied so the application can run locally.

## Run in VS Code

Requirements: Node.js 18+.

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite, usually `http://localhost:5173/`.

For a production check:

```bash
npm run build
npm run preview
```

## Structure

```text
Portfolio-main/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── .gitignore
├── README.md
└── src/
    ├── Index.tsx
    ├── main.tsx
    ├── styles.css
    └── components/
        ├── Navbar.tsx
        ├── HeroSection.tsx
        ├── AboutSection.tsx
        ├── SkillsSection.tsx
        ├── ProjectsSection.tsx
        ├── ServicesSection.tsx
        ├── ExperienceSection.tsx
        ├── ContactSection.tsx
        └── Footer.tsx
```

## Customize

Update the personal links and email in the component files, especially `HeroSection.tsx`, `ContactSection.tsx`, and `Navbar.tsx`. Replace the placeholder GitHub/LinkedIn links with your real profiles.

The design uses a dark, futuristic developer-portfolio aesthetic and plain CSS, so it does not require Tailwind configuration.
