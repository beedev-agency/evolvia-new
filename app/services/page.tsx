import { Metadata } from "next";

import { ContactHome, ServicesHero } from "@/components";
import { Services } from "@/components/moduls/services/Services";

export const metadata: Metadata = {
  title: "Our Services & Courses | BeeDev - Digital Development Solutions",
  description:
    "Explore BeeDev's comprehensive range of digital development services and courses. From web development to digital transformation, we help businesses build their future through innovative solutions.",
  keywords:
    "digital development, web development, software solutions, digital transformation, tech courses, programming courses",
  openGraph: {
    title: "Our Services & Courses | BeeDev - Digital Development Solutions",
    description:
      "Explore BeeDev's comprehensive range of digital development services and courses. From web development to digital transformation, we help businesses build their future through innovative solutions.",
    type: "website",
    images: [
      {
        url: "/images/services-og.jpg", // Make sure to add this image
        width: 1200,
        height: 630,
        alt: "BeeDev Services and Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services & Courses | BeeDev",
    description:
      "Explore BeeDev's comprehensive range of digital development services and courses.",
    images: ["/images/services-og.jpg"],
  },
};

const ServicesPage = () => {
  return (
    <main>
      <ServicesHero />
      <section className="relative">
        <div
          className="h-[200px] w-full bg-dark my-[-10px]"
          aria-hidden="true"
        />
        <Services />
      </section>

      <section className="relative">
        <div
          className="hidden md:block h-[100px] md:h-[200px] w-full bg-dark my-[-10px]"
          aria-hidden="true"
        />
        <ContactHome />
      </section>

      {/* Add structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Services & Courses | BeeDev",
            description:
              "Explore BeeDev's comprehensive range of digital development services and courses.",
            publisher: {
              "@type": "Organization",
              name: "BeeDev",
              logo: {
                "@type": "ImageObject",
                url: "/images/logo.png", // Make sure to add your logo
              },
            },
          }),
        }}
      />
    </main>
  );
};

export default ServicesPage;
