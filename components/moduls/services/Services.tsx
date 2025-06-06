import { Mask } from "./Mask";
import { ServicesItem } from "./ServicesItem";

export const servicesData = [
  {
    title: "Web Development",
    description:
      "Transform your digital vision into reality with our expert web development services. Our team is fully committed to crafting websites that help our clients achieve their business objectives.",

    options: [
      "FRONT-END DEVELOPMENT",
      "BACK-END DEVELOPMENT",
      "CMS-POWERED WEBSITES",
    ],
  },
  {
    title: "Web Design",
    description:
      "Unleash your brand's potential, with our tailor made web design solutions. Our skilled designer collaborates closely with you to seamlessly blend practicality and visual appeal resulting in a captivating design that fully represents your brand. Whether you're a startup or an established enterprise we assist you in crafting a lasting impact that resonates with your audience.",
    options: ["CREATIVE DIRECTION", "VISUAL & UI DESIGN", "IDENTITY DESIGN"],
  },
  {
    title: "Web Analytics",
    description:
      "We believe in data driven decision making and we will assist you in setting up your web analytics. By monitoring performance indicators on your website, you'll be equipped with the knowledge to understand your audience on a deeper level identify successful strategies, pinpoint areas, for improvement and ultimately enhance your websites performance while propelling the growth of your business.",
    options: [
      "E-commerce Tracking",
      "Audience Insights",
      "User Behavior Analysis",
    ],
  },
  {
    title: "Consulting",
    description:
      "With our expert consulting services, leverage a strategic roadmap for your online presence. We arm you with strategic insights, whether it's refining your website's usability, bolstering performance, or building a robust digital marketing strategy. We offer the guidance you need to confidently steer your web presence.",
    options: [
      "IT Strategy",
      "System Integration:",
      "Cybersecurity Consulting",
      "Infrastructure and Cloud Services",
      "IT Project Management",
    ],
  },
];

export const Services = () => {
  return (
    <section className="relative bg-dark py-32">
      <div className="grid grid-cols-12 container mx-auto">
        <div className="col-span-12 md:col-span-7 z-10 overflow-hidden">
          {servicesData.map((item, idx) => (
            <ServicesItem key={idx} {...item} />
          ))}
        </div>
      </div>
      <div className="absolute top-0 w-[10%] md:w-[35%] h-full right-0">
        <div className="relative h-full">
          <Mask />
        </div>
      </div>
    </section>
  );
};
