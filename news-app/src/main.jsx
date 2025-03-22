import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import News from "./pages/News.jsx";
import Technology from "./pages/Technology.jsx";
import Economy from "./pages/Economy.jsx";
import Sports from "./pages/Sports.jsx";
import Pc from "./pages/Pc.jsx";
import Login from "./pages/Login.jsx";
import Signin from "./pages/Signin.jsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
