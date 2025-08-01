"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, BookOpen, Calendar, ExternalLink } from "lucide-react";
import Script from "next/script";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frobertfoley.substack.com%2Ffeed`;

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        const response = await fetch(feedUrl);
        const data = await response.json();

        // Get up to three items from the feed
        const latestItems = data.items || [];

        setPosts(latestItems);
      } catch (error) {
        setError("Failed to load the latest posts.");
        console.error("Error fetching the RSS feed:", error);
      }
    }

    fetchLatestPosts();
  }, [feedUrl]);

  const filteredPosts = posts.filter((post) => {
    const content = post.content.replace(/<[^>]+>/g, ""); // Remove HTML tags from content
    const matchContent = content
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchTitle = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchDescription = post.description
      ? post.description.toLowerCase().includes(searchQuery.toLowerCase())
      : false;

    return matchContent || matchTitle || matchDescription; // Match on title, content, or description
  });

  // Structured data for blog posts
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Robert Foley's Blog",
    description:
      "Thoughts, experiences, and insights from my journey as a developer and traveler",
    url: "https://robertfoley.dev/blog",
    author: {
      "@type": "Person",
      name: "Robert Foley",
      url: "https://robertfoley.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Robert Foley",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description:
        post.description || post.content.replace(/<[^>]+>/g, "").slice(0, 200),
      url: post.link,
      datePublished: post.pubDate,
      dateModified: post.pubDate,
      author: {
        "@type": "Person",
        name: "Robert Foley",
      },
      publisher: {
        "@type": "Person",
        name: "Robert Foley",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": post.link,
      },
    })),
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 flex items-center justify-center">
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body text-center">
            <h2 className="card-title justify-center text-error">Error</h2>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 flex items-center justify-center">
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body text-center">
            <span className="loading loading-dots loading-lg text-primary"></span>
            <p className="mt-4">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
        {/* Hero Section */}
        <div className="hero min-h-[40vh] bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <div className="flex justify-center mb-6">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-24">
                    <span className="text-3xl">
                      <BookOpen className="w-12 h-12" />
                    </span>
                  </div>
                </div>
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Blog Posts
              </h1>
              <p className="py-6 text-lg opacity-80">
                Thoughts, experiences, and insights from my journey as a
                developer and traveler
              </p>
              <div className="flex justify-center gap-4">
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-figure text-primary">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div className="stat-title">Total Posts</div>
                    <div className="stat-value text-primary">
                      {posts.length}
                    </div>
                  </div>
                </div>
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="stat-title">Latest</div>
                    <div className="stat-value text-secondary">
                      {posts.length > 0
                        ? new Date(posts[0].pubDate).toLocaleDateString()
                        : "N/A"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Search className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Search Posts</h2>
                </div>
                <div className="form-control w-full max-w-xs">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search keywords..."
                    className="input input-bordered w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              {searchQuery
                ? `Search Results (${filteredPosts.length})`
                : "All Posts"}
            </h2>
            {searchQuery && (
              <p className="text-lg opacity-70 max-w-2xl mx-auto">
                Showing posts matching "{searchQuery}"
              </p>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="card bg-base-100 shadow-xl border border-base-300 max-w-md mx-auto">
                <div className="card-body text-center">
                  <BookOpen className="w-16 h-16 text-base-content/30 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">No posts found</h3>
                  <p className="text-base-content/70">
                    Try adjusting your search terms or browse all posts
                  </p>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((item, index) => {
                // Assuming the first image in the content is the featured image
                const imageUrlMatch = item.content.match(/<img src="([^"]+)"/);
                const imageUrl = imageUrlMatch ? imageUrlMatch[1] : "/blog.jpg";

                // Extract title and subtitle (assuming subtitle is in the description)
                const title = item.title;
                const subtitle = item.description || "No Subtitle Provided";
                const truncatedBody =
                  item.content.replace(/<[^>]+>/g, "").slice(0, 150) + "...";
                const pubDate = new Date(item.pubDate).toLocaleDateString();

                return (
                  <article
                    className="group flex flex-col w-full justify-between gap-2 border border-base-300 hover:border-primary rounded-2xl shadow-md hover:shadow-xl h-[500px] bg-gradient-to-br from-neutral to-base-100 hover:scale-105 transition-all duration-300"
                    key={index}
                  >
                    <Link
                      href={item.link}
                      className="h-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="h-1/2 relative overflow-hidden rounded-t-2xl">
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt={title}
                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                          <div className="btn btn-primary btn-sm">
                            <ExternalLink className="w-4 h-4" />
                            Read
                          </div>
                        </div>
                      </div>
                      <div className="h-1/2 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-center mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {title}
                          </h3>
                          <p className="text-sm text-base-content/70 leading-relaxed line-clamp-4">
                            {truncatedBody}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-base-300">
                          <div className="flex items-center gap-2 text-sm text-base-content/60">
                            <Calendar className="w-4 h-4" />
                            {pubDate}
                          </div>
                          <div className="badge badge-primary badge-outline">
                            Blog Post
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
