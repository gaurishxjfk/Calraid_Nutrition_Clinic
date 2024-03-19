"use client";
import { useEffect, useState } from "react";
import HeroSlider, { nextSlide, slideVariants } from "../ui/HeroSlider";
import { ImagesSlider } from "../ui/images-slider";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const images = [
  {
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Customized Nutrition Plans",
    para: "Nutrition Counseling is a personal experience which needs to be tailor made to the lifestyle, food choices, health status and activity of an individual.",
  },
  {
    img: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Sports Nutrition Plans",
    para: "Nutrition Counseling is a personal experience which needs to be tailor made to the lifestyle, food choices, health status and activity of an individual.",
  },
  {
    img: "https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=1688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Nutrition Consultation to Academies & School ",
    para: "Nutrition Counseling is a personal experience which needs to be tailor made to the lifestyle, food choices, health status and activity of an individual.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(
        setCurrentIndex,
        images.map((i) => i.text)
      );
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="flex mt-[5rem] pt-4 flex-col items-center justify-center md:flex-row">
      <div className="absolute md:relative md:w-1/2 z-30 w-full px-4 md:ml-12 md:mr-4 md:flex md:flex-col md:gap-4">
        <AnimatePresence>
          <motion.h1
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="text-white md:text-[#7d9f3d]  text-3xl md:text-6xl text-center font-bold md:text-left capitalize "
          >
            {images[currentIndex].text}
          </motion.h1>
          <motion.p
            initial="initial"
            animate="visible"
            exit={
              {x: "200%"}
            }
            className="text-white md:text-[#5c5c5c] text-[14px] md:text-lg text-center md:text-left capitalize"
          >
            {images[currentIndex].para}
          </motion.p>
          <Link href={"/"} className="bg-[#7d9f3d] text-white text-center  py-2 rounded-full  max-w-32">Read More</Link>

        </AnimatePresence>
      </div>
      <div className="w-full md:w-1/2 overflow-hidden relative">
        <div className="absolute bg-black w-full z-20 h-full bg-opacity-40 backdrop-blur-sm md:hidden"></div>
        <HeroSlider images={images.map((i) => i.img)} />
      </div>
    </section>
  );
};

export default Hero;
