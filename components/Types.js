import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function Types() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  return (
    <div>
      <div className="max-w-[1320px] mx-auto lg:px-10 px-5 py-10 font-mont">
        <div>
          <h1 className="text-center text-4xl font-bold" data-aos="fade-up">
            Types Of <br />
            Clean Energy
          </h1>
          <div
            className="max-w-[600px] text-center px-5 mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="pt-5">
              Clean energy can also help reduce dependence on fossil fuel energy
              sources which are limited and have unstable prices. Clean energy
              sources can be renewable energy sources.
            </p>
          </div>
        </div>
        <div
          className="relative flex justify-center items-center  mt-10 flex-1"
          data-aos="zoom-in-up"
        >
          <Image
            className="md:h-[300px] h-[200px] w-full object-cover"
            src="/wind1.jpg"
            width={1000}
            height={1000}
            alt=""
          />
          <div className="inset-0 bg-black absolute top-0 left-0 bottom-0 right-0 opacity-50"></div>
          <div className="absolute top-[50%] ">
            <h1 className="text-white md:text-2xl text-sm text-center font-bold">
              Solar Power
            </h1>
          </div>
        </div>
        <div
          className="relative  mt-10 flex-1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image
            className="md:h-[600px] h-[300px] w-full object-cover"
            src="/windmill.jpg"
            width={1000}
            height={1000}
            alt=""
          />
          <div className="inset-0 bg-black absolute top-0 left-0 bottom-0 right-0 opacity-50"></div>
          <div className="absolute md:top-[50%] top-[35%] ">
            <h1 className="text-white md:pl-10 pl-5 md:text-2xl text-sm  font-bold">
              Geothermal Energy
            </h1>
            <div className="md:max-w-[500px] pt-5">
              <p className="text-white md:pl-10 pl-5  lg:text-[16px] text-[13px] ">
                Power plants and heat pumps utilizing Earth's heat for
                low-emission energy.
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative flex justify-center items-center  mt-10 flex-1"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Image
            className="md:h-[300px] h-[200px] w-full object-cover"
            src="/hero1 (3).jpg"
            width={1000}
            height={1000}
            alt=""
          />
          <div className="inset-0 bg-black absolute top-0 left-0 bottom-0 right-0 opacity-30"></div>
          <div className="absolute top-[50%] ">
            <h1 className="text-white md:text-2xl text-[16px] text-center font-bold">
              Wind Energy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Types;
