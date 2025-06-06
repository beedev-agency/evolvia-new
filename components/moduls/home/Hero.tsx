"use client"

import classNames from "clsx";

import { motion } from "framer-motion";
import { useAnimation } from "@/hooks/useAnimation";

export const Hero = ({ titleContent, description }: any) => {
  const { oneByOneVariations, leftVariants } = useAnimation();

  const heroClasses = classNames(
    "pt-40 flex flex-col pb-10 bg-justify-end text-[45px] md:text-[60px] lg:text-[90px] xl:text-[120px] text-white mx-auto w-[calc(100vw-44px)] md:w-[calc(100vw-144px)] overflow-hidden"
  );

  const wrapperClasses = classNames(
    "relative bg-no-repeat bg-cover bg-center text-purple"
  );

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className={wrapperClasses}
    >
      <div className={heroClasses}>
        <motion.h2
          variants={oneByOneVariations}
          className="flex flex-col pt-10 2xl:pt-18 leading-[1.15] relative text-primary font-[500]"
        >
          {titleContent}
        </motion.h2>
        <motion.p
          variants={leftVariants}
          className="relative font-semibold text-secondary text-base md:text-[25px] before:absolute before:content-[''] before:w-[30px] md:before:w-[60px] before:h-[2px] before:top-[50%] before:left-0 pl-[40px] md:pl-[75px] before:bg-primary w-[60%] md:w-[80%] lg:w-[50%] mt-20 leading-normal"
        >
          {description}
        </motion.p>
      </div>
    </motion.section>
  );
};
