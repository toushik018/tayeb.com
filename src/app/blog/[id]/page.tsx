import React from "react";
import { getBlogs } from "@/lib/getBlogs";
import { getBlogById } from "@/lib/getBlog";
import Balancer from "react-wrap-balancer";
import { siteMetadata } from "@/data/siteMetadata";
import NotFound from "@/app/not-found";
import { formatDate } from "@/lib/utils";
import ViewCounter from "@/components/viewCounter";
import readingTime from "reading-time";
import { IBlog } from "@/types/blog";

export async function generateStaticParams() {
  const blogs: IBlog[] = await getBlogs();
  return blogs.map((blog) => ({ id: blog._id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blog = await getBlogById(params.id);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "No blog description available",
    };
  }

  const ogImage = `${siteMetadata.siteUrl}/og?title=${blog.title}`;

  return {
    title: blog.title,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: blog.publishedAt,
      url: "./",
      authors: siteMetadata.author,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary,
      images: [ogImage],
    },
  };
}

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlogById(params.id);

  if (!blog) {
    return <NotFound />;
  }

  const readingStats = readingTime(blog.content);

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 dark:text-gray-100">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        <Balancer>{blog.title}</Balancer>
      </h1>
      <div className="mt-4 mb-8 flex items-center justify-between text-sm text-neutral-800 dark:text-gray-100">
        <p>
          {formatDate(blog.publishedAt)} - {readingStats.text} - {""}
          <ViewCounter slug={blog._id} />
        </p>
      </div>
      <div className="prose prose-lg dark:prose-dark max-w-none dark:text-gray-100">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </section>
  );
};

export default BlogDetails;
