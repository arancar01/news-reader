import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchProvider from "./context/SearchProvider";

import News from "./pages/News.jsx";
import Technology from "./pages/Technology.jsx";
import Economy from "./pages/Economy.jsx";
import Sports from "./pages/Sports.jsx";
import Pc from "./pages/Pc.jsx";
import Login from "./pages/Login.jsx";
import Signin from "./pages/Signin.jsx";
import Article from "./pages/Article.jsx";


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <News /> },
      { path: "technology", element: <Technology /> },
      { path: "economy", element: <Economy /> },
      { path: "sports", element: <Sports /> },
      { path: "pc", element: <Pc /> },
      { path: "login", element: <Login /> },
      { path: "signin", element: <Signin /> },
      
      {path: "article/:id",
        element: <Article />,
        errorElement: (
          <p className="text-center text-red-500 mt-4">Article not found.</p>
        ),
      },
        
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <SearchProvider>
      <RouterProvider router={router} />
      </SearchProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
