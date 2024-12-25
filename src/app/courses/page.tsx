import Course from "@/components/course/Course";
import { CourseType } from "@/types/course";
import React from "react";

const Courses = async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/public/courses/${process.env.CLIENT_ID}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch courses: ${res.statusText}`);
  }

  const courses: CourseType[] = await res.json();
  return (
    <section className="px-4 py-8">
      <div className="my-8 flex flex-col items-center gap-3">
        <h1 className="text-3xl">All Courses</h1>
        <p className="max-w-3xl text-center text-sm leading-5 text-muted-foreground">
          Master New Skills with Expert-Led Video Courses
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
