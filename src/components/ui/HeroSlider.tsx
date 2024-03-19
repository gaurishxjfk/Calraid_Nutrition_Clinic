"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
export const slideVariants = {
  initial: {
    x: "-100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: .5,
      ease: [0.645, 0.045, 0.355, 1.0],
    },
  },
};

export const nextSlide = (
  setFunc: React.Dispatch<React.SetStateAction<number>>,
  arr: string[]
) => {
  setFunc((prevState) => (prevState + 1 === arr.length ? 0 : prevState + 1));
};
const HeroSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(setCurrentIndex, images);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(currentIndex);
  return (
    <div>
      <AnimatePresence>
        {
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="image h-full w-full  object-cover object-center rounded"
          />
        }
      </AnimatePresence>
    </div>
  );
};

export default HeroSlider;
