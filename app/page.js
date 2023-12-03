"use client";
import React from "react";
import Hero2 from "../components/Hero2";
import Header from "../components/Header";
import Types from "@/components/Types";
import Benefits from "@/components/Benefits";
import Quotes from "@/components/Quotes";

import Imapact from "@/components/Imapact";

const Home = () => {
  return (
    <div>
      <Hero2 />
      <Header />
      <Imapact />
      <Types />
      <Benefits />
      <Quotes />
    </div>
  );
};

export default Home;
