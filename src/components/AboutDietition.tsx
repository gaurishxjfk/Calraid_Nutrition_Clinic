import Image from "next/image";
import React from "react";
import Dietition from "../../public/dietition.jpg";
import Link from "next/link";

const AboutDietition = () => {
  return (
    <section className="bg-[#ececec] w-full p-4 py-8 md:py-12">
      <div className="text-center ">
        <h3 className="text-2xl md:text-4xl font-bold text-[#f3911b]">
          Hello! We Are Calraid Nutrition Clinic
        </h3>

        <p className=" mt-2 text-[#333333] text-[14px] md:w-[80%] lg:w-[80%] mx-auto">
          Calraid Nutrition Clinic is the brain child of dietitian Luana
          Mascarenhas, a qualified dietitian who decided to take a step further
          to educate the community we live in on the importance of Nutrition &
          Health in today’s day and age.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row md:w-[80%] gap-12 justify-center mx-auto my-6 items-center">
        <div className="w-full lg:w-[40%] rounded-full flex justify-center">
          <Image src={Dietition} alt="Dietition" className="rounded" />
        </div>
        <div className="w-full lg:w-[60%] text-center lg:text-left">
          <h1 className="text-[#90c438] font-bold text-2xl mb-1">
            Luana Mascarenhas
          </h1>
          <h3 className="text-[#333333] font-bold mb-2">
            Founder, dietitian (Clinical and Sports Specialist)
          </h3>
          <p className="text-[#333333] mb-6 text-[14px]">
            Luana Mascarenhas, a young, passionate and dynamic nutritionist from
            the small town of Goa and the Founder of Calraid Nutrition Clinic.
            Through Calraid, Luanaaims to help individuals achieve their optimal
            health and achieve long-term goals in a healthy and maintainable
            way.<br/><br/> Luana holds a Master’s degree in Foods, Nutrition and Dietetics
            where she skillfully attained knowledge on medical and sports
            related nutrition intervention and management.
          </p>
          <Link
            href={"/"}
            className="bg-[#f7941d] hover:bg-black px-4 py-3 rounded-full text-[14px] mt-4 text-white "
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutDietition;
