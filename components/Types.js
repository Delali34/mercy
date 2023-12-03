import React from "react";
import Image from "next/image";

function Types() {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto px-10 py-10 font-mont">
        <div>
          <h1 className="text-center text-4xl font-bold">
            Types Of <br />
            Clean Energy
          </h1>
          <div className="max-w-[600px] text-center px-5 mx-auto">
            <p className="pt-5">
              Clean energy can also help reduce dependence on fossil fuel energy
              sources which are limited and have unstable prices. Clean energy
              sources can be renewable energy sources.
            </p>
          </div>
        </div>
        <div className="relative flex justify-center items-center  mt-10 flex-1">
          <Image
            className="md:h-[300px] h-[200px] w-full object-cover"
            src="/hero1 (3).jpg"
            width={1000}
            height={1000}
            alt=""
          />
          <div className="inset-0 bg-black absolute top-0 left-0 bottom-0 right-0 opacity-30"></div>
          <div className="absolute top-[50%] ">
            <h1 className="text-white md:text-xl text-sm text-center font-bold">
              Windsmill that produce electricity
            </h1>
          </div>
        </div>
        <div className="relative  mt-10 flex-1">
          <Image
            className="md:h-[600px] h-[300px] w-full object-cover"
            src="/hero1 (3).jpg"
            width={1000}
            height={1000}
            alt=""
          />
          <div className="inset-0 bg-black absolute top-0 left-0 bottom-0 right-0 opacity-30"></div>
          <div className="absolute md:top-[50%] top-[35%] ">
            <h1 className="text-white md:pl-10 pl-5 md:text-2xl text-sm  font-bold">
              Windsmill that produce electricity
            </h1>
            <div className="md:max-w-[500px] pt-5">
              <p className="text-white md:pl-10 pl-5  text-[12px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, nihil error deserunt autem quam eum. Deleniti
                laboriosam velit doloribus iusto molestias.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center  mt-10 flex-1">
          <Image
            className="md:h-[300px] h-[200px] w-full object-cover"
            src="/hero1 (3).jpg"
            width={1000}
            height={1000}
            alt=""
          />
          <div className="inset-0 bg-black absolute top-0 left-0 bottom-0 right-0 opacity-30"></div>
          <div className="absolute top-[50%] ">
            <h1 className="text-white md:text-xl text-sm text-center font-bold">
              Windsmill that produce electricity
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Types;
