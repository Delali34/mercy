// Import React and necessary hooks
"use client";
import React, { useState, useEffect } from "react";

// Import your query functions
import {
  getPosts,
  getCategories,
  getRegions,
  getThemes,
} from "@/queries/index";

// Import any components you're using
import Blogbanner from "@/components/Impact/Blogbanner";
import PostCard from "@/components/Impact/PostCard";

export default function Home() {
  // State for posts, categories, regions, and themes
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [regions, setRegions] = useState([]);
  const [themes, setThemes] = useState([]);

  // State for selected category, region, and theme
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedTheme, setSelectedTheme] = useState("all");

  // Fetch categories, regions, and themes on component mount
  useEffect(() => {
    getCategories().then((fetchedCategories) => {
      setCategories(fetchedCategories);
    });

    getRegions().then((fetchedRegions) => {
      setRegions(fetchedRegions);
    });

    getThemes().then((fetchedThemes) => {
      setThemes(fetchedThemes);
    });
  }, []);

  // Fetch posts whenever selectedCategory, selectedRegion, or selectedTheme changes
  useEffect(() => {
    async function fetchData() {
      const categorySlug = selectedCategory !== "all" ? selectedCategory : null;
      const regionSlug = selectedRegion !== "all" ? selectedRegion : null;
      const themeSlug = selectedTheme !== "all" ? selectedTheme : null;

      try {
        const fetchedPosts = await getPosts(
          categorySlug,
          regionSlug,
          themeSlug
        );
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, [selectedCategory, selectedRegion, selectedTheme]);

  return (
    <div className="bg4 h-[100%] pb-10 w-full">
      <div>
        {posts[0] && <Blogbanner post={posts[0].node} />}

        <div className="max-w-[1800px] mx-auto lg:px-20 px-5 mb-8 mt-10">
          <div>
            <h1 className="lg:text-4xl text-2xl mb-5 lg:font-bold font-medium text-black">
              Impact Assessment
            </h1>
          </div>

          {/* Dropdowns for Category, Region, and Theme */}
          <div className="flex md:flex-row flex-col items-center gap-4">
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="form-select"
            >
              <option value="all">All Themes</option>
              {themes.map((theme) => (
                <option key={theme.slug} value={theme.slug}>
                  {theme.name}
                </option>
              ))}
            </select>
            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-select"
            >
              <option value="all">All Technologies</option>
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
              <option value="all">Greater Accra</option>
              {regions.map((region) => (
                <option key={region.slug} value={region.slug}>
                  {region.name}
                </option>
              ))}
            </select>

            {/* Theme Dropdown */}
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
                <p>
                  No posts found for the selected category, region, or theme.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
