"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CalraidLogo from "../../../public/logo.png";
import Link from "next/link";
import HambergerMenu from "./HambergerMenu";
import { cn } from "@/lib/utils";

const menusItems = [
  "Home",
  "About Us",
  "Services",
  "Plans",
  "Blogs",
  "Contact Us",
];

const Navbar = ({ styles }: { styles?: string }) => {
  const [open, setOpen] = useState(false);


  return (
    <nav
      className={cn(
        "fixed py-3 px-[1em] md:px-[4em] lg:px-[8em] flex justify-between items-center bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 top-0 z-50 w-full"
      )}
    >
      <Image src={CalraidLogo} alt="logo" className="w-20" />
      <div className="relative">
        <HambergerMenu open={open} setOpen={setOpen} />
        <div
          className={`justify-between gap-4 md:gap-6 lg:gap-8
                  text-white md:text-[#7d9f3d] sm:text-xl flex-col md:flex-row  bg-primary md:bg-transparent
                    absolute right-0 md:relative transition-all duration-700
                    bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 
                    rounded-lg px-5 py-3 ${
                      open
                        ? "flex top-8 md:top-0 min-w-[20em] z-20 "
                        : "hidden md:flex"
                    }
                  `}
        >
          {menusItems.map((i) => (
            <Link className={`text-md`} href={"/"} key={i}>
              {i}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
