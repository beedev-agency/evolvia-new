import { Mask } from "./Mask";
import { ServicesItem } from "./ServicesItem";

export const servicesData = [
  {
    title: "Grupni koučing za timove / Razvojne radionice (2–3h)",
    description:
      "Fokusirane, praktične sesije osmišljene prema aktuelnim temama i potrebama konkretnog tima. Radionice se ne recikliraju – pripremaju se u saradnji sa menadžmentom i HR-om i vode se prema dinamici i specifičnostima grupe. Teme uključuju: psihološku otpornost, komunikaciju,upravljanje vremenom, donošenje odluka pod pritiskom i druge relevantne izazove iz industrije.",
    options: [
      "FRONT-END DEVELOPMENT",
      "BACK-END DEVELOPMENT",
      "CMS-POWERED WEBSITES",
    ],
  },
  {
    title: "Naručeni koučing (6 sesija, strukturisan proces)",
    description:
      "Namenjen zaposlenima u koje kompanija želi dodatno da investira.",
    options: ["CREATIVE DIRECTION", "VISUAL & UI DESIGN", "IDENTITY DESIGN"],
  },
  {
    title: "Individualni koučing 1-na-1",
    description:
      "We believe in data driven decision making and we will assist you in setting up your web analytics. By monitoring performance indicators on your website, you'll be equipped with the knowledge to understand your audience on a deeper level identify successful strategies, pinpoint areas, for improvement and ultimately enhance your websites performance while propelling the growth of your business.",
    options: [
      "Proces počinje trojnim sastankom (HR/nadređeni, zaposleni i kouč) na kome se definišu ciljevi i parametri rasta.",
      "Slede šest individualnih sesija (svake druge nedelje), sa konkretnim fokusom i praćenjem napretka.",
      "U središtu je razvoj upravo onih unutrašnjih kapaciteta koji su ključni za efikasnost, stabilnost i lično zadovoljstvo.",
    ],
  }
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
