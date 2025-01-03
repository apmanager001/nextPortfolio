"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Blog = () => {
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
    return (
      <div className="flex justify-center h-96 w-full">
        <span className="loading loading-dots loading-lg text-accent"></span>
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-center py-10 md:p-28 gap-6">
      {posts.map((item, index) => {
        // Assuming the first image in the content is the featured image
        const imageUrlMatch = item.content.match(/<img src="([^"]+)"/);
        const imageUrl = imageUrlMatch ? imageUrlMatch[1] : "/blog.jpg"; // Default to empty if no image found

        // Extract title and subtitle (assuming subtitle is in the description)
        const title = item.title;
        const subtitle = item.description || "No Subtitle Provided";
        const truncatedBody =
          item.content.replace(/<[^>]+>/g, "").slice(0, 150) + "...";
        const pubDate = new Date(item.pubDate).toLocaleDateString();
        return (
          <div
            className="flex justify-between gap-2 border border-gray-500 hover:border-gray-300 rounded-2xl hover:shadow-2xl h-[500px] w-72"
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
                <div className="h-1/2 p-8 flex flex-col justify-around">
                  <h3 className="text-xl text-center">{title}</h3>
                  {/* <p className="text-md text-gray-500">{subtitle}</p> */}
                  <p className="text-sm text-gray-600 mt-2">{truncatedBody}</p>
                  <p className="text-right text-sm text-gray-700">{pubDate}</p>
                </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
