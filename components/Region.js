// Region.js
"use client";
import { CategoryContext } from "@/context/CategoryContext";
import React, { useContext } from "react";

const Region = ({ reg }) => {
  const { region, changeRegion } = useContext(CategoryContext);

  return (
    <div
      onClick={() => changeRegion(reg.attributes.Title)}
      className={`${
        reg.attributes.Title === region ? "bg-white text-black" : "bg-blue-400"
      } p-4 rounded-lg shadow-md cursor-pointer`}
    >
      {reg.attributes.Title}
    </div>
  );
};

export default Region;
