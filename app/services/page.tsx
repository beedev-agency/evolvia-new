"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

import { Hero, Services, ContactHome } from "@/components";

import { useAnimation } from "@/hooks/useAnimation";

const AboutUs = () => {
  const { itemVariations } = useAnimation();

  const titleContent = useMemo(
    () => (
      <>
        <motion.span variants={itemVariations}>Building the future</motion.span>
        <motion.span variants={itemVariations}>of brands by</motion.span>
        <motion.span variants={itemVariations}>
          illuminating digital
        </motion.span>
        <motion.span variants={itemVariations}>possibilities.</motion.span>
      </>
    ),
    []
  );

  return (
    <>
      <Hero
          
          titleContent={titleContent}
          description="Choose BeeDev as your trusted development partner, and let us create enchanting experiences that leave a lasting impact on your audience. Join us on this digital journey as we push the boundaries of what's possible and transform your ideas into extraordinary realities."
        />
        <div className="h-[200px] w-full bg-dark my-[-10px]" />
        <Services />
        <div className="hidden md:block h-[100px] md:h-[200px] w-full bg-dark my-[-10px]" />
        <ContactHome />
    </>
  );
};

export default AboutUs;
