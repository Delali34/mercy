import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const DemoCarousel = () => {
  return (
    <div className="max-w-[1320px] mx-auto  px-10 py-20">
      {" "}
      <Carousel
        infiniteLoop={true}
        swipeable={false}
        interval={8000}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
      >
        <div className="flex md:flex-row flex-col gap-20 items-center">
          <div className="flex-1">
            <span className="text-8xl text-green-400 font-bold">"</span>
            <p className="">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quaerat quis minima maxime veniam quo libero illum, laudantium
              itaque, autem mollitia praesentium quisquam ex sit temporibus nisi
              modi accusamus dolorum?
            </p>
            <p className="font-semibold pt-10">
              March Guehi- CEO of Crystal Palace
            </p>
          </div>
          <div className="flex-1">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/hero.jpg"
              alt="Image 1"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-20 items-center">
          <div className="flex-1">
            <span className="text-8xl text-green-400 font-bold">"</span>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quaerat quis minima maxime veniam quo libero illum, laudantium
              itaque, autem mollitia praesentium quisquam ex sit temporibus nisi
              modi accusamus dolorum?
            </p>
            <p className="font-semibold pt-10">
              March Guehi- CEO of Crystal Palace
            </p>
          </div>
          <div className="flex-1">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/hero.jpg"
              alt="Image 1"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-20 items-center">
          <div className="flex-1">
            <span className="text-8xl text-green-400 font-bold">"</span>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quaerat quis minima maxime veniam quo libero illum, laudantium
              itaque, autem mollitia praesentium quisquam ex sit temporibus nisi
              modi accusamus dolorum?
            </p>
            <p className="font-semibold pt-10">
              March Guehi- CEO of Crystal Palace
            </p>
          </div>
          <div className="flex-1">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/hero.jpg"
              alt="Image 1"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default DemoCarousel;
