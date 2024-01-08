"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });

  return (
    <div className="font-mont">
      <div className="bg-[#C8D0D6]">
        {" "}
        <div className="max-w-[1320px] mx-auto lg:px-10 px-5 pt-20 lg:flex justify-between items-center w-full gap-10">
          <div className="flex-1" data-aos="fade-right">
            <h1 className=" text-2xl text-center lg:text-left">About Us</h1>

            <p className="pt-5 lg:max-w-[600px] md:text-[17px] text-[15px] pb-10 lg:pb-0">
              <span className="font-bold">CleanEnergy Café</span> is an African
              clean and renewable energy awareness creation organization funded
              by the{" "}
              <span className="font-bold">
                {" "}
                Ashesi Entrepreneurship Centers.{" "}
              </span>
              We are led by our vision to encourage transition to clean and
              renewable energy through celebrating the creativity of the African
              people in transforming Africa into a brighter and cleaner
              continent. We do this through our great love for telling the
              amazing stories of how renewable energy innovations are changing
              communities throughout Africa. Join us as we bring to life
              innovations and success stories as we interact with young,
              passionate African innovators in the African community.
            </p>
          </div>

          <div className="flex-1" data-aos="fade-left">
            <Image
              className="object-cover w-full md:h-[500px] h-[300px] "
              src="/clean.jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2]">
        {" "}
        <div className="max-w-[1320px] mx-auto lg:px-10 px-5 pt-20 lg:flex justify-between  w-full gap-10">
          <div className="flex-1" data-aos="fade-up">
            <Image
              className="object-cover w-full md:h-[500px] h-[300px]"
              src="/problem.jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
          <div className="flex-1 py-12 lg:py-1" data-aos="fade-left">
            <h1 className=" text-2xl text-center font-bold text-black pb-5 lg:text-left">
              The problem
            </h1>
            <h1 className=" lg:text-[20px] text-[15px] tracking-tighter  font-mont  text-black ">
              Lack of awareness about{" "}
              <span className="text-green-500 font-bold">
                clean and renewable energy
              </span>{" "}
              options is impeding progress in African communities, particularly
              affecting{" "}
              <span className="text-green-500 font-bold">
                women in rural areas
              </span>{" "}
              who continue to use{" "}
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
      <div className="bg-[#fbfbfb]">
        {" "}
        <div className="max-w-[1320px] mx-auto lg:px-10 px-5 pt-20 lg:flex justify-between  w-full gap-10">
          <div className="flex-1 py-12 lg:py-1" data-aos="fade-right">
            <h1 className=" text-2xl text-center font-bold text-black pb-5 lg:text-left">
              Our Solution
            </h1>
            <h1 className=" lg:text-[20px] text-[15px] tracking-tighter  font-mont  text-black">
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
          <div className="flex-1" data-aos="fade-left">
            <Image
              className="object-cover w-full md:h-[500px] h-[300px]"
              src="/cover (2).jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#fbfbfb]">
        <h1
          className="text-center pt-20 lg:pb-10 pb-5 font-bold text-3xl"
          data-aos="fade-up"
        >
          Core Activities
        </h1>
        <div
          className="max-w-[1320px] mx-auto lg:px-10 px-5  lg:flex justify-between  w-full gap-10"
          data-aos="fade-up"
        >
          <div className="flex-1 py-12 lg:py-1">
            <h1 className=" text-2xl text-center font-bold text-black pb-5 lg:text-left">
              Awareness Creation
            </h1>
            <p>
              CleanEnergy Café shares local African renewable energy innovation
              stories through social media, advertising, and community
              interaction to raise awareness about clean energy options, climate
              change, and the importance of transitioning to renewable sources.
            </p>
          </div>
          <div className="flex-1">
            <Image
              className="object-cover w-full md:h-[300px] h-[200px]"
              src="/aware.jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#fbfbfb]">
        <div
          className="max-w-[1320px] mx-auto lg:px-10 px-5 pt-20 lg:flex justify-between  w-full gap-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex-1 py-12 lg:py-1">
            <h1 className=" text-2xl text-center font-bold text-black pb-5 lg:text-left">
              Partnership and collaboration
            </h1>
            <p>
              CleanEnergy Café partners the youth, innovators and businesses to
              amplify messaging, share knowledge, and collaborate on clean
              energy initiatives.
            </p>
          </div>
          <div className="flex-1">
            <Image
              className="object-cover w-full md:h-[300px] h-[200px]"
              src="/partner.jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#fbfbfb]">
        <div
          className="max-w-[1320px] mx-auto lg:px-10 px-5 pt-20 lg:flex justify-between  w-full gap-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex-1 py-12 lg:py-1">
            <h1 className=" text-2xl text-center font-bold text-black pb-5 lg:text-left">
              Public relations and media engagement
            </h1>
            <p>
              Working with social media outlets to share success stories, and
              innovations to influence public opinion positively towards clean
              energy.
            </p>
          </div>
          <div className="flex-1">
            <Image
              className="object-cover w-full md:h-[300px] h-[200px]"
              src="/meida.jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#fbfbfb] pb-10">
        <div
          className="max-w-[1320px] mx-auto lg:px-10 px-5 pt-20 lg:flex justify-between  w-full gap-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex-1 py-12 lg:py-1">
            <h1 className=" text-2xl text-center font-bold text-black pb-5 lg:text-left">
              Monitoring and evaluation
            </h1>
            <p>
              CleanEnergy Café continuously assesses the impact of awareness
              creation activities through surveys, data collection, and analysis
              to measure the effectiveness and make necessary improvements.
            </p>
          </div>
          <div className="flex-1">
            <Image
              className="object-cover w-full md:h-[300px] h-[200px]"
              src="/feedback.jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1320px] mx-auto lg:px-10 px-5 py-10">
        <h1 className="font-bold text-xl text-center ">Funding Partners</h1>
        <div className="flex items-center justify-center">
          <Image
            className="  w-[400px]  h-[400px]"
            src="/ashesi.png"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
      </div>

      <div className="bg h-[300px] flex justify-center items-center px-5">
        <h1
          className="md:text-6xl text-4xl -tracking-[3px] font-mont text-center text-white font-bold"
          data-aos="fade-up"
        >
          A Brighter Future With Clean <br /> Energy
        </h1>
      </div>
    </div>
  );
}

export default AboutUs;
