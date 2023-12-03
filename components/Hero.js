import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative">
      <Image
        className="w-full object-cover h-screen"
        src="/hero.jpg"
        width={1000}
        height={1000}
        alt=""
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
      <div className="max-w-7xl mx-auto absolute top-[20%] left-0 right-0 bottom-0 font-mont text-white text-center">
        <div>
          <h1 className="text-white font-bold md:text-[50px] text-[30px] text-center">
            Your <br />{" "}
            <span className="md:text-[100px] text-[50px]">CLEAN ENERGY</span>{" "}
            <br />{" "}
            <span className="font-normal md:text-[35px] text-[18px]">
              Sustainabilty Public Policy Team{" "}
            </span>
          </h1>
        </div>
        <div className="flex justify-center ">
          <p className="text-xl mt-10 rounded-[60px]  p-3 animate-bounce bg-white/40">
            scroll down
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
