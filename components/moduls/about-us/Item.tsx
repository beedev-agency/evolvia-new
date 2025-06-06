"use client";

import classNames from "clsx";
import { motion } from "framer-motion";

import { useAnimation } from "@/hooks/useAnimation";

interface Props {
  number: number;
  title: string;
  description: string;
}

export const AboutItem = ({ number, title, description }: Props) => {
  const { downVariants, lineAnimation } = useAnimation();
  const isEven = number % 2 === 1;

  const projectClasses = classNames("flex", {
    "justify-end": isEven,
    "justify-start": !isEven,
  });

  const wrapperClasses = classNames("flex items-center my-10 overflow-hidden", {
    "flex-row-reverse": isEven,
  });

  const numberClasses = classNames("basis-1/6 md:basis-2/6 flex", {
    "justify-start": isEven,
    "justify-end": !isEven,
  });

  return (
    <div className={projectClasses}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
        className="w-full md:w-[90%] lg:w-[80%]  py-10 gap-x-3 md:gap-0 overflow-hidden"
      >
        <motion.div variants={downVariants} className={wrapperClasses}>
          <div className="basis-5/6 md:basis-4/6">
            <p className="text-secondary uppercase mb-4 text-xs">{title}</p>
            <p className="text-primary text-2xl md:text-[30px] leading-[1.4]">
              {description}
            </p>
          </div>
          <div className={numberClasses}>
            <p
              className="text-secondary text-[180px] md:text-[280px] lg:text-[360px] leading-none"
              style={{ fontFamily: "SemiBold" }}
            >
              0{number + 1}
            </p>
          </div>
        </motion.div>
        <motion.hr
          variants={lineAnimation}
          initial="offscreen"
          whileInView="onscreen"
          className="bg-gray h-[2px]"
          viewport={{ once: true, amount: 1 }}
        />
      </motion.div>
    </div>
  );
};
