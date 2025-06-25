import { CoursesItem } from "./CoursesItem";
import { Course } from "@/types";

interface CoursesContentProps {
  courses: Course[];
}

export const CoursesContent = ({ courses }: CoursesContentProps) => {
  return (
    <section className="py-20 md:pb-[50px] md:pt-[100px] bg-dark overflow-hidden" aria-label="Course content">
     
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 relative md:after:absolute md:after:top-0 md:before:absolute md:before:top-20 md:before:left-0 md:before:z-[1] before:bg-primary md:before:h-[1px] before:w-[70%] md:after:left-[5%] md:after:z-[1] py-20 md:py-[150px] after:bg-primary after:h-[70%] after:w-[1px]">
          <h2 className="bg-dark z-10 text-[40px] md:text-[76px] text-secondary md:col-span-3">
            Who we are
          </h2>
          <div className="md:col-span-1 "></div>
          <div className="text-primary pt-10 text-[16px] leading-[1.4] md:col-span-2 lg:col-span-1">
            <p>
              Crafting Digital Excellence from Serbia! At BeeDev, we embody the
              spirit of a small but dynamic team bursting with big ideas. Our
              hive is a collective of visionary thinkers, tech enthusiasts, and
              coding wizards who thrive on transforming concepts into
              captivating digital landscapes. Our foundation rests on the
              pillars of collaboration, expertise, and unwavering dedication to
              turning challenges into triumphs
            </p>
            <p className="pt-10">
              Execution is the key that unlocks their true potential. That's
              where BeeDev comes in. We specialize in taking your ideas and
              breathing life into them, crafting solutions that transcend
              expectations and push boundaries.
            </p>
            <p className="pt-10">
              But we don't stop there. At BeeDev, we believe in pushing the
              boundaries of what's possible. We're not content with ordinary; we
              strive for extraordinary. We thrive on challenges and thrive in
              the face of complexity. We see limitations as opportunities for
              innovation, and we're not afraid to explore uncharted territories
              to bring your ideas to life.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        {courses.map((item, idx) => (
          <CoursesItem {...item} number={idx} key={idx} />
        ))} 
      </div> 
    </section>
  );
};
