"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/images-slider";

const images = [
  {
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "abba1 jabba1 dabba1",
  },
  {
    img: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "fasdfasdf jasdfasdfabba2 dabba2",
  },
  {
    img: "https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=1688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "abbasdsgdfba jabba dabcvxbxcbba",
  },
];

const Hero = () => {
  return (
    <ImagesSlider className="h-screen" images={images} />
  );
};

export default Hero;
