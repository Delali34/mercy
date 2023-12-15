import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PostDetail = ({ post }) => {
  const renderers = {
    a: ({ children, openInNewTab, href, ...rest }) => {
      // Check if the href starts with "http://" or "https://"
      const isExternalLink =
        href.startsWith("http://") || href.startsWith("https://");

      // If it's not an external link, prepend "http://"
      const correctedHref = isExternalLink ? href : `http://${href}`;

      return (
        <a
          href={correctedHref}
          target="_blank"
          rel={openInNewTab ? "noopener noreferrer" : ""}
          style={{ color: "blue" }}
          {...rest}
        >
          {children}
        </a>
      );
    },
    // Custom renderer for videos
    video: ({ src, title }) => (
      <video controls style={{ width: "100%" }} title={title}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    p: ({ children }) => <p className="paragraph">{children}</p>,
    // ... add other custom renderers if needed
  };
  return (
    <div>
      <div className="w-full h-full relative font-mont">
        <Image
          className="w-full h-[60vh] min-h-[500px] object-cover"
          src={post.featuredImage.url}
          alt={post.title}
          width={1000}
          height={1000}
        />
      </div>
      <div className="container pt-10 mx-auto px-5 ">
        <h3 className="text-green-500 underline lg:text-4xl text-xl font-bold">
          {post.title}
        </h3>
        <div className="flex items-center gap-3 mt-5">
          <Image
            src={post.author.photo.url}
            alt={post.author.name}
            className="align-middle rounded-full"
            width={40}
            height={40}
          />
          <p className="text-green-500 font-semibold text-sm">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1320px] lg:px-10 px-5 text-black lg:pt-20 pt-10">
          <div className="flex flex-col lg:flex-row justify-between lg:gap-0 gap-5">
            <div className="w-full lg:text-xl text-sm">
              <RichText content={post.content.raw} renderers={renderers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
