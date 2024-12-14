'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
    return <div>{error}</div>;
  }

  if (posts.length === 0) {
    return <div>Loading latest posts...</div>;
  }

  return (
    <div>
    <h2 className="text-center text-2xl pt-10">Recent Blog Posts</h2>
    <div className="flex flex-col md:flex-row items-center md:justify-center pb-10 md:px-28 pt-10 gap-6">
      {posts.map((item, index) => {
        // Assuming the first image in the content is the featured image
        const imageUrlMatch = item.content.match(/<img src="([^"]+)"/);
        const imageUrl = imageUrlMatch ? imageUrlMatch[1] : "/blog.jpg"; // Default to empty if no image found

        // Extract title and subtitle (assuming subtitle is in the description)
        const title = item.title;
        const subtitle = item.description || "No Subtitle Provided";
        const truncatedBody =
          item.content.replace(/<[^>]+>/g, "").slice(0, 150) + "...";
        return (
          <div
            className="flex flex-col justify-between gap-2 border border-gray-500 rounded-2xl shadow-2xl h-96 w-96"
            key={index}
          >
            <Link
              href={item.link}
              className="h-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="h-1/2">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={title}
                    className="rounded-t-2xl h-full w-full"
                  />
                )}
              </div>
              <div className="h-1/2 p-8">
                <h3 className="text-xl">{title}</h3>
                <p className="text-md text-gray-500">{subtitle}</p>
                <p className="text-sm text-gray-600 mt-2">{truncatedBody}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default TopBlogs;