"use client";
import React from "react";
import { getPostDetails } from "@/queries";
import PostDetail from "@/components/Impact/PostDetail";
import Author from "@/components/Impact/Author";
import Comments from "@/components/Impact/Comments";
import CommentsForm from "@/components/Impact/CommentsForm";

const Page = ({ params }) => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostDetails(params.slug);
        setPost(postData);
      } catch (error) {
        console.error("Failed to fetch post details:", error);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (!post) {
    return (
      <div className="bg-white flex justify-center items-center h-screen">
        loading
      </div>
    );
  }

  return (
    <div className="bg-white h-[100%]">
      <PostDetail post={post} />
      <Author author={post.author} />
      {/* <CommentsForm slug={post.slug} />
      <Comments slug={post.slug} /> */}
    </div>
  );
};

export default Page;
