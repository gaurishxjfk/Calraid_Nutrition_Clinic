import React from "react";

const achievementsArr = [
  { id: 1, title: "Healthier Lives", value: "700" },
  { id: 2, title: "Assisted Sports Medals", value: "150" },
  { id: 3, title: "Health Seminars & Events", value: "50" },
  { id: 4, title: "Empty calories raided", value: "100000" },
];

const OurAchivements = () => {
  return (
    <section className="bg-cover bg-center bg-backfeoung-image  w-full  p-4 py-8 md:py-12">
      <div className="text-center md:px-24 lg:px-40 md:mb-4 ">
        <h3 className="text-2xl md:text-4xl font-bold text-[#f7941d]">
          Our Achievements
        </h3>
        <p className=" mt-2 text-white text-[14px] md:w-[70%] lg:w-[50%] mx-auto">
          Celebrate CALRAID{"'"}S success milestones
        </p>
      </div>
      <div className="flex gap-8 md:gap-16 justify-center flex-wrap px-4">
        {achievementsArr.map((i) => (
          <div key={i.id} className="text-center text-white py-4">
            <h1 className="text-3xl md:text-6xl font-bold my-2">{i.value}</h1>
            <div className="border border-b-2 border-[#f7941d] my-2 w-12 mx-auto"></div>
            <p className="my-2 text-sm">{i.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAchivements;
