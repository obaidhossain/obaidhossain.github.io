# Obaid Hossain — Portfolio v1.0.0

Developer's portfolio built with **React + Vite + Tailwind CSS**.
Auto-deploys to GitHub Pages via GitHub Actions.

## Tech
- React 18 + Vite 5
- Tailwind CSS v4
- Google Form API
- GitHub REST API (live github stats)
- GitHub Actions (CI/CD)

## Project Structure

```
index.html
package.json
postcss.config.js
README.md
tailwind.config.js
vite.config.js
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx         ← reusable button variants
│   │   ├── Tag.jsx            ← skill/project tags
│   │   └── SectionHeader.jsx  ← section titles
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── GitHubStats.jsx        ← live GitHub data
│   ├── Blog.jsx               ← article cards + modal reader
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   ├── skills.js              ← edit your stack here
│   ├── projects.js            ← add your projects here
│   └── blog.js                ← write your posts here
├── hooks/
│   └── useActiveSection.js    ← scroll-spy hook
├── img/
│   └── profile.jpg            ← avatar and favicon
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Live on `https://obaidhossain.github.io/`