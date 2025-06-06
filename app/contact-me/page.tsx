import { HeroContact, StartCoaching } from "@/components";

const AboutUs = () => {
  return (
    <>
      <div className="absolute top-[200px] right-0 h-[80%] hidden xl:block">
        <div className="relative h-full">
          {/* <h2
            className="font-bold -rotate-90 sticky top-[250px] text-[180px] inline-block text-lightDark  mr-[-50px] right-0 tracking-[0.03em] leading-[.7em] z-10"
            style={{ fontFamily: "SemiBold" }}
          >
            SAY HELLO
          </h2> */}
        </div>
      </div>
      <HeroContact />
      <StartCoaching />
    </>
  );
};

export default AboutUs;
