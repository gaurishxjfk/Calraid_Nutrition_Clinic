"use client";
import React, { useState } from "react";
import TestimonialCard from "./Cards/TestimonialCard";
import { AnimatePresence } from "framer-motion";

const testimonialArr = [
  {
    id: 1,
    para: "Exceptional service! The team went above and beyond to meet our requirements. Their professionalism and attention to detail were outstanding.",
    name: "Alice Thompson",
    designation: "VP of Operations",
  },
  {
    id: 2,
    para: "Working with this company has been a game-changer for us. Their innovative solutions and dedication to client satisfaction have truly impressed me.",
    name: "David Rodriguez",
    designation: "Chief Technology Officer",
  },
  {
    id: 3,
    para: "I've had the pleasure of collaborating with this team on multiple projects. Their expertise and commitment to delivering results are second to none.",
    name: "Sarah Lee",
    designation: "Director of Marketing",
  },
  {
    id: 4,
    para: "I highly recommend this company to anyone seeking reliable and efficient services. They consistently exceed expectations and deliver exceptional results.",
    name: "Michael Johnson",
    designation: "CEO",
  },
  {
    id: 5,
    para: "The professionalism and expertise demonstrated by this team are truly commendable. Working with them has been a delight from start to finish.",
    name: "Rachel Adams",
    designation: "Project Manager",
  },
  {
    id: 6,
    para: "I am extremely impressed with the quality of service provided by this company. Their expertise and commitment to excellence are truly remarkable. I would not hesitate to recommend them to anyone seeking top-notch solutions.",
    name: "Emily Johnson",
    designation: "Marketing Director, ABC Corporation",
  },
];

const cardsToShow = 1;
const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex + cardsToShow < testimonialArr.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <section className="bg-cover bg-center bg-testimonials-image  w-full  p-4 py-8 md:py-12 text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-white  ">
        Calraid{"'"}s Hall Of Fame
      </h1>

      <div className="flex gap-4 justify-center px-4 mt-8">
        <AnimatePresence>
          {testimonialArr
            .slice(startIndex, startIndex + cardsToShow)
            .map((i) => (
              <TestimonialCard
                key={i.id}
                para={i.para}
                designation={i.designation}
                name={i.name}
              />
            ))}
        </AnimatePresence>
      </div>
      <button
        className="bg-[#f7941d] hover:bg-black rounded-full h-10 w-10 font-mono font-bold text-[28px] text-white m-2"
        onClick={prevSlide}
      >
        {"<"}
      </button>
      <button
        className="bg-[#f7941d] hover:bg-black rounded-full h-10 w-10 font-mono font-bold text-[28px] text-white m-2"
        onClick={nextSlide}
      >
        {">"}
      </button>
    </section>
  );
};

export default Testimonial;
