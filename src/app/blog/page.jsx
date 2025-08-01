import React from "react";
import Blog from "./comp/blog";

export const metadata = {
  title: "Blog",
  description:
    "Read my latest blog posts about development, travel, and personal experiences. Insights from a full-stack developer exploring the world and building innovative web applications.",
  keywords: [
    "Blog",
    "Blog Posts",
    "Development Blog",
    "Travel Blog",
    "Full Stack Developer Blog",
    "Web Development Blog",
    "Programming Blog",
    "Tech Blog",
    "Personal Blog",
  ],
  openGraph: {
    title: "Blog | Robert Foley - Full Stack Developer",
    description:
      "Read my latest blog posts about development, travel, and personal experiences. Insights from a full-stack developer exploring the world and building innovative web applications.",
    url: "https://robertfoley.dev/blog",
    images: [
      {
        url: "/blog.jpg",
        width: 1200,
        height: 630,
        alt: "Robert Foley Blog - Development and Travel Posts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Robert Foley - Full Stack Developer",
    description:
      "Read my latest blog posts about development, travel, and personal experiences.",
    images: ["/blog.jpg"],
  },
  alternates: {
    canonical: "https://robertfoley.dev/blog",
  },
};

const BlogPage = () => {
  return <Blog />;
};

export default BlogPage;
