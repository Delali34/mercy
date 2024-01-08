import React from "react";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { motion } from "framer-motion";

const Hero2 = () => {
  const bgAnimate = {
    hidden: {
      clipPath: "polygon(21% 27%, 77% 26%, 77% 77%, 21% 77%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 1,
      },
    },
  };
  const textAnimate1 = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        staggerChildren: 0.4,
        delayChildren: 1,
      },
    },
  };
  const textAnimate2 = {
    hidden: {
      x: 0,
    },
    show: (i) => ({
      x: i,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    }),
  };
  const imageAnimate = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.6,
        delay: 3.6,
        ease: "easeInOut",
      },
    },
  };
  const ImageAnimateChild = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const textParagrapgh = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 1.8,
      },
    },
  };

  return (
    <div className="px-10 bg-black overflow-hidden max-h-screen lg:min-h-[870px] xl:min-h-[1200px] min-h-[800px]">
      <motion.div
        className="absolute inset-0  max-h-screen lg:min-h-[870px] xl:min-h-[1200px] min-h-[800px] "
        variants={bgAnimate}
        initial="hidden"
        animate="show"
      >
        <Image
          src="/cover (1).jpg"
          alt=""
          fill
          priority={true}
          className="object-cover brightness-50 "
        />
      </motion.div>
      <div className=" flex absolute top-[50%]  flex-col max-h-screen lg:min-h-[870px] xl:min-h-[1200px] min-h-[800px]">
        <motion.div
          className=""
          variants={textAnimate1}
          initial="hidden"
          animate="show"
        >
          {" "}
          <motion.h1
            className="md:text-8xl text-5xl xl:text-[150px]  text-[#eaeaea] tracking-tighter   font-bold font-mont"
            variants={textAnimate2}
          >
            Clean Energy
          </motion.h1>
        </motion.div>
        <motion.div
          className=" "
          variants={textAnimate1}
          initial="hidden"
          animate="show"
        >
          {" "}
          <motion.h1
            className="md:text-8xl xl:text-[150px] text-5xl  text-yellow-200 tracking-tighter  font-bold"
            variants={textAnimate2}
          >
            EXPERIENCE
          </motion.h1>
          <motion.p
            variants={textParagrapgh}
            initial="hidden"
            animate="show"
            className="md:max-w-[400px] max-w-[300px] pt-3    text-justify md:text-sm text-xs text-white pl-1"
          >
            We are led by our vision to encourage transition to clean and
            renewable energy through celebrating the creativity of the African
            people in transforming Africa into a brighter and cleaner continent.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero2;
