import React from "react";
import Image from "next/image";
import { FaHouseDamage } from "react-icons/fa";

function Benefits() {
  return (
    <div className="max-w-[1320px] mx-auto px-10 py-10 font-mont">
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
              src="/hero.jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex-1  h-full">
            <div className="flex items-center pt-10 md:pt-0   gap-5">
              <div className="rounded-full p-3 bg-green-500">
                <FaHouseDamage className="text-2xl text-white " />
              </div>

              <div>
                <h1 className=" text-xl font-bold">
                  Reducing Greenhouse Gas Emission
                </h1>
                <p className="text-sm md:text-[16px]">
                  The use of clean energy sources can help reduce greenhouse gas
                  emission which are the main climate change
                </p>
              </div>
            </div>
            <div className="flex items-center pt-10  gap-5">
              <div className="rounded-full p-3 bg-green-500">
                <FaHouseDamage className="text-2xl text-white " />
              </div>

              <div>
                <h1 className=" text-xl font-bold">
                  Reducing Greenhouse Gas Emission
                </h1>
                <p className="text-sm ">
                  The use of clean energy sources can help reduce greenhouse gas
                  emission which are the main climate change
                </p>
              </div>
            </div>
            <div className="flex items-center pt-10  gap-5">
              <div className="rounded-full p-3 bg-green-500">
                <FaHouseDamage className="text-2xl text-white " />
              </div>

              <div>
                <h1 className=" text-xl font-bold">
                  Reducing Greenhouse Gas Emission
                </h1>
                <p className="text-sm ">
                  The use of clean energy sources can help reduce greenhouse gas
                  emission which are the main climate change
                </p>
              </div>
            </div>
            <div className="flex items-center pt-10 gap-5">
              <div className="rounded-full p-3 bg-green-500">
                <FaHouseDamage className="text-2xl text-white " />
              </div>

              <div>
                <h1 className=" text-xl font-bold">
                  Reducing Greenhouse Gas Emission
                </h1>
                <p className="text-sm ">
                  The use of clean energy sources can help reduce greenhouse gas
                  emission which are the main climate change
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
