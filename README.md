# MBTI-64

A Vue.js MBTI personality test with 6 dimensions and scenario-based questions tailored to different life personas.

## Features

- **6 personality dimensions**: EI, SN, TF, JP, AT, CS (7 questions each, 42 total)
- **Multiple personas**: Questions adapted to different life contexts — office worker, student, homemaker, freelancer
- **Scenario-based design**: Each question places you in a concrete situation and asks about your inner reaction, not just behavior
- **Quick lookup**: Already know your type? Jump straight to detailed results
- **Detailed results**: Dimension charts, strength/weakness analysis, and personality breakdowns

## Tech Stack

- Vue 3 + Vue Router
- Vite
- No external UI framework — lightweight and self-contained

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── composables/      # Vue composables (quiz logic)
├── data/
│   └── questions/    # Per-persona question sets
├── utils/            # Scoring and helpers
└── views/            # Page-level route components
```

## Adding a New Persona

1. Create a new question file in `src/data/questions/` (e.g. `retiree.js`)
2. Register it in `src/data/questions/index.js` — add import, persona entry, and question mapping
