"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Calendar, ExternalLink } from "lucide-react";

const TopBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frobertfoley.substack.com%2Ffeed`;

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        const response = await fetch(feedUrl);
        const data = await response.json();

        // Get up to three items from the feed
        const latestItems = (data.items || []).slice(0, 3);

        setPosts(latestItems);
      } catch (error) {
        setError("Failed to load the latest posts.");
        console.error("Error fetching the RSS feed:", error);
      }
    }

    fetchLatestPosts();
  }, [feedUrl]);

  if (error) {
    return (
      <div className="flex justify-center items-center py-16">
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
      <div className="flex justify-center items-center py-16">
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body text-center">
            <span className="loading loading-dots loading-lg text-primary"></span>
            <p className="mt-4">Loading recent posts...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          Recent Blog Posts
        </h2>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          Latest thoughts and experiences from my journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((item, index) => {
          // Assuming the first image in the content is the featured image
          const imageUrlMatch = item.content.match(/<img src="([^"]+)"/);
          const imageUrl = imageUrlMatch ? imageUrlMatch[1] : "/blog.jpg"; // Default to empty if no image found

          // Extract title and subtitle (assuming subtitle is in the description)
          const title = item.title;
          const subtitle = item.description || "No Subtitle Provided";
          const truncatedBody =
            item.content.replace(/<[^>]+>/g, "").slice(0, 125) + "...";
          const pubDate = new Date(item.pubDate).toLocaleDateString();

          return (
            <div
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
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link href="/blog" className="btn btn-primary btn-lg">
          <BookOpen className="w-5 h-5 mr-2" />
          View All Posts
        </Link>
      </div>
    </div>
  );
};

export default TopBlogs;
