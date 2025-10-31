import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";
import Result from "./pages/Result";
import About from "./pages/About"; // ✅ Added About page
import Navbar from "./components/Navbar";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar /> {/* ✅ Navbar stays above all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Home />} /> {/* ✅ Redirects same as Home */}
        <Route path="/details/:id" element={<Details />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} /> {/* ✅ New About route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
