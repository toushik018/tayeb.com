"use client";
import React, { useEffect, useState } from "react";
import { BlogCard } from "@/components/blog-card";
import { getBlogs } from "@/lib/getBlogs";
import Link from "next/link";
import { IBlog } from "@/types/blog";

const Blog = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs = await getBlogs();
      const sortedBlogs = fetchedBlogs.sort((a, b) => {
        if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
          return -1;
        }
        return 1;
      });
      setBlogs(sortedBlogs);
      setLoading(false);
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

export default Blog;
