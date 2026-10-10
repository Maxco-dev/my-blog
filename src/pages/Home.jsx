
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">WELCOME TO MY BLOG</p>

      <h1>Ideas, Stories & Knowledge</h1>

      <p className="hero-text">
        Explore articles about React, web development,
        technology, and programming.
      </p>

      <Link className="button" to="/blog">
        Explore Blog
      </Link>
    </section>
  );
}
