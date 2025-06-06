"use client"

import Link from "next/link";
import { FiLoader } from "react-icons/fi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { Chyron } from "./Chyron";
import { RoundedButton } from "@/components/common/RoundedButton";

import { useAnimation } from "@/hooks/useAnimation";

export const ContactHome = () => {
  const { leftVariants, rightVariants } = useAnimation();

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 md:py-44 bg-dark overflow-hidden my-[-10px]"
    >
      <motion.div
        variants={leftVariants}
        className="container flex justify-center"
      >
        <Link
          href="/contact-us"
          className="text-primary text-3xl md:text-6xl 2xl:text-9xl flex items-center gap-10"
        >
          <HiOutlineArrowRight />
          Have a project in mind?
        </Link>
      </motion.div>
      <Chyron
        content={
          <li
            className="text-primary whitespace-nowrap text-3xl md:text-5xl flex gap-5"
            style={{ fontFamily: "__Raleway_42566f", letterSpacing: "1px" }}
          >
            <span className="flex items-center gap-5">
              <FiLoader className="hover:animate-spin w-[40px]" />
              <a href="mailto:hi@beedev.dev">hi@beedev.dev</a>
            </span>
            <span className="flex items-center gap-5">
              <FiLoader className="hover:animate-spin w-[40px]" />
              <a href="mailto:hi@beedev.dev">hi@beedev.dev</a>
            </span>
            <span className="flex items-center gap-5">
              <FiLoader className="hover:animate-spin w-[40px]" />
              <a href="mailto:hi@beedev.dev">hi@beedev.dev</a>
            </span>
          </li>
        }
      />
      <motion.div variants={rightVariants} className="container my-6">
        <div className="flex items-center justify-center gap-10">
          <RoundedButton link="/contact-us" btnText="Contact us" />
          <h2 className="text-primary text-4xl md:text-8xl">
            Let's work togther
          </h2>
        </div>
      </motion.div>
    </motion.section>
  );
};

