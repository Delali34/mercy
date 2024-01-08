import React from "react";
import Image from "next/image";
import { FaHouseDamage } from "react-icons/fa";

function Benefits() {
  return (
    <div className="max-w-[1320px] mx-auto lg:px-10 px-5 py-10 font-mont">
      <div>
        {" "}
        <div>
          <h1 className="text-center text-4xl font-bold">
            Benefits of <br />
            Clean Energy
          </h1>
          <div className="max-w-[600px] text-center px-5 mx-auto">
            <p className="pt-5">
              The development of clean energy is still carried out to overcome
              these obstacles
            </p>
          </div>
        </div>
        <div className="py-10 md:flex justify-between gap-20">
          <div className="flex-1">
            <Image
              className="w-full h-full object-cover"
              src="/windmill (1).jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex-1  lg:text-left text-center  h-full">
            <div className="flex md:flex-row flex-col items-center pt-10 md:pt-0   gap-5">
              <div className="rounded-full p-3 bg-green-500">
                <FaHouseDamage className="text-2xl text-white " />
              </div>

              <div>
                <h1 className=" text-xl font-bold">Geothermal Energy</h1>
                <p className="text-sm md:text-[16px]">
                  Power plants and heat pumps utilizing Earth's heat for
                  low-emission energy.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center pt-10  gap-5">
              <div className="rounded-full p-3 bg-green-500">
                <FaHouseDamage className="text-2xl text-white " />
              </div>

              <div>
                <h1 className=" text-xl font-bold">Solar Power</h1>
                <p className="text-sm ">
                  Urban and rural solar panels converting sunlight into
                  electricity, reducing fossil fuel reliance.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center pt-10  gap-5">
              <div className="rounded-full p-3 bg-green-500">
                <FaHouseDamage className="text-2xl text-white " />
              </div>

              <div>
                <h1 className=" text-xl font-bold">Wind Energy</h1>
                <p className="text-sm ">
                  Wind turbines in various landscapes generating clean
                  electricity from wind.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center pt-10 gap-5">
              <div className="rounded-full p-3 bg-green-500">
                <FaHouseDamage className="text-2xl text-white " />
              </div>

              <div>
                <h1 className=" text-xl font-bold">Hydroelectric Power</h1>
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
