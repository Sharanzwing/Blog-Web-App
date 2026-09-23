# CHRONICLE &bull; Editorial Journal & Storytelling Platform

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-v20%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-v5-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/EJS-Templates-B4CA65?style=for-the-badge&logo=javascript&logoColor=black" alt="EJS" />
  <img src="https://img.shields.io/badge/Splide.js-Carousel-4A90E2?style=for-the-badge&logo=javascript&logoColor=white" alt="Splide.js" />
  <img src="https://img.shields.io/badge/CSS3-Bespoke_Design-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/License-ISC-E2B170?style=for-the-badge" alt="License" />
</p>

A minimalist, designer-grade editorial publication platform built with **Node.js**, **Express.js**, and **EJS (Embedded JavaScript Templates)**. 

Inspired by [Timothy Ricks' Tricks Menu Slider](https://tricks-menu-slider.webflow.io/), **CHRONICLE** rejects generic "AI-slop" aesthetics in favor of high-contrast Swiss typography, deep obsidian surfaces, warm champagne brass accents, and a buttery-smooth multi-card center-focus carousel slider.

---

## ✨ Key Features

* **Multi-Card Center-Focus Slider**: 60fps/120fps GPU-composited slide transitions using Splide.js, custom cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`), visible track overflow peek, and live slide counters (`01 / 04`).
* **Complete RESTful CRUD Engine**:
  * **Create (`POST /post`)**: Dedicated publication studio to draft articles.
  * **Read (`GET /`)**: Dynamic carousel rendering combining featured stories and user publications.
  * **Update (`PATCH /edit/:id`)**: Edit existing stories with pre-filled inputs and semantic `method-override` PATCH requests.
  * **Delete (`DELETE /delete/:id`)**: Real-time article removal with seamless carousel synchronization.
* **Custom Floating Comboboxes**: Replaces clunky native OS `<select>` and `<datalist>` dropdowns with unified, floating obsidian menus (`#141720`) featuring category badges, checkmarks (`✓`), and live typing synchronization for **Categories**, **Headlines**, and **Author Bylines**.
* **Automated Editorial Metadata**: Automatically extracts and styles author monograms (e.g. `Sharan Raj` &rarr; `SR`) and publication timestamps.
* **Accessible & Tactile Micro-Interactions**: Custom dark editorial scrollbars, luxury gold text selection (`::selection`), accessible `:focus-visible` rings, and tactile button compression states (`:active`).
* **Complete Device Responsiveness**: Fluid layouts across small mobile viewports (<480px), medium tablets (768px - 1024px), and ultra-wide desktops.

---

## 🎨 Editorial Design System & Typography

Unlike generic dashboard templates with neon glows, **CHRONICLE** is built around an intentional, high-contrast print editorial philosophy:

| Token | Value | Rationale |
| :--- | :--- | :--- |
| **Canvas Background** | `#090A0D` | Deep obsidian charcoal; avoids harsh pure black while maximizing contrast. |
| **Surface Cards** | `#111319` | Elevated card container with 1px architectural hairline borders. |
| **Active Accent** | `#E2B170` | Warm champagne brass; conveys craftsmanship, luxury, and focus. |
| **Terracotta Accent** | `#E06C75` | Restrained muted red for delete and destructive actions. |
| **Display Font** | `Syne` | Bold, architectural display typeface with tight `-0.035em` letter spacing. |
| **Body Font** | `Plus Jakarta Sans` | Humanist geometric sans-serif tuned for effortless reading comfort. |
| **Telemetry & Monospace** | `Space Mono` | Monospaced numerals and uppercase kickers (`// 01`, `// EDITORIAL STUDIO`). |

---

## 🛠️ Architecture & RESTful Routes

The application follows standard RESTful architectural principles using Express 5 and `method-override`:

| HTTP Verb | Route | Action | View Rendered |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Showcase of featured & submitted stories | `views/index.ejs` |
| **GET** | `/post` | Displays the story creation studio | `views/post.ejs` (`isEditing: false`) |
| **POST** | `/post` | Creates a new article in the data store | Redirects to `/` |
| **GET** | `/edit/:id` | Pre-populates form with story data | `views/post.ejs` (`isEditing: true`) |
| **PATCH** | `/edit/:id` | Updates article fields via `?_method=PATCH` | Redirects to `/` |
| **DELETE**| `/delete/:id` | Removes article via `?_method=DELETE` | Redirects to `/` |

---

## 📂 Project Structure

```text
Blog Web App/
├── public/
│   └── styles/
│       └── main.css           # Bespoke editorial design system & Splide overrides
├── views/
│   ├── partials/
│   │   ├── header.ejs         # Google Fonts, Splide CSS CDN & minimalist nav
│   │   └── footer.ejs         # Splide JS configuration, easing physics & counter
│   ├── index.ejs              # Multi-card center-focus carousel & publication CTA
│   └── post.ejs               # Editorial creation & editing studio with comboboxes
├── .gitignore                 # Excludes node_modules, system files, and .env
├── index.js                   # Express server, middleware & RESTful route handlers
├── package.json               # Dependencies ("type": "module" enabled)
└── README.md                  # Comprehensive project documentation
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (version 18.0.0 or higher)
* [npm](https://www.npmjs.com/) (bundled with Node.js)

### 1. Clone the Repository
```bash
git clone https://github.com/Sharanzwing/Blog-Web-App.git
cd Blog-Web-App
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
node index.js
```
*(Or use `npx --yes nodemon index.js` for automatic server reloading on file changes).*

### 4. Open in Browser
Open your browser and navigate to:
```text
http://localhost:3000
```

---

## ☁️ Deployment Guide (Render)

This application is 100% production-ready for deployment on cloud platforms like **[Render](https://render.com/)**:

1. Push your repository to GitHub.
2. Sign in to **[Render.com](https://render.com/)** and click **New +** &rarr; **Web Service**.
3. Select your repository: `Sharanzwing/Blog-Web-App`.
4. Configure the deployment settings:
   * **Runtime**: `Node`
   * **Build Command**: `npm install`
   * **Start Command**: `node index.js`
   * **Instance Type**: `Free`
5. Click **Deploy Web Service**.

> **Note**: `index.js` dynamically binds to `const port = process.env.PORT || 3000;`, ensuring compatibility with cloud environments.

---

## 🔮 Future Roadmap

- [ ] **Persistent Database**: Upgrade from in-memory array to PostgreSQL / SQLite via Prisma ORM.
- [ ] **Search & Topic Filtering**: Live client-side and server-side tag filtering (`?tag=design`).
- [ ] **Rich Markdown Reader**: Markdown parsing for full multi-page story reading.
- [ ] **Public REST API**: Expose `/api/v1/posts` for headless and mobile consumption.

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
