// Import React and necessary hooks
"use client";
import React, { useState, useEffect } from "react";

// Import your query functions
import { getPosts } from "@/queries/index";

// Import any components you're using

import PostCard from "./PostCard";

export default function Home() {
  // State for posts, categories, regions, and themes
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data.slice(0, 3)); // Only keep the first 5 posts
    }

    fetchData();
  }, []);

  return (
    <div className="bg-black h-[100%] pb-10 w-full">
      <div>
        <div className="max-w-[1320px] mx-auto lg:px-10 px-5 mb-8 ">
          <div>
            <h1 className="lg:text-4xl text-2xl mb-5 lg:font-bold font-medium text-white">
              Featured Stories
            </h1>
          </div>

          {/* Rest of the component */}
          <div className="">
            <div className="mt-5">
              <div className="grid grid-cols-1  md:grid-cols-2 2lg:grid-cols-3 gap-10">
                {posts.map((post, index) => (
                  <div key={index} className="flex  text-white">
                    <PostCard post={post.node} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
