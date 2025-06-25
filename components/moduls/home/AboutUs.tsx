"use client";

import Image from "next/image";

import { RoundedButton } from "@/components/common/RoundedButton";

export const AboutUs = () => {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     let device_width = window.innerWidth;
  //     let tHero = gsap.context(() => {
  //       // ScrollSmoother.create({
  //       //   smooth: 1.35,
  //       //   effects: device_width < 1025 ? false : true,
  //       //   smoothTouch: false,
  //       //   normalizeScroll: false,
  //       //   ignoreMobileResize: true,
  //       // });
  //     });
  //     return () => tHero.revert();
  //   }
  // }, []);

  return (
    <section className="py-[80px] bg-background">
      {/* <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        style={{ backgroundImage: "url(mask2.svg)" }}
        className="bg-cover bg-center  bg-no-repeat"
      >
        <div className="grid grid-cols-7 container relative py-10 md:py-32">
          <div className="col-span-7 lg:col-span-5 pr-30">
            <motion.h3
              variants={leftVariants}
              className="text-4xl md:text-7xl text-white leading-tight"
            >
              Welcome to BeeDev, where we believe that ideas have the potential
              to change the world.
            </motion.h3>
            <motion.div
              variants={downVariants}
              className="flex flex-col md:flex-row text-white mt-12 text-base gap-x-5"
            >
              <div className="relative pb-8 md:pb-0">
                <div className="w-[50px] md:w-[150px] h-[3px] bg-white mt-3"></div>
              </div>
              <div className="text-[18px] leading-relaxed pr-[50px] md:pr-[100px] 2xl:pr-[300px]">
                <p>
                  In a world where innovation is the driving force, it's not
                  enough to simply have great ideas. Execution is the key that
                  unlocks their true potential. That's where BeeDev comes in. We
                  specialize in taking your ideas and breathing life into them,
                  crafting solutions that transcend expectations and push
                  boundaries.
                </p>
                <p className="mt-5 mb-16">
                  But we don't stop there. At BeeDev, we believe in pushing the
                  boundaries of what's possible. We're not content with
                  ordinary; we strive for extraordinary. We thrive on challenges
                  and thrive in the face of complexity. We see limitations as
                  opportunities for innovation, and we're not afraid to explore
                  uncharted territories to bring your ideas to life.
                </p>
                <Link
                  href="/about-us"
                  className="px-14 py-5 border-solid rounded-full relative overflow-hidden block w-full md:w-[60%] group"
                >
                  <div className="absolute top-[50%] left-[40%] w-[45px] h-[45px] bg-primary translate-y-[-50%] rounded-full block group-hover:w-[400px] group-hover:left-[0] group-hover:h-[80px] z-[1] ease-in duration-500"></div>
                  <span className="z-10 relative">About us</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div> */}
      <section className="about__area-3">
        <div className="container mx-auto pt-[140px] pb-[110px]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6">
              <div className="about__img-3">
                <Image
                  priority
                  src="/rand.png"
                  width={500}
                  height={800}
                  alt="Image of founder Beedev agency"
                  data-speed="auto"
                  className="smootherReset768"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="relative z-10">
                <h2 className="sec-sub-title title-anim text-primary">
                  Ko stoji iza Evolvie
                </h2>
              </div>
              <div className="sec-text-wrapper">
                <h3 className="sec-title title-anim text-primary">
                  Evolvia je nastala kao prirodan spoj mog industrijskog
                  iskustva i stručnosti u koučingu. Kroz nju želim da doprinesem
                  rastu pojedinaca, timova i organizacija – ne samo u brojkama,
                  već u zadovoljstvu, efikasnosti i osećaju lične kompetentnosti
                  svakog profesionalca.
                </h3>
                <RoundedButton link="/about-us" btnText="Istraži više" isSmall />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
