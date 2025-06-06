"use client";
import classNames from "clsx";
import { motion } from "framer-motion";

import { NavigationItem } from "./NavigationItem";
import { useAnimation } from "@/hooks/useAnimation";

export const MobileHeader = ({ navLinks, isMenuOpen, closeHeader }: any) => {
  const { oneByOneVariations } = useAnimation();

  const hamburgerMenuClasses = classNames(
    "bg-dark fixed top-0 left-0 flex justify-start px-10 items-center z-40"
  );

  return (
    <motion.div
      initial="offscreen"
      viewport={{ amount: 0.3 }}
      className={hamburgerMenuClasses}
      animate={isMenuOpen ? "onscreen" : "offscreen"}
      variants={{
        offscreen: {
          width: 0,
          height: 0,
          top: -200,
          transition: {
            type: "spring",
            duration: 1,
            bounce: 0,
          },
        },
        onscreen: {
          top: 0,
          width: "100%",
          height: "100%",
          transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0,
          },
        },
      }}
    >
      <motion.ul
        className="flex-col text-white text-xl flex"
        variants={oneByOneVariations}
      >
        {navLinks.map((item: any, idx: number) => (
          <NavigationItem key={idx} {...item} />
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default MobileHeader;
