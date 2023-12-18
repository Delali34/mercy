"use client";
import React, { useState, useEffect } from "react";
import { getPosts, getCategories, getRegions } from "@/queries/index";
import Blogbanner from "@/components/Impact/Blogbanner";
import PostCard from "@/components/Impact/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  useEffect(() => {
    // Fetch categories and regions
    getCategories().then((fetchedCategories) => {
      setCategories(fetchedCategories);
    });

    getRegions().then((fetchedRegions) => {
      setRegions(fetchedRegions);
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      const categorySlug = selectedCategory !== "all" ? selectedCategory : null;
      const regionSlug = selectedRegion !== "all" ? selectedRegion : null;

      console.log(
        "Fetching posts with category:",
        categorySlug,
        "and region:",
        regionSlug
      );

      try {
        const fetchedPosts = await getPosts(categorySlug, regionSlug);
        console.log("Fetched Posts:", fetchedPosts);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, [selectedCategory, selectedRegion]);

  return (
    <div className="bg4 h-[100%] pb-10 w-full">
      <div>
        {posts[0] && <Blogbanner post={posts[0].node} />}

        <div className="max-w-[1800px] mx-auto lg:px-20 px-5 mb-8 mt-10">
          <div>
            <h1 className="lg:text-4xl text-2xl mb-5 lg:font-bold font-medium text-black">
              Our Impact Stories
            </h1>
          </div>
          {/* Dropdowns for Category and Region */}
          <div className="flex items-center gap-4">
            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-select"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Region Dropdown */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="form-select"
            >
              <option value="all">All Regions</option>
              {regions.map((region) => (
                <option key={region.slug} value={region.slug}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>

          {/* Rest of the component */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 2lg:grid-cols-3 gap-10">
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <div key={index} className="flex ">
                    <PostCard post={post.node} />
                  </div>
                ))
              ) : (
                <p>No posts found for the selected category or region.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
