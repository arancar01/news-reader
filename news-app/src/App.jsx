import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <h1>this is App.jsx</h1>

      <Navbar />
      <Outlet />
    </>
  );
}
