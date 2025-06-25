"use client";

import { CoursesContent } from "@/components";
import { Course } from "@/types";
import { CoursesHero } from "./CoursesHero";

interface CoursesClientProps {
  courses: Course[];
}

export function CoursesClient({ courses }: CoursesClientProps) {
  return (
    <>
      <section aria-label="Course listings">
        <CoursesHero />
        <CoursesContent courses={courses} />
      </section>
    </>
  );
}
