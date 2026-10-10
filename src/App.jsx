
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route
            path="*"
            element={<h2>404 - Page Not Found</h2>}
          />
        </Routes>
      </main>
    </div>
  );
}
