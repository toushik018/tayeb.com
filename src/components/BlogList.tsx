"use client";
import React, { useEffect, useState } from "react";
import { BlogCard } from "@/components/blog-card";
import Link from "next/link";
import { IBlog } from "@/types/blog";

const BlogList = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        setBlogs(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <ul>
        {blogs.map((blog) => (
          <li
            key={blog._id}
            className="py-1 divide-y divide-gray-200 dark:divide-gray-700"
          >
            <Link href={`/blog/${blog._id}`}>
              <BlogCard blog={blog} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogList;
