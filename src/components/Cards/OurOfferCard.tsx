import Image from "next/image";
import React from "react";
import Offer1 from "../../../public/offer_1.png";
import Offer3 from "../../../public/offer_3.png";
import { CardTopElement } from "../IconsSVG";

const OurOfferCard = () => {
  return (
    <div className="bg-[#e6e6e6] rounded-3xl w-[16rem]  text-center  z-10 mb-8 shadow-[#d8d8d8] shadow-inner relative">
      <div className="absolute -top-[38px] inset-x-0 flex items-center justify-center ">
        <CardTopElement />
        <Image
          src={Offer1}
          alt="offer 1"
          className="mx-auto absolute w-16 h-16"
        />
      </div>

      <div className="bg-white rounded-3xl py-8 px-8 m-4 mt-16 ">
        <h4 className="font-bold mb-2 text-[18px] text-[#1D440E]">
          Nutrion Consultation
        </h4>
        <div className="flex flex-col gap-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <p key={i}>Consult to corporate</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurOfferCard;
