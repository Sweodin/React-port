import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blog.module.css";
import { BlogPost } from "../../../types";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.cardImageContainer}>
        <img src={post.image} alt={post.title} className={styles.cardImage} />
        <span className={styles.category}>{post.category}</span>
      </div>

      <div className={styles.cardContent}>
        <span className={styles.date}>{post.date}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>

        <Link to={`/blog/${post.id}`} className={styles.readMoreButton}>
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className={styles.cardGlow}></div>
    </div>
  );
};

export default BlogCard;
