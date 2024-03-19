"use client";
import AboutDietition from "@/components/AboutDietition";
import HowItWorks from "@/components/HowItWorks";
import OffersComponent from "@/components/OurOffers";
import WhatWeDo from "@/components/WhatWeDo";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between ">
        <Hero />
      </main>
      <section>
        <OffersComponent />
        <HowItWorks />
        <WhatWeDo />
        <AboutDietition />
      </section>
    </>
  );
}
