import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Blog.module.css";
import sharedStyles from "../../shared-styling/SharedStyles.module.css";
import animStyles from "../../shared-styling/SonicAnimations.module.css";
import { useBlogPost } from "../../../hooks/useBlog";

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { post, loading, error } = useBlogPost(id);

  if (loading) {
    return (
      <section className={sharedStyles.sectionBackground}>
        <div className={styles.blogPostContainer}>
          <div className={styles.loading}>Loading...</div>
        </div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section className={sharedStyles.sectionBackground}>
        <div className={styles.blogPostContainer}>
          <div className={styles.notFound}>
            <h2>Post Not Found</h2>
            <p>Sorry, the blog post you're looking for doesn't exist.</p>
            <Link to="/" className={styles.backButton}>
              Return Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`${sharedStyles.sectionBackground} ${styles.blogPostSection}`}
    >
      {/* Sonic Rings Decoration */}
      <div className={`${animStyles.ring} ${animStyles.ring1}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring4}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring6}`}></div>

      <div className={styles.blogPostContainer}>
        <div className={styles.postHeader}>
          <span className={styles.category}>{post.category}</span>
          <h1>{post.title}</h1>
          <span className={styles.date}>{post.date}</span>
        </div>

        <div className={styles.featuredImage}>
          <img src={post.image} alt={post.title} />
        </div>

        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className={styles.postFooter}>
          <Link to="/" className={styles.backButton}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
