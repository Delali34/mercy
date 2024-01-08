// components/Footer.js
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#124f28] font-maintext text-white p-8">
      <div className="container mx-auto flex justify-center">
        {/* First Column */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-center">
            CleanEnergyCafe
          </h3>
          <p className="text-center">
            Making a Difference, One Act of Cleanness at a Time.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsFacebook />
            </a>
            <a
              href="#"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsInstagram />
            </a>
            <a
              href="#"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsLinkedin />
            </a>
          </div>
          <div>
            <h1 className="text-center pt-5">Greater Accra Region, Ghana</h1>
          </div>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="mt-8 text-center">
        © 2023 CleanEnergyCafe. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
