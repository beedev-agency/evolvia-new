"use client";
import { motion } from "framer-motion";

import { useAnimation } from "@/hooks/useAnimation";

interface Props {
  title: string;
  description: string;
  options: string[];
}

export const ServicesItem = ({ title, description, options }: Props) => {
  const {
    downVariants,
    lineAnimation,
    opacityVariations,
    oneByOneVariations,
    itemVariations,
  } = useAnimation();
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className="text-primary py-12 md:py-20 mt-0"
    >
      <div className="overflow-hidden">
        <motion.h3 variants={downVariants} className="text-5xl py-8 text-primary">
          {title}
        </motion.h3>
      </div>
      <motion.hr variants={lineAnimation} className="bg-primary h-[1px]" />
      <div className="flex flex-col md:flex-row gap-20 mt-20">
        <motion.div variants={opacityVariations} className="md:basis-3/6">
          <p className="text-base leading-relaxed tracking-wide text-secondary">
            {description}
          </p>
        </motion.div>
        <div className="md:basis-3/6">
          <motion.ul
            variants={oneByOneVariations}
            className="pl-4"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            {options?.map((item, idx) => (
              <motion.li
                variants={itemVariations}
                key={idx}
                className="list-disc mb-4 uppercase"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

