# Ramayana Immersive Storytelling

A cinematic, mythology-inspired frontend showcase that presents the characters of Valmiki's Ramayana as an interactive sacred archive. The project keeps the original epic content intact while upgrading the codebase into a polished portfolio-ready static web experience.

## Features

- Premium Ramayana-themed visual system with gold, indigo, saffron, and parchment tones
- Responsive character constellation grid for desktop, tablet, and mobile screens
- Live character search and category filtering
- Cinematic character detail modal with attributes, traits, story arcs, and verses
- Smooth loading state, hover interactions, modal transitions, and scroll reveal animations
- Accessible semantic structure with skip link, ARIA dialog state, keyboard escape close, and focus return
- Organized static assets under `assets/images`
- Dependency-free HTML, CSS, and JavaScript architecture

## UI Architecture

```text
ramayana-app/
├── assets/
│   └── images/          # Character portrait assets
├── index.html           # Semantic page shell and layout landmarks
├── style.css            # Visual system, responsive layout, animations
├── app.js               # Character data, rendering, filters, modal behavior
├── README.md            # Portfolio documentation
└── .gitignore           # Clean GitHub repository defaults
```

## Screenshots

Add final screenshots before publishing:

- `screenshots/home-desktop.png` - cinematic hero and character grid
- `screenshots/character-modal.png` - expanded character detail view
- `screenshots/mobile-view.png` - responsive mobile experience

## Setup Instructions

No build step is required.

1. Clone the repository.
2. Open `index.html` in a browser.
3. For local development with a static server, run:

```bash
npx serve .
```

## Deployment

This project can be deployed as a static site on GitHub Pages, Netlify, Vercel, or any static hosting service.

For GitHub Pages:

1. Push the project to a GitHub repository.
2. Open repository `Settings`.
3. Go to `Pages`.
4. Select the branch and root folder.
5. Save and open the published URL.

## Future Enhancements

- Add a visual timeline for major Ramayana events
- Add ambient sound controls with user opt-in
- Add bookmarked/favorite characters using local storage
- Add screenshot assets and Open Graph preview image
- Split character data into a dedicated JSON file if the project grows

## Author

Created as a portfolio-grade frontend showcase project.
