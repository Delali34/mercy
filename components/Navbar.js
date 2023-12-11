import React from "react";
import Image from "next/image";

import Link from "next/link";

function Homepage() {
  return (
    <div>
      <div>
        <div className="max-w-7xl mx-auto  flex justify-between font-mont items-center pt-10 lg:px-0 px-5">
          <div>
            {/* <Image src="/energy.png" width={250} height={250} alt="" /> */}
            <h1 className="font-bold">CleanEnergyCafe</h1>
          </div>
          <div className="lg:flex hidden space-x-6 items-center">
            <Link href="/">
              <h1 className="hover:font-bold hover:text-green-400">Home</h1>
            </Link>
            <Link href="/AboutUs">
              <h1 className="hover:font-bold hover:text-green-400">About</h1>
            </Link>
            <Link href="/blog">
              {" "}
              <h1 className="hover:font-bold hover:text-green-400">News</h1>
            </Link>
            <Link href="/ImpactStories">
              {" "}
              <h1 className="hover:font-bold hover:text-green-400">Impact</h1>
            </Link>
          </div>
          <Link href="/Participate">
            <div className="p-2 rounded-lg bg-green-400 ">
              <h1 className="text-center text-sm">Submit a story</h1>
            </div>
          </Link>
        </div>

        <hr className="mt-5" />
      </div>
    </div>
  );
}

export default Homepage;
