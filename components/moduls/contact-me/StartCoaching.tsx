"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";

import { useAnimation } from "@/hooks/useAnimation";

export const StartCoaching = () => {
  const [submitting, setSubmitting] = useState(false);
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    msg: "",
  });

  const { leftVariants, rightVariants, lineAnimation, downVariants } =
    useAnimation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (res.status === 200) {
        setContactData({
          fullName: "",
          email: "",
          msg: "",
        });
        toast.info("Request has been sent successfully");
        // setTimeout(() => router.push(`/`), 2000);
      } else {
        const { message } = await res.json();
        toast.error("Something went wrong, please try later.", message);
      }
    } catch (error) {
      // TODO: show error msg
      alert("An unexpected error happened. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-dark overflow-hidden"
    >
      <div className="container mx-auto relative after:absolute after:top-0 after:right-[25%] after:z-[1] py-20 md:py-40 after:bg-primary after:h-full after:w-[.5px]">
        <motion.h3
          variants={leftVariants}
          className="text-secondary text-sm mt-8 mb-6 uppercase"
        >
          start a project
        </motion.h3>
        <div className="grid grid-cols-2 gap-20">
          <div className="col-span-2 md:col-span-1">
            <motion.h2
              variants={leftVariants}
              className={`text-primary flex flex-col text-[48px] `}
            >
              Two heads are better than one. <br />
              Let’s talk.
            </motion.h2>
          </div>
          <div className="col-span-2 md:col-span-1 flex md:pr-12 xl:pr-28">
            <div className="basis-2/6">
              <motion.hr
                variants={{
                  offscreen: {
                    width: 0,
                    height: 2,
                  },
                  onscreen: {
                    height: 2,
                    width: "80%",
                    transition: {
                      type: "spring",
                      duration: 0.8,
                      delay: 0.8,
                    },
                  },
                }}
                className="mt-4 bg-white mr-10"
              ></motion.hr>
            </div>
            <motion.p
              variants={rightVariants}
              className="text-secondary md:text-[20px] leading-8 basis-4/6 z-10 bg-dark"
            >
              At BeeDev, we believe that every great idea deserves to come to
              life. Our passionate development team is here to turn your vision
              into reality. Whether you're a startup looking to disrupt the
              industry or an established business aiming to stay ahead of the
              curve, we're ready to collaborate with you.
            </motion.p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col mt-20">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className="overflow-hidden"
          >
            <motion.input
              variants={downVariants}
              type="text"
              name="fullName"
              placeholder="John Smith"
              onChange={handleChange}
              value={contactData.fullName}
              className="text-xl lg:text-[35px] 2xl:text-[48px] pb-6 lg:pb-5 bg-dark focus:outline-none font-light pl-4 placeholder:text-secondary text-gray w-full"
            />
            <motion.hr
              variants={lineAnimation}
              className="bg-primary mr-10 h-[3px] mb-12 lg:mb-[80px]"
            ></motion.hr>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className="overflow-hidden"
          >
            <motion.input
              variants={downVariants}
              type="text"
              name="email"
              onChange={handleChange}
              value={contactData.email}
              placeholder="E-mail"
              className="text-xl lg:text-[35px] 2xl:text-[48px] text-gray pb-6 lg:pb-5 mt-10 bg-dark focus:outline-none font-light pl-4 placeholder:text-secondary w-full"
            />
            <motion.hr
              variants={lineAnimation}
              className="bg-primary mr-10 h-[3px] mb-12 lg:mb-[80px]"
            ></motion.hr>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className="overflow-hidden"
          >
            <motion.textarea
              variants={downVariants}
              name="msg"
              placeholder="Message"
              onChange={handleChange}
              value={contactData.msg}
              rows={3}
              className="text-xl lg:text-[35px] 2xl:text-[48px] leading-none text-gray pb-6 lg:pb-5 mt-10 bg-dark focus:outline-none font-light pl-4 placeholder:text-secondary w-full"
            />
            <motion.hr
              variants={lineAnimation}
              className="bg-primary mr-10 h-[3px] mb-12 lg:mb-[80px]"
            ></motion.hr>
          </motion.div>

          <button
            className="basis-3/6 flex justify-center items-center"
            disabled={submitting}
            type="submit"
          >
            <span
              className={`h-[35vw] md:h-[15vw] text-secondary w-[35vw] md:w-[15vw] flex items-center justify-center border-2 gap-1 rounded-full border-primary`}
            >
              <AiOutlinePlus /> Send
            </span>
          </button>
        </form>
      </div>
    </motion.section>
  );
};
