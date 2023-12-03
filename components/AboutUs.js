import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="font-mont">
      <div className="bg-[#C8D0D6]">
        {" "}
        <div className="max-w-[1320px] mx-auto px-10 pt-20 lg:flex justify-between items-center w-full gap-10">
          <div className="flex-1">
            <h1 className=" text-2xl text-center lg:text-left">About Us</h1>
            <h1 className="pt-10 md:text-6xl text-4xl font-mont font-bold text-green-500 text-center lg:text-left">
              The Future <br />{" "}
              <span className="text-black"> Of Sustainable</span> <br /> Energy
            </h1>
            <p className="pt-5 lg:max-w-[600px] text-[14px] text-center lg:text-left pb-10 lg:pb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ipsam temporibus esse qui minima excepturi iusto, nostrum
            </p>
          </div>

          <div className="flex-1">
            <Image
              className="object-cover w-full md:h-[500px] h-[300px] "
              src="/hero1 (3).jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2]">
        {" "}
        <div className="max-w-[1320px] mx-auto px-10 pt-20 lg:flex justify-between  w-full gap-10">
          <div className="flex-1">
            <Image
              className="object-cover w-full md:h-[500px] h-[300px]"
              src="/hero1 (3).jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
          <div className="flex-1 py-12 lg:py-1">
            <h1 className=" text-2xl text-center font-bold text-black pb-5 lg:text-left">
              The problem
            </h1>
            <h1 className=" text-[20px] tracking-tighter  font-mont  text-black text-justify">
              Lack of awareness about{" "}
              <span className="text-green-500 font-bold">
                clean and renewable energy
              </span>{" "}
              options is impeding progress in African communities, particularly
              affecting{" "}
              <span className="text-green-500 font-bold">
                women in rural areas
              </span>{" "}
              women in rural areas who continue to use{" "}
              <span className="text-green-500 font-bold">
                firewood for cooking,
              </span>{" "}
              leading to severe health consequences. The World Health
              Organization reports an annual death toll of{" "}
              <span className="text-green-500 font-bold">3.2 million,</span>{" "}
              primarily among women and children. Affordability is a factor, but
              the main challenge is the insufficient{" "}
              <span className="text-green-500 font-bold">
                knowledge and understanding of available alternative methods.
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#C8D0D6]">
        {" "}
        <div className="max-w-[1320px] mx-auto px-10 pt-20 lg:flex justify-between  w-full gap-10">
          <div className="flex-1 py-12 lg:py-1">
            <h1 className=" text-2xl text-center font-bold text-black pb-5 lg:text-left">
              Our Solution
            </h1>
            <h1 className=" text-[20px] tracking-tighter  font-mont  text-black text-justify">
              <span className="text-green-500 font-bold">CleanEnergy Café</span>{" "}
              aims to initiate{" "}
              <span className="text-green-500 font-bold">
                informal conversations
              </span>{" "}
              within the African community. The goal is to{" "}
              <span className="text-green-500 font-bold">raise awareness</span>{" "}
              about different solutions available for resolving daily challenges
              while emphasizing the personal significance of{" "}
              <span className="text-green-500 font-bold">
                clean and renewable energy adoption.
              </span>{" "}
              By sparking these casual discussions, the initiative endeavors to
              engage everyone in becoming part of the solution, aligning with
              the objectives outlined in{" "}
              <span className="text-green-500 font-bold">
                Sustainable Development Goal 7.
              </span>
            </h1>
          </div>
          <div className="flex-1">
            <Image
              className="object-cover w-full md:h-[500px] h-[300px]"
              src="/hero1 (3).jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg h-[300px] flex justify-center items-center px-5">
        <h1 className="md:text-6xl text-4xl -tracking-[3px] font-mont text-center text-white font-bold">
          A Brighter Future With Clean <br /> Energy
        </h1>
      </div>
    </div>
  );
}

export default AboutUs;
