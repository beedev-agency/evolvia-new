"use client"

import { useMemo } from "react";
import { motion } from "framer-motion";

import { useAnimation } from "@/hooks/useAnimation";
import { Hero, AboutUs, ContactHome } from "@/components";

export default function Home() {
  const { itemVariations } = useAnimation();

  const titleContent = useMemo(
    () => (
      <>
        <motion.span variants={itemVariations}>Choose </motion.span>
        <motion.span variants={itemVariations}>Your</motion.span>
        <motion.span variants={itemVariations}>Growth</motion.span>
      </>
    ),
    []
  );
  return (
    <>
      <Hero
        description="We are a dynamic development agency buzzing with creativity, transforming your digital dreams into reality."
        titleContent={titleContent}
      />
      {/* <Projects projects={projects} isHome /> */}
      <AboutUs />
      <ContactHome />
    </>
  );
}
