import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const DemoCarousel = () => {
  return (
    <div className="max-w-[1320px] mx-auto  lg:px-10 px-5 py-20">
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
              Once you got a solar panel on a roof, energy is free. Once we
              convert our entire electricity grid to green and renewable energy,
              cost of living goes down.
            </p>
            <p className="font-semibold pt-10">Elizabeth May</p>
          </div>
          <div className="flex-1">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/wind1.jpg"
              alt="Image 1"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-20 items-center">
          <div className="flex-1">
            <span className="text-8xl text-green-400 font-bold">"</span>
            <p className="">
              Just as fossil fuels from conventional sources are finite and are
              becoming depleted, those from difficult sources will also run out.
              If we put all our energy and resources into continued fossil fuel
              extraction, we will have lost an opportunity to have invested in
              renewable energy.
            </p>
            <p className="font-semibold pt-10">David Suzuki</p>
          </div>
          <div className="flex-1">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/windmill.jpg"
              alt="Image 1"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-20 items-center">
          <div className="flex-1">
            <span className="text-8xl text-green-400 font-bold">"</span>
            <p className="">
              I've been very passionate about renewable energy for many years,
              particularly solar energy and its capacity to bring abundant
              clean, sustainable energy to millions around the globe.
            </p>
            <p className="font-semibold pt-10">Richard Brandson</p>
          </div>
          <div className="flex-1">
            <Image
              width={500}
              height={500}
              className="w-full h-full object-cover"
              src="/richard.jpg"
              alt="Image 1"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default DemoCarousel;
