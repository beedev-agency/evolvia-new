import { AboutItem } from "./Item";

const aboutContentData = [
  {
    title: "our craft",
    description:
      "Evolvia nije još jedan „trening za poneti“ – onaj koji inspiriše na dan, ali već u ponedeljak pada u zaborav. Ovo nije dodatni alat u nizu, već proces koji pomaže ljudima da počnu da koriste ono što već znaju – ali ih nešto u tome zaustavlja.",
  },
  {
    title: "OUR CAPABILITIES",
    description:
      " U praksi, to „nešto“ najčešće nisu nedostatak znanja ili veština – već psihološke blokade: unutrašnje barijere, obrasci razmišljanja, nesigurnosti i sumnje koje ostaju neadresirane iako direktno utiču na performanse.", 
  },
  {
    title: "YOUR BRAND",
    description:
      "Svi programi su individualizovani i nastaju u dijalogu sa timovima i rukovodstvom. Nema generičkih rešenja – svaki pristup je kreiran u skladu sa konkretnim izazovima i ciljevima.",
  },
];

export const AboutContent = () => {
  return (
    <section className="py-20 md:pb-[50px] md:pt-[100px] bg-dark overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 relative md:after:absolute md:after:top-0 md:before:absolute md:before:top-20 md:before:left-0 md:before:z-[1] before:bg-primary md:before:h-[1px] before:w-[70%] md:after:left-[5%] md:after:z-[1] py-20 md:py-[150px] after:bg-primary after:h-[70%] after:w-[1px]">
          <h2 className="bg-dark z-10 text-[40px] md:text-[76px] text-secondary md:col-span-3">
            Ko stoji iza Evolvie
          </h2>
          <div className="md:col-span-1 "></div>
          <div className="text-primary pt-10 text-[16px] leading-[1.4] md:col-span-2 lg:col-span-1">
            <p>
              Ja sam Snežana Bošnjaković, magistar farmacije sa više od 10
              godina iskustva u farmaceutskoj industriji – od terena do
              menadžerske pozicije. Radila sam kao stručni saradnik, a zatim i
              kao sales menadžer, vodeći tim i odgovarajući za rezultate u
              dinamičnom i kompetitivnom okruženju.
            </p>
            <p className="pt-10">
              Razumem izazove industrije – ne samo iz teorije, već iz prakse.
              Razumem pritisak ciljeva, kompleksnost komunikacije sa lekarima i
              apotekama, ali i svakodnevne dileme sa kojima se suočavaju i
              saradnici i njihovi lideri.
            </p>
            <p className="pt-10">
              Upravo u radu sa timom prepoznala sam koliko je razvoj ljudi
              ključan za dugoročne rezultate. Tu sam pronašla svoju najveću
              profesionalnu motivaciju – da budem podrška u razvoju potencijala,
              prevazilaženju unutrašnjih blokada i izgradnji kompetencija koje
              donose rezultat.
            </p>
            <p className="pt-10">
              Zbog toga sam se dodatno usavršavala u oblasti ličnog razvoja i
              koučinga, i danas sam{" "}
              <strong>ISCP Certified Cognitive Behavioural Coach.</strong>
            </p>
            <p className="pt-10">
              <strong>
                Evolvia je nastala kao prirodan spoj mog industrijskog iskustva
                i stručnosti u koučingu.
              </strong>
              Kroz nju želim da doprinesem rastu pojedinaca, timova i
              organizacija – ne samo u brojkama, već u zadovoljstvu, efikasnosti
              i osećaju lične kompetentnosti svakog profesionalca.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="bg-dark z-10 text-[40px] md:text-[76px] text-secondary md:col-span-3 text-center">
          Kako radimo
        </h2>
        <div>
          {aboutContentData.map((item, idx) => (
            <AboutItem {...item} number={idx} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
