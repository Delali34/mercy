import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BiLogoSnapchat,
  BiLogoInstagramAlt,
  BiLogoTiktok,
  BiLogoTwitter,
} from "react-icons/bi";
const Categories = [
  { name: "Bro code", slug: "bro-code" },
  { name: "Fashion", slug: "fashion" },
];

function BlogHead() {
  return (
    <div>
      <div className="max-w-[1800px] mx-auto px-5">
        <div className="flex items-center justify-between">
          <div className="p-2">
            <Link href="/">
              <Image
                width={40}
                height={40}
                src="/logo.webp"
                alt="the bro code with kalyjay"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-white/90 flex border-2 md:text-sm text-xs fixed z-10 md:top-12 top-5 border-black items-center gap-8 p-5 rounded-[80px] font-semibold md:h-[40px] h-[25px] px-5">
              <Link href="/blog">
                {" "}
                <h3>Home</h3>
              </Link>
              <Link href="/">
                {" "}
                <h3>About</h3>
              </Link>
              <Link href="/">
                {" "}
                <h3>Contact</h3>
              </Link>
            </div>
          </div>

          <div>
            <div className=" gap-3 lg:flex items-center hidden">
              <Link target="_blank" href="">
                <div>
                  <BiLogoSnapchat className="text-yellow-300  text-3xl cursor-pointer hover:scale-110" />
                </div>
              </Link>
              <Link target="_blank" href="">
                <div>
                  <BiLogoInstagramAlt className="text-pink-600 text-3xl cursor-pointer hover:scale-110" />
                </div>
              </Link>
              <Link target="_blank" href="">
                <div>
                  <BiLogoTiktok className="text-white text-3xl cursor-pointer hover:scale-110" />
                </div>
              </Link>
              <Link target="_blank" href="">
                <div>
                  <BiLogoTwitter className="text-blue-400 text-3xl cursor-pointer hover:scale-110" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHead;
// {
//   Categories.map((category) => (
//     <Link key={category.slug} href={`/category/${category.slug}`}>
//       <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer ">
//         {category.name}
//       </span>
//     </Link>
//   ));
// }
