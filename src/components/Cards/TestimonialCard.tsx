import React from "react";
import { motion } from "framer-motion";
import { QuoteIcon, TriangleDownIcon } from "../IconsSVG";

interface TestimonialCardProps {
  name: string;
  para: string;
  designation: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  para,
  designation,
}) => {
  return (
    <motion.div
      initial={{ y: "10", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100px", opacity: 0 }}
      transition={{ duration: 0.5, }}
    >
      <div className="relative border-white border-2 rounded-xl ">
        <span className="absolute -top-[3.3rem] left-[1.4rem]">
          <QuoteIcon width={"70px"} height={"70px"} />
        </span>
        <span className="absolute  -bottom-[2.4rem] left-[2.8rem]">
          <TriangleDownIcon width={"50px"} height={"50px"} />
        </span>
        <p className="m-6 text-white">{para}</p>
      </div>
      <div className="flex flex-col ml-[1rem] mt-6 text-white text-left">
        <span className="text-lg md:text-xl">{name}</span>
        <b>{designation}</b>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
