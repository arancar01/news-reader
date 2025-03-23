# News Reader App

**News Reader** is a modern and responsive news website built with **React + Vite**. It allows users to browse categorized news, view full articles, and log in locally using `localStorage`.

## Features

- Browse news by category (News, Economy, Sports, Technology, PC)
- View detailed news articles via dynamic routes
- Local login system using `localStorage`
- Form handling using Formik
- Fully responsive design with Tailwind CSS
- Navigation using React Router
- Reusable components like `Newscard` and `Article`
- Dynamic routing using URL parameters
- Project structure organized for scalability
- React Query is installed and ready to integrate for data fetching (optional)

## Technologies Used

| Technology       | Version                  |
| ---------------- | ------------------------ |
| React            | v18.2.0                  |
| Vite             | v6.2.0                   |
| Tailwind CSS     | v3.4.17                  |
| React Router DOM | v6.30.0                  |
| Formik           | v2.4.2                   |
| React Icons      | v5.5.0                   |
| React Query      | v3.x                     |
| localStorage     | for user session storage |

## Project Structure

```
news-reader/
├── public/
│   └── images/               # News images used in articles
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Newscard.jsx
│   ├── pages/
│   │   ├── News.jsx
│   │   ├── Technology.jsx
│   │   ├── Economy.jsx
│   │   ├── Sports.jsx
│   │   ├── Pc.jsx
│   │   ├── Login.jsx
│   │   ├── Signin.jsx
│   │   └── Article.jsx
│   ├── data/
│   │   └── data.json         # Static news articles
│   ├── App.jsx
│   └── main.jsx
├── index.css
├── index.html
├── README.md
└── package.json
```

## Completed Tasks

- Created individual pages for each news category
- Implemented local login and signup functionality with `localStorage`
- Designed all pages using Tailwind CSS with responsive layout
- Set up form handling using Formik
- Created reusable components (`Newscard`, `Navbar`, `Article`)
- Enabled navigation from article cards to full article pages
- Implemented routing with React Router
- Prepared structure for API integration with React Query

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Author

- **Name:** Errahmouni Hamza
- **GitHub:** [@arancar01](https://github.com/arancar01)
- **Email:** maradox6ken@gmail.com
