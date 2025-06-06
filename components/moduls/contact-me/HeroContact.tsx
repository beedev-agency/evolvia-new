"use client";

import { motion } from "framer-motion";

import { useAnimation } from "@/hooks/useAnimation";

const address = ["Ivice Kozoderovic 1b", "Cacak, Serbia", "Belgrade, Serbia"];

export const HeroContact = () => {
  const { downVariants, itemVariations, oneByOneVariations, leftVariants } =
    useAnimation();
  return (
    <section className="relative mt-[-70px] flex items-end bg-dark min-h-screen">
      <div className="w-[calc(100vw-44px)] md:w-[calc(100vw-144px)] h-full mx-auto border-l-[0.5px] border-primary pb-[200px]">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="overflow-hidden"
        >
          <motion.h2
            variants={downVariants}
            className="text-primary flex flex-col pt-48 md:pt-56 leading-none text-[10vw] lg:text-[8vw]"
          >
            Get in touch.
          </motion.h2>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          className="pl-10 md:pl-24 flex flex-col md:flex-row w-full md:w-[80%] leading-loose font-light pt-20 overflow-hidden"
        >
          <motion.div
            variants={leftVariants}
            className="basis-full md:basis-2/6 overflow-hidden"
          >
            <h3 className="text-secondary text-xs mt-8 mb-6 uppercase">
              BUSINESS INQUIRIES
            </h3>
            <a href="mailto:hi@beedev.dev" className="text-primary text-[18px]">
              hi@beedev.dev
            </a>
            <h3 className="text-secondary  text-xs mt-8 mb-6 uppercase">Call us</h3>
            <a
              className="text-primary text-[18px] block"
              href="tel:+381 (0)63 624 005"
            >
              +381 (0)63 624 005
            </a>
            <a
              className="text-primary text-[18px] block"
              href="tel:+381 (0)64 1445 306"
            >
              +381 (0)64 1445 306
            </a>
          </motion.div>
          <div className="basis-full md:basis-2/6">
            <h3 className="text-secondary  text-xs mt-8 mb-6 uppercase">Address</h3>
            <motion.ul
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={oneByOneVariations}
            >
              {address.map((item, idx) => (
                <motion.li key={idx} variants={itemVariations}>
                  <p className="text-primary text-[18px]">{item}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
