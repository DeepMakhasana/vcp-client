import React from "react";
import { coursesData } from "../page";
import Course from "@/components/course/Course";

const Courses = () => {
  return (
    <section className="px-4 py-8">
      <div className="my-8 flex flex-col items-center gap-3">
        <h1 className="text-3xl">All Courses</h1>
        <p className="max-w-3xl text-center text-sm leading-5 text-muted-foreground">
          Master New Skills with Expert-Led Video Courses
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {coursesData.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
