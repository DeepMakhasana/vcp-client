import Course from "@/components/course/Course";
import { coursesData } from "@/lib/utils";

export default function Home() {
  return (
    <section className="px-4 py-8">
      <div className="my-8 flex flex-col items-center gap-3">
        <h1 className="text-3xl">Featured Courses</h1>
        <p className="max-w-3xl text-center text-sm leading-5 text-muted-foreground">
          Join thousands of learners and advance your career with our
          comprehensive courses or Master New Skills with Expert-Led Video
          Courses
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3">
        {coursesData.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
