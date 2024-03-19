"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import Left from "../../public/element_bg_1.png";
import Right from "../../public/element_bg_2.png";
import Image from "next/image";
import OurOfferCard from "./Cards/OurOfferCard";

const OffersComponent = () => {
  return (
    <section className="container mb-6">
      <Image src={Left} alt="left" className="absolute -z-50 -left-[2rem] mt-32 lg:mt-16" />
      <Image src={Right} alt="Right" className="absolute -z-50 right-0 mt-52 lg:mt-20" />

      <div className="text-center md:px-24 lg:px-40 my-8 md:my-12">
        <h3 className="text-2xl md:text-4xl font-bold text-[#8cc554]">
          What We Offer
        </h3>
        <p className="text-sm md:text-[1rem] mt-2 text-gray-700">
          Calraid hosts several services related to health and nutrition.
          Associations are not limited to individuals but available to groups as
          well for a wider outreach and awareness regarding health &amp;
          nutrition
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center relative">
        <div className="w-[80%] rounded-3xl absolute bg-[#1D440E] h-[15rem] bottom-0 -z-0 hidden lg:block"></div>
        <OurOfferCard />
        <OurOfferCard />
        <OurOfferCard />
      </div>
    </section>
  );
};

export default OffersComponent;
