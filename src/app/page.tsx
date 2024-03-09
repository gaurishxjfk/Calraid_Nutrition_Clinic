"use client";
import { EvervaultCard } from "@/components/OurOffers";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
    </main>
    <section>
    <EvervaultCard />
    </section>
    </>
  );
}
