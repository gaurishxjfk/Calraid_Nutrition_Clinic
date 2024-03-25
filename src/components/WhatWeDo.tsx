"use client";
import React, { useEffect, useState } from "react";
import plan_1 from "../../public/plan_1.jpg";
import plan_2 from "../../public/plan_2.jpg";
import plan_3 from "../../public/plan_3.jpg";
import plan_4 from "../../public/plan_4.jpg";
import plan_5 from "../../public/plan_5.jpg";
import plan_6 from "../../public/plan_6.jpg";
import plan_7 from "../../public/plan_8.jpg";
import icon_1 from "../../public/holistic_nutrition_icon.png";
import icon_2 from "../../public/medical_care_icon.png";
import icon_3 from "../../public/sports_nutrition_icon.png";
import icon_4 from "../../public/nutrition_for_kids_icon.png";
import icon_5 from "../../public/general_fitness_icon.png";
import icon_6 from "../../public/lets_discuss_icon.png";
import icon_7 from "../../public/pick_a_plan_icon.png";
import WhatWeDoCard from "./Cards/WhatWeDoCard";

const plansArr = [
  {
    id: 1,
    title: "General Fitness",
    img: plan_1,
    icon: icon_1,
    para: "Nutrition is important for fitness enthusiasts leading an active lifestyle..",
  },
  {
    id: 2,
    title: "Medical Care",
    img: plan_2,
    icon: icon_2,
    para: "Eating right does not mean eating less. Weight loss and healthy weight management...",
  },
  {
    id: 3,
    title: "Weight Management",
    img: plan_3,
    icon: icon_3,
    para: "Eating right does not mean eating less. Weight loss and healthy weight management...",
  },
  {
    id: 4,
    title: "Holistic Nutrition",
    img: plan_4,
    icon: icon_4,
    para: "Eating right does not mean eating less. Weight loss and healthy weight management...",
  },
  {
    id: 5,
    title: "Sports Nutrition",
    img: plan_5,
    icon: icon_5,
    para: "Eating right does not mean eating less. Weight loss and healthy weight management...",
  },
  {
    id: 6,
    title: "Nutrition for Kids",
    img: plan_6,
    icon: icon_6,
    para: "Eating right does not mean eating less. Weight loss and healthy weight management...",
  },
  {
    id: 7,
    title: "Pregnancy Nutrition",
    img: plan_7,
    icon: icon_7,
    para: "Eating right does not mean eating less. Weight loss and healthy weight management...",
  },
];

const WhatWeDo = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(0);

  const nextSlide = () => {
    if (startIndex + cardsToShow < plansArr.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 576px)").matches) {
        setCardsToShow(1);
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setCardsToShow(2);
      } else if (window.matchMedia("(max-width: 992px)").matches) {
        setCardsToShow(3);
      } else if (window.matchMedia("(max-width: 1200px)").matches) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full mb-12 p-4 py-8 md:py-12 text-center">
      <div className="text-center md:px-24 lg:px-40  ">
        <h3 className="text-2xl md:text-4xl font-bold text-[#8cc554]">
          What We Do
        </h3>
        <p className=" mt-2 text-[14px] md:w-[85%] mx-auto">
          Nutrition Counseling is a personal experience which needs to be tailor
          made to the lifestyle, food choices, health status and activity of an
          individual. The supremacy of the Calraid experience lies within the
          quality of service provided and the excellent connect developed
          personally with every client. We at Calraid believe in “Changing Lives
          one-pantry-at-a-time!”
        </p>
      </div>
      <div className="flex gap-4 justify-center px-4 mt-6">
        {plansArr.length > 0 &&
          plansArr.slice(startIndex, startIndex + cardsToShow).map((i) => (
            <div key={i!.id}>
              <WhatWeDoCard
                title={i!.title}
                icon={i!.icon}
                img={i!.img}
                para={i!.para}
              />
            </div>
          ))}
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

export default WhatWeDo;
