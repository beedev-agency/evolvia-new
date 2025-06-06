"use client"

import { motion } from "framer-motion";

import classes from "./chyron.module.css";

interface Props {
    title?: string
    content: React.ReactNode
}

export const Chyron = ({ title, content }:Props) => {
  const leftVariants = {
    offscreen: {
      x: -800,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };

  const downVariants = {
    offscreen: {
      y: 500,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      className="flex relative bg-background overflow-hidden"
    >
      {title && (
        <div className="absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]">
          <motion.h2
            variants={leftVariants}
            className={`${classes.title}  text-white  whitespace-nowrap`}
          >
            {title}
          </motion.h2>
        </div>
      )}
      <motion.div
        variants={downVariants}
        className={classes.chyron}
        style={{ fontFamily: "SemiBold" }}
      >
        <ul className={classes.chyronInner}>
          {content}
          {content}
          {content}
        </ul>
        <ul className={classes.chyronInner} aria-hidden="true">
          {content}
          {content}
          {content}
        </ul>
        <ul className={classes.chyronInner} aria-hidden="true">
          {content}
          {content}
          {content}
        </ul>
      </motion.div>
    </motion.div>
  );
};
