
import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/post.js";

export default function BlogList() {
  return (
    <section className="page">
      <h1>All Blog Posts</h1>
      <p className="subtitle">
        Explore our latest articles and tutorials.
      </p>

      <div className="post-grid">
        {posts.map((post) => (
          <article className="post-card" key={post.id}>
            <p className="post-number">ARTICLE {post.id}</p>

            <h2>{post.title}</h2>

            <p className="author">Written by {post.author}</p>

            <Link
              className="read-more"
              to={`/blog/${post.id}`}
            >
              Read Article →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
