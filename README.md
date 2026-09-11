# BlogHub — Modern Blog Web Application

A clean, responsive editorial blog web application built with **Node.js**, **Express.js**, and **EJS (Embedded JavaScript Templates)**. Features an interactive article showcase carousel, glassmorphic UI styling, and a dynamic post creation studio.

---

## Features

- **Interactive Article Carousel**: A smooth, swipeable showcase that displays published blog posts as cards with tags, titles, summaries, author avatars, and publication dates.
- **Dedicated Post Creation Studio (`/post`)**: A clean form page allowing creators to publish articles with custom tags/categories, headings, excerpts, and author names.
- **Automated Metadata Handling**: Automatically formats author initials for avatars and timestamps publication dates upon posting.
- **Modern Responsive Design**: Built with pure CSS3 using semantic CSS custom properties, glassmorphic card surfaces, responsive typography, and mobile-friendly breakpoints.
- **Modular Architecture**: Uses EJS partials (`header.ejs` and `footer.ejs`) for clean layout separation and maintainability.
- **ES Modules (ESM)**: Modern JavaScript syntax (`import`/`export`) enabled via `"type": "module"`.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Runtime** | [Node.js](https://nodejs.org/) (ES Modules) |
| **Server Framework** | [Express.js](https://expressjs.com/) (v5) |
| **Templating Engine**| [EJS](https://ejs.co/) (Embedded JavaScript) |
| **Styling** | Vanilla CSS3 (Custom Variables, Flexbox, Glassmorphism) |
| **Typography** | Google Fonts (*Plus Jakarta Sans* & *Inter*) |
| **Version Control** | Git & GitHub |

---

## Project Directory Structure

```text
Blog Web App/
├── public/
│   └── styles/
│       └── main.css           # Global stylesheet & design tokens
├── views/
│   ├── partials/
│   │   ├── header.ejs         # Reusable HTML head & navigation header
│   │   └── footer.ejs         # Reusable footer & carousel controller script
│   ├── index.ejs              # Home view with article carousel & action dock
│   └── post.ejs               # Post creation form view
├── .gitignore                 # Excludes node_modules and system files
├── index.js                   # Express server entry point and route handlers
├── package.json               # Project dependencies and metadata
└── README.md                  # Project documentation
```

---

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone or Open the Project
```bash
git clone https://github.com/<your-username>/blog-web-app.git
cd "Blog Web App"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
node index.js
```
*(Or use `npx nodemon index.js` for automatic server reloads during development).*

### 4. View in Browser
Open your browser and navigate to:
```text
http://localhost:3000
```

---

## Application Routes

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Renders the home page with the article carousel and bottom action buttons. |
| `GET` | `/post` | Renders the article creation form. |
| `POST` | `/post` | Processes submitted post data and updates the carousel display. |

---

## How It Works

1. **Browsing Posts**: On the home page (`/`), users can navigate through published articles using the `‹` and `›` carousel buttons or the pagination indicator dots.
2. **Creating a Post**: Clicking the **Post** button at the bottom of the home page opens `/post`.
3. **Submitting Data**: The form submits data (`slideTag`, `slideHeading`, `slideExcerpt`, `authorName`) to `POST /post`, which processes the input and dynamically renders the new article slide in the carousel.

---

## Future Enhancements & Practice Roadmap

- [ ] **Data Persistence**: Store posts in an array or database (MongoDB, SQLite, or PostgreSQL) so articles persist across server restarts.
- [ ] **Update Functionality**: Connect the **Update** button to allow editing existing articles.
- [ ] **Delete Functionality**: Connect the **Delete** button to remove articles from the carousel.
- [ ] **Dynamic Carousel Indicators**: Automatically generate pagination dots matching the total count of published articles.

---

## License

This project is open source and available under the [ISC License](LICENSE).
