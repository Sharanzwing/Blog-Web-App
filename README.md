# CHRONICLE &bull; Editorial Journal Web Application

A minimalist, designer-grade editorial publication platform built with **Node.js**, **Express.js**, and **EJS (Embedded JavaScript Templates)**. Features a multi-card center-focus carousel inspired by [Timothy Ricks' Tricks Menu Slider](https://tricks-menu-slider.webflow.io/), handcrafted typography pairings, and a full RESTful publication studio (`GET`, `POST`, `PATCH`, `DELETE`).

---

## Visual Design & Editorial Typography System

Unlike generic template designs, **CHRONICLE** is styled with an intentional, award-winning editorial aesthetic:

- **Typography Trio**:
  - **Display Headlines**: `Syne` (Bold, geometric, tight `-0.035em` tracking for headlines with character).
  - **Reading Body**: `Plus Jakarta Sans` (Humanist sans-serif with comfortable `1.65` leading for effortless reading).
  - **Micro-labels & Indicators**: `Space Mono` (Monospaced, uppercase, wide `0.14em` letter-spacing for issue tags, dates, and counters like `// 01`).
- **Tactile Obsidian Palette**:
  - Deep obsidian canvas (`#090a0d`) paired with warm champagne brass accents (`#e2b170`).
  - Architectural hairline borders (`rgba(255, 255, 255, 0.08)`) and restrained card elevation.
  - No synthetic neon gradients or AI glow effects—clean, editorial contrast.

---

## Carousel Architecture (Inspired by `tricks-menu-slider.webflow.io`)

The carousel utilizes **Splide.js** with bespoke custom controls:
- **Center-Focus Scaling**: The active card is prominent (`scale(1)`, `opacity: 1`), while adjacent left/right cards peek into the viewport (`scale(0.92)`, `opacity: 0.45`) through visible track overflow.
- **Bespoke Arrow Navigation**: Custom circular control buttons with long-tail arrow SVG icons that invert on hover.
- **Dynamic Slide Counter**: Monospaced slide indicator (`01 / 04`) updating in real-time on slide swipe or transition.
- **Smooth Drag & Touch**: Native touch/drag physics with custom cubic-bezier easing (`cubic-bezier(0.25, 1, 0.5, 1)`).
- **Graceful Fallback**: Native smooth-scroll fallback if offline or CDN is delayed.

---

## Features & RESTful CRUD Workflow

- **Read (`GET /`)**: Center-focused article slider with curated posts and dynamic user publications.
- **Create (`GET /post` & `POST /post`)**: Dedicated publication studio with category selector and datalist suggestions.
- **Update (`GET /edit/:id` & `PATCH /edit/:id`)**: Edit existing posts with pre-filled inputs and `method-override` PATCH semantics.
- **Delete (`DELETE /delete/:id`)**: Semantic DELETE form submission removing items seamlessly from the carousel.
- **Automated Metadata**: Automatic author monogram initials and publication timestamp generation.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Runtime** | [Node.js](https://nodejs.org/) (ES Modules) |
| **Backend Framework** | [Express.js](https://expressjs.com/) (v5) |
| **Templating Engine**| [EJS](https://ejs.co/) (Embedded JavaScript) |
| **Slider Engine** | [Splide.js](https://splidejs.com/) (Multi-card center-focus loop) |
| **Styling** | Vanilla CSS3 (Custom Properties, Architectural Hairlines, Fluid Typography) |
| **Fonts** | Google Fonts (*Syne*, *Plus Jakarta Sans*, *Space Mono*) |
| **Middleware** | `express.urlencoded`, `method-override` |

---

## Project Structure

```text
Blog Web App/
├── public/
│   └── styles/
│       └── main.css           # Refined editorial design system & Splide overrides
├── views/
│   ├── partials/
│   │   ├── header.ejs         # Typography links, Splide CSS & minimalist nav
│   │   └── footer.ejs         # Splide controller, bespoke buttons & footer
│   ├── index.ejs              # Multi-card center-focus slider & action dock
│   └── post.ejs               # Editorial creation & editing studio
├── .gitignore                 # Excludes node_modules and system files
├── index.js                   # Express server & RESTful route controllers
├── package.json               # Dependencies & ESM setup
└── README.md                  # Comprehensive project documentation
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Application
```bash
node index.js
```
*(Or `npx nodemon index.js` for automatic server reloading).*

### 3. Open in Browser
Visit: `http://localhost:3000`

---

## License

Available under the [ISC License](LICENSE).
