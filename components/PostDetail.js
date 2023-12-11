import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    // Ensure modifiedText is an array
    modifiedText = Array.isArray(modifiedText) ? modifiedText : [modifiedText];

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      case "video":
        return (
          <video key={index} controls width={obj.width} height={obj.height}>
            <source src={obj.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case "link":
        return (
          <a
            key={index}
            href={obj.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
            aria-label={obj.children.map((child) => child.text).join(" ")}
          >
            {obj.children.map((child, i) => (
              <React.Fragment key={i}>{child.text}</React.Fragment>
            ))}
          </a>
        );
      case "quote":
        return (
          <blockquote
            key={index}
            className="italic border-l-4 border-gray-300 pl-4 my-4"
            aria-label={obj.children.map((child) => child.text).join(" ")}
          >
            {obj.children.map((child, i) => (
              <React.Fragment key={i}>{child.text}</React.Fragment>
            ))}
          </blockquote>
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="w-full h-full relative">
          <img
            className="w-full h-[60vh] min-h-[500px] object-cover"
            src={post.featuredImage.url}
            alt={post.title}
          />
        </div>
        <div className=" container pt-10 mx-auto px-5 ">
          <h3 className="text-green-500 underline  lg:text-4xl text-xl font-bold">
            {post.title}
          </h3>
          <div className="flex items-center gap-3 mt-5">
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              className="align-middle rounded-full w-[40px] h-[40px]"
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
                {post.content.raw.children.map((typeObj, index) => {
                  const { type, children } = typeObj;

                  const content = children
                    ? children.map((child, childIndex) =>
                        getContentFragment(childIndex, child.text, child, type)
                      )
                    : typeObj.text;

                  return (
                    <React.Fragment key={index}>
                      {getContentFragment(index, content, typeObj, type)}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
