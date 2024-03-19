import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import Step_1 from "../../public/get_in_touch_icon.png";
import Step_2 from "../../public/lets_discuss_icon.png";
import Step_3 from "../../public/pick_a_plan_icon.png";
import Step_4 from "../../public/time_for_action_icon.png";
import Step_5 from "../../public/voice_your_story_icon.png";
import Image, { StaticImageData } from "next/image";
import { IconDownArrowLeft, IconDownArrowRight } from "./IconsSVG";
import { cn } from "@/lib/utils";

const setpsArr = [
  {
    id: 1,
    title: "Step 1",
    icon: Step_1,
  },
  {
    id: 2,
    title: "Step 2",
    icon: Step_2,
  },
  {
    id: 3,
    title: "Step 3",
    icon: Step_3,
  },
  {
    id: 4,
    title: "Step 4",
    icon: Step_4,
  },
  {
    id: 5,
    title: "Step 5",
    icon: Step_5,
  },
];

interface Step {
  title: string;
  icon: StaticImageData;
  id: number;
}

interface ArrowStep {
  id: string;
}

type StepOrArrow = Step | ArrowStep;

const stepsAndArrows: StepOrArrow[] = setpsArr
  .map((step, index) =>
    index === setpsArr.length - 1 ? step : [step, { id: `arrow-${index}` }]
  )
  .flat();

const HowItWorks = () => {
  return (
    <section className="bg-cover bg-center bg-backfeoung-image  w-full  p-4 py-8 md:py-12">
      <div className="text-center md:px-24 lg:px-40  ">
        <h3 className="text-2xl md:text-4xl font-bold text-[#8cc554]">
          How It Works
        </h3>
        <p className=" mt-2 text-white text-[14px] md:w-[70%] lg:w-[50%] mx-auto">
          <span className="font-bold text-[18px]">
            Freedom, Flexibility and Choice
          </span>
          <br />
          Calraid has a customer–first approach and hassle free sign-up process
          where we value your needs and provide the best service in an efficient
          manner.
        </p>
      </div>
      <div className="flex gap-8 flex-col md:hidden items-center justify-center mt-[6rem] ml-8">
        {setpsArr.map((i) => (
          <StepComponentCol
            key={i.id}
            title={i.title}
            icon={i.icon}
            id={i.id}
          />
        ))}
      </div>
      <div className="hidden gap-8 md:flex items-center justify-center mt-[6rem]">
        <AnimatePresence>
          {stepsAndArrows.map((stepOrArrow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: index * 0.15, ease: "easeIn" }}
              exit={{ opacity: 0}}
            >
              {"title" in stepOrArrow ? (
                <StepComponentRow
                  title={stepOrArrow.title}
                  icon={stepOrArrow.icon}
                  id={stepOrArrow.id}
                />
              ) : (
                <div className="-rotate-45 -mt-[4rem]">
                  <IconDownArrowLeft
                    height="40px"
                    width="40px"
                    fill="#ffffff"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const StepComponentCol = ({
  title,
  icon,
  id,
}: {
  title: string;
  icon: StaticImageData;
  id: number;
}) => {
  return (
    <div
      className={cn(
        "text-center -mt-[5rem] relative",
        id % 2 === 0 ? "ml-[10rem]" : "mr-[14rem]"
      )}
    >
      <Image src={icon} alt={title} />
      <p className="text-white mt-1">{title}</p>
      <div
        className={cn(
          "absolute bottom-0 top-[4rem]",
          id % 2 === 0
            ? "-left-[5rem] rotate-[105deg] "
            : "-right-[5rem] -rotate-[40deg]  mt-4"
        )}
      >
        {setpsArr.length === id ? (
          <></>
        ) : id % 2 === 0 ? (
          <IconDownArrowLeft height="40px" width="40px" fill="#ffffff" />
        ) : (
          <IconDownArrowLeft height="40px" width="40px" fill="#ffffff" />
        )}
      </div>
    </div>
  );
};

const StepComponentRow: React.FC<Step> = ({ title, icon, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("text-center -mt-[5rem] relative")}
    >
      <Image src={icon} alt={title} />
      <p className="text-white mt-1">{title}</p>
    </motion.div>
  );
};

export default HowItWorks;
