import { useState, useEffect } from "react";
import { BlogPost } from "../types";
import { blogData } from "../data/blogData";

// Hook for fetching all blog posts
export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, you would fetch from an API
    // For now, we'll simulate this with a timeout
    const fetchPosts = async () => {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        setPosts(blogData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blog posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

// Hook for fetching a single blog post by ID
export const useBlogPost = (id: string | undefined) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No post ID provided");
      setLoading(false);
      return;
    }

    // In a real app, you would fetch from an API
    const fetchPost = async () => {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        const foundPost = blogData.find((post) => post.id === id);

        if (foundPost) {
          setPost(foundPost);
        } else {
          setError("Post not found");
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blog post");
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return { post, loading, error };
};
