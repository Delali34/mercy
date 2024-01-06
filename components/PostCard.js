import React from "react";
import moment from "moment";
import Link from "next/link";
import { getCategories } from "@/services";

const PostCard = ({ post }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <div className="lg:mt-20 mt-5">
      <div className="">
        <div className="relative  cursor-pointer ">
          <div className="overflow-hidden rounded-[10px]">
            {" "}
            <Link href={`/impact/${post.slug}`}>
              <img
                className="w-[500px] h-[300px] overflow-hidden object-cover rounded-[10px] hover:scale-110 transition duration-700 "
                src={post.featuredImage.url}
                alt="the bro code blog"
              />
            </Link>
          </div>

          {/* <div className="gradient-overlay3"></div> */}
          <Link href="/">
            <div className="text-green-500 mt-5">
              <h2 className="lg:text-2xl">
                #{post.categories[0]?.name || "Category"}
              </h2>
            </div>
          </Link>
          <Link href={`/impact/${post.slug}`}>
            <div className=" py-3 ">
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
