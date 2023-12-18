import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getRegions } from "@/queries"; // Make sure you have a getRegions function

function Regions() {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    getRegions().then((newRegions) => setRegions(newRegions));
  }, []);

  return (
    <div className="mt-32">
      <div className="bg-white w-full h-[2px]"></div>
      <div className="max-w-[1800px] px-10 "></div>
      <div className="lg:px-20 flex flex-wrap items-center gap-3">
        {regions.map((region) => (
          <Link href={`/region/${region.slug}`} key={region.slug}>
            <div className="">
              <h4 className="text-white transition duration-200 hover:scale-105 text-xl my-6 border-2 text-center border-white py-2 px-3 rounded-[30px]">
                #{region.name}
              </h4>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-white w-full h-[2px]"></div>
    </div>
  );
}

export default Regions;
