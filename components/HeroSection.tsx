"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  title: string
}

const HeroSection: React.FC<HeroSectionProps> = ({title}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], ["0%", "35%"]);

  return (
    <section className="w-full h-[70vh] -skew-y-[5deg] -translate-y-[70px] relative bg-white overflow-y-hidden">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-screen">
        <Image
          className="object-cover w-full h-full skew-y-[5deg]"
          src={"https://suitmedia.static-assets.id/storage/files/601/6.jpg"}
          width={1920}
          height={720}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </motion.div>

      <div className="absolute z-10 text-center text-white w-full h-full flex flex-col justify-center items-center skew-y-[5deg]">
        <h1 className="text-[90px] leading-none mt-[100px]">
          {title}
        </h1>
        <h3 className="font-semibold text-lg">
          Where all our great things begin
        </h3>
      </div>
    </section>
  );
};

export default HeroSection;
