import React, { useEffect } from "react";
import Image from "next/image";
import { FaHouseDamage } from "react-icons/fa";
import { FaSolarPanel } from "react-icons/fa";
import { MdOutlineWindPower } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

function Benefits() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  return (
    <div className="max-w-[1320px] mx-auto lg:px-10 px-5 py-10 font-mont">
      <div>
        {" "}
        <div>
          <h1
            className="text-center lg:text-4xl text-3xl font-bold"
            data-aos="fade-up"
          >
            Benefits of <br />
            Clean Energy
          </h1>
          <div
            className="max-w-[600px] text-center px-5 mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="pt-5">
              The development of clean energy is still carried out to overcome
              these obstacles
            </p>
          </div>
        </div>
        <div className="py-10 md:flex justify-between gap-20">
          <div className="flex-1" data-aos="zoom-in" data-aos-delay="200">
            <Image
              className="w-full h-full object-cover"
              src="/windmill (1).jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex-1  lg:text-left text-center  h-full">
            <div
              className="flex md:flex-row flex-col items-center lg:pt-10 pt-5 md:pt-0   gap-5"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="rounded-full p-3 bg-green-500">
                <FaHouseDamage className="text-2xl text-white " />
              </div>

              <div>
                <h1 className=" lg:text-xl text-[16px] font-bold">
                  Geothermal Energy
                </h1>
                <p className="text-sm md:text-[16px]">
                  Power plants and heat pumps utilizing Earth's heat for
                  low-emission energy.
                </p>
              </div>
            </div>
            <div
              className="flex md:flex-row flex-col items-center lg:pt-10 pt-5  gap-5"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="rounded-full p-3 bg-green-500">
                <FaSolarPanel className="text-2xl text-white " />
              </div>

              <div>
                <h1 className=" lg:text-xl text-[16px] font-bold">
                  Solar Power
                </h1>
                <p className="text-sm ">
                  Urban and rural solar panels converting sunlight into
                  electricity, reducing fossil fuel reliance.
                </p>
              </div>
            </div>
            <div
              className="flex md:flex-row flex-col items-center lg:pt-10 pt-5  gap-5"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="rounded-full p-3 bg-green-500">
                <MdOutlineWindPower className="text-2xl text-white " />
              </div>

              <div>
                <h1 className=" lg:text-xl text-[16px] font-bold">
                  Wind Energy
                </h1>
                <p className="text-sm ">
                  Wind turbines in various landscapes generating clean
                  electricity from wind.
                </p>
              </div>
            </div>
            <div
              className="flex md:flex-row flex-col items-center lg:pt-10 pt-5 gap-5"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="rounded-full p-3 bg-green-500">
                <MdElectricBolt className="text-2xl text-white " />
              </div>

              <div>
                <h1 className="lg:text-xl text-[16px] font-bold">
                  Hydroelectric Power
                </h1>
                <p className="text-sm ">
                  Modern dams and river turbines using water flow to produce
                  sustainable energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
