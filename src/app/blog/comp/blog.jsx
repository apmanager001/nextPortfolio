"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("")

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
    <div className="flex flex-col items-center gap-0 pb-10 md:mx-72">
      <div className="flex flex-col items-center w-full my-10">
        <div>
          <h1 className="font-bold text-2xl">Blog Posts</h1>
        </div>
        <div className="mt-10 w-full flex justify-center md:justify-end">
          <input
            type="text"
            name="search"
            placeholder="Search Keywords..."
            className="input input-bordered w-full max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-6 flex-wrap">
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
            <div
              className="flex justify-between gap-2 border border-gray-500 hover:border-gray-300 rounded-2xl shadow-md hover:shadow-2xl h-[500px] w-72"
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
    </div>
  );
};

export default Blog;
