import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Imapact() {
  const images = ["/hero1 (1).jpg", "/hero1 (2).jpg", "/hero1 (3).jpg"]; // Add more image paths as needed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="bg-black relative">
      <div className="max-w-[1320px] mx-auto lg:px-10 px-5 pb-20  flex lg:flex-row flex-col justify-between items-center gap-10">
        <div className="flex-1">
          <div className="">
            <Image
              className="aspect-[16/9]"
              src={images[currentImageIndex]}
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-white text-2xl font-mont font-bold">
            Read Our Publications on the Impact in the society
          </h1>
          <p className="text-white text-sm md:text-[18px] font-mont py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium architecto accusamus, culpa provident soluta minima cum
            repellendus omnis consequatur
          </p>
          <Link href="/ImpactStories">
            <h1 className="border-2 border-white mb-5 p-3 text-white text-center hover:text-black hover:bg-white hover:border-black duration-150">
              Read Here
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Imapact;
