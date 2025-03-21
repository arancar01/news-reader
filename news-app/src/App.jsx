import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <h1>App.jsx</h1>

      <Navbar />
      <Outlet />
    </>
  );
}
