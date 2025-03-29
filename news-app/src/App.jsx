import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <br />
      <Navbar />

      <div className="w-full max-w-[1600px] mx-auto px-6 py-0">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
