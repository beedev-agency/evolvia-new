"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

import { Hero, AboutContent } from "@/components";

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
        description="With limitless imagination, consistent innovation, and flawless execution, we help
        brands tell their stories."
      />
      <AboutContent />
    </>
  );
};

export default AboutUs;
