"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

import { useAnimation } from "@/hooks/useAnimation";
import { Hero } from "@/components";

export const CoursesHero = () => {
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
    [itemVariations]
  );
  return (
    <Hero
      titleContent={titleContent}
      description="Explore our comprehensive range of programming courses designed to help you master digital skills and advance your career in technology. From beginner-friendly introductions to advanced specializations, we provide expert-led training that combines theoretical knowledge with practical experience."
    />
  );
};
