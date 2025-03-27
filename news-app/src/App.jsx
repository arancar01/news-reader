import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <h1>App.jsx</h1>

      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
