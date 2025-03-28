import React, { useState } from "react";
import styles from "./Blog.module.css";
import sharedStyles from "../../shared-styling/SharedStyles.module.css";
import animStyles from "../../shared-styling/SonicAnimations.module.css";
import BlogCard from "./BlogCard";
import { useBlogPosts } from "../../../hooks/useBlog";

const Blog: React.FC = () => {
  const { posts, loading, error } = useBlogPosts();
  const [visibleCount, setVisibleCount] = useState(3);

  // Get visible blog posts based on count
  const visiblePosts = posts.slice(0, visibleCount);

  // Handle load more
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  if (loading) {
    return (
      <section id="blog" className={sharedStyles.sectionBackground}>
        <div className={styles.blogContainer}>
          <h2>My Blog Posts</h2>
          <div className={styles.loading}>Loading blog posts...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className={sharedStyles.sectionBackground}>
        <div className={styles.blogContainer}>
          <h2>My Blog Posts</h2>
          <div className={styles.error}>Failed to load blog posts</div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className={sharedStyles.sectionBackground}>
      {/* Sonic Rings Decoration */}
      <div className={`${animStyles.ring} ${animStyles.ring1}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring2}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring3}`}></div>

      {/* Emerald */}
      <div className={`${animStyles.emerald} ${styles.leftEmerald}`}></div>

      <div className={styles.blogContainer}>
        <h2>My Blog Posts</h2>
        <div className={styles.blogGrid}>
          {visiblePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {visiblePosts.length < posts.length && (
          <div className={styles.viewAllContainer}>
            <button className={styles.viewAllButton} onClick={handleLoadMore}>
              Load More Posts
              <span className={styles.buttonRing}></span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
