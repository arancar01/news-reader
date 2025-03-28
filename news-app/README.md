# ALX News App

A modern, responsive news application built with React and Tailwind CSS. It fetches live news articles from NewsAPI and displays them by category with a clean, user-friendly interface.

## Features

- Latest news by category: Technology, Economy, Sports, PC
- Featured news carousel (Swiper)
- Article detail page with full content
- Sidebar with recent news
- Search functionality
- Login and Sign up pages (with localStorage)
- Embedded video in sidebar
- Browse More button for better navigation
- Responsive design for mobile and desktop

## 🧪 Technologies Used

- React
- Tailwind CSS
- Axios
- React Router
- Swiper.js
- Formik
- Vite

## Responsive Design

The app layout is fully responsive across small (`sm`), medium (`lg`), and large (`2xl`) screens:

![Responsive Preview](public/screenshots/responsive-preview.png)

## Project Structure

news-reader/
├── public/ ---------------------------------# Static assets (images, videos, icons)
│ └── images/ -------------------------------# Images used for articles or as fallback

├── src/ ------------------------------------# Main application source code
│ ├── assets/------------------------------- # UI images (e.g. login/signup illustrations, logos)
│ ├── components/--------------------------- # Reusable UI components (Navbar, Footer, etc.)
│ ├── pages/ --------------------------------# Main route pages (News, Login, Article, etc.)
│ ├── services/----------------------------- # API logic (e.g. Axios requests)
│ ├── data/----------------------------------# Temporary/demo data (optional)
│ ├── App.jsx -------------------------------# Main layout (includes <Navbar />, <Outlet />)
│ ├── main.jsx-------------------------------# App entry point (Router, Providers, etc.)
│ └── index.css -----------------------------# Tailwind base styles

├── .env ------------------------------------# Environment variables (e.g. API keys)
├── package.json ----------------------------# Project config and dependencies
├── vite.config.js --------------------------# Vite-specific settings
├── tailwind.config.js ----------------------# Tailwind customization (colors, fonts, etc.)
└── README.md -------------------------------# Project documentation

## ⚙️ Getting Started

Create a `.env` file in the root directory and add your NewsAPI key:

VITE_NEWS_API_KEY=your_api_key_here

```bash
git clone https://github.com/arancar01/news-reader.git
cd news-reader
npm install
npm run dev

## Author

- **Name:** Errahmouni Hamza
- **GitHub:** [@arancar01](https://github.com/arancar01)
- **Email:** maradox6ken@gmail.com
```
