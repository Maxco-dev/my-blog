
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import posts from "../data/post.js";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((item) => item.id === id);

  if (!post) {
    return (
      <section className="page">
        <h2>Post Not Found</h2>
        <button className="button" onClick={() => navigate("/blog")}>
          Back to Blog
        </button>
      </section>
    );
  }

  return (
    <article className="page article-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <p className="eyebrow">BLOG ARTICLE</p>
      <h1>{post.title}</h1>
      <p className="author">Written by {post.author}</p>

      <div className="article-content">
        <p>{post.body}</p>
      </div>

      <button className="button" onClick={() => navigate("/blog")}>
        All Blog Posts
      </button>
    </article>
  );
}
