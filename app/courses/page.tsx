import { Metadata } from "next";
import { CoursesClient } from "@/components";
import { coursesData } from "@/data/courses";

export const metadata: Metadata = {
  title: "Programming Courses & Training | BeeDev - Learn Digital Skills",
  description: coursesData[0].description,
  keywords: "programming courses, web development courses, software engineering training, coding bootcamp, tech education, digital skills training",
  openGraph: {
    title: "Programming Courses & Training | BeeDev",
    description: coursesData[0].description,
    type: "website",
    images: [
      {
        url: "/images/courses-og.jpg",
        width: 1200,
        height: 630,
        alt: "BeeDev Programming Courses"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Programming Courses & Training | BeeDev",
    description: coursesData[0].description,
    images: ["/images/courses-og.jpg"]
  }
};

export default function CoursesPage() {
  return (
    <main>
      <CoursesClient courses={coursesData} />
      
      {/* Add structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "BeeDev Programming Courses",
            "description": coursesData[0].description,
            "provider": {
              "@type": "Organization",
              "name": "BeeDev",
              "sameAs": "https://beedev.com"
            },
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock"
            },
            "hasCourseInstance": coursesData.map(course => ({
              "@type": "CourseInstance",
              "name": course.title,
              "description": course.description,
              "courseMode": "online"
            }))
          })
        }}
      />
    </main>
  );
}
