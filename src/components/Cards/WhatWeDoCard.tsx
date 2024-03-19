import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const WhatWeDoCard = ({
  title,
  icon,
  para,
  img,
}: {
  title: string;
  icon: StaticImageData;
  para: string;
  img: StaticImageData;
}) => {
  return (
    <div className="text-center h-[18rem] w-[13rem] group  relative rounded-md">
      <div className="absolute bg-gradient-to-t from-[#70a319]  via-transparent to-transparent bottom-0 h-full w-[13rem] z-10 rounded-md "></div>

      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 0.001 }}
        className="rounded-md absolute bg-[#70a319] bottom-0 overflow-hidden h-full w-[13rem] z-10 hidden group-hover:flex group-hover:flex-col cursor-pointer group-hover:items-center transition-all duration-1000 transform "
      >
        <div className="bg-[#70a319] text-white h-[50%] gap-2 px-2 flex flex-col items-center justify-center my-auto">
          <div className="rounded-full p-1 bg-white">
            <Image src={icon} alt={title} height={40} width={40} />
          </div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className=" text-[14px]">{para}</p>
          <Link
            href={"/"}
            className="bg-[#f7941d] hover:bg-black px-2.5 py-1 rounded-full text-[14px]"
          >
            Read more..
          </Link>
        </div>
      </motion.div>
      <div className="relative flex justify-center h-full rounded-md">
        <Image src={img} alt={title} className="rounded-md" />
        <div className="absolute bottom-5 p-1 z-20 group-hover:hidden">
          <h1 className="text-xl font-bold text-white ">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoCard;

/*

*/
