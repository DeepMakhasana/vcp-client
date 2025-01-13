import { Poppins } from "next/font/google";
import Course from "@/components/course/Course";
import { CourseType } from "@/types/course";
import React from "react";
import { CLIENT_ID } from "@/lib/constants";
import { notFound } from "next/navigation";

const poppins = Poppins({ style: "normal", weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "jewellery design online course | Param CAD Center",
  description:
    "Master the art of jewellery design with our comprehensive online course at Param CAD Center. Learn to create stunning, professional-grade jewellery designs using advanced CAD software from the comfort of your home. This course is perfect for beginners and aspiring designers looking to gain industry-relevant skills, as well as professionals aiming to enhance their creativity and expertise. With expert guidance, hands-on projects, and real-world design techniques, you'll be ready to craft bespoke jewellery that stands out. Enroll today and turn your passion for jewellery into a rewarding career!",
  keywords: "jewellery design online course, jewellery design courses near me, JewelCAD 5.1, Rhinoceros",
};

async function getCourses(clientId: number): Promise<CourseType[]> {
  const res = await fetch(
    `https://mjd4dzx78k.execute-api.ap-south-1.amazonaws.com/dev/api/public/courses/${clientId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) notFound();

  return await res.json();
}

const Courses = async () => {
  const courses = await getCourses(CLIENT_ID);
  return (
    <main className={`${poppins.className} mx-auto max-w-screen-xl`}>
      <section className="px-4 py-8">
        <div className="my-8 flex flex-col items-center gap-3">
          <h1 className="text-3xl">Online Courses</h1>
          <p className="max-w-3xl text-center text-base leading-6 text-muted-foreground">
            Join thousands of learners and advance your career with our comprehensive courses or Master New Skills with
            Expert-Led Video Courses
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Courses;
