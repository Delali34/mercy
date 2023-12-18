import React from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const PostCard = ({ post }) => {
  // Safely access the first category and region
  const firstCategory =
    post.categories && post.categories.length > 0 ? post.categories[0] : null;
  const firstRegion =
    post.regions && post.regions.length > 0 ? post.regions[0] : null;

  return (
    <div className="lg:mt-20 mt-5">
      <div className="">
        <div className="relative cursor-pointer">
          <div className="overflow-hidden rounded-[10px]">
            <Link href={`/impact/${post.slug}`}>
              <img
                className="w-[500px] h-[300px] overflow-hidden object-cover rounded-[10px] hover:scale-110 transition duration-700"
                src={post.featuredImage.url}
                alt={post.title}
              />
            </Link>
          </div>

          {/* Display Category Name */}
          {firstCategory && (
            <Link href={`/category/${firstCategory.slug}`}>
              <div className="text-green-500 mt-5">
                <h2 className="lg:text-2xl">#{firstCategory.name}</h2>
              </div>
            </Link>
          )}

          {/* Display Region Name */}
          {firstRegion && (
            <Link href={`/region/${firstRegion.slug}`}>
              <div className="text-blue-500 flex items-center gap-1 mt-2">
                <FaLocationDot />
                <h2 className="lg:text-2xl">{firstRegion.name}</h2>
              </div>
            </Link>
          )}

          <Link href={`/impact/${post.slug}`}>
            <div className="text-black py-3">
              <h2 className="md:text-[19px] text-[15px] font-semibold">
                {post.title}
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
