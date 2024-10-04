import { coursesData } from "@/app/page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courseContent, courseDetails } from "@/lib/utils";
import { ICoursePage } from "@/types/course";
import { BadgePercent, Star, Video } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ICourseDetailProps {
  params: { slug: string };
}

const CourseDetails = ({ params: { slug } }: ICourseDetailProps) => {
  const course = coursesData.filter((course) => course.id === slug);
  const fullCourseDetails: ICoursePage = {
    ...course[0],
    ...courseDetails,
  };
  return (
    <section className="mx-auto flex max-w-screen-xl gap-12 py-20">
      {/* left side image and course contant */}
      <div className="w-1/2">
        <div className="pb-12">
          <Image
            src={fullCourseDetails.image}
            alt={fullCourseDetails.title}
            layout="responsive"
            width={800}
            height={600}
            className="rounded"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <Tabs defaultValue="courseContent" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="courseContent">Course Content</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="courseContent">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {courseContent.map((topics) => (
                <AccordionItem key={topics.id} value={`${topics.id}`}>
                  <AccordionTrigger>{topics.title}</AccordionTrigger>
                  <AccordionContent>
                    {topics.lessons.map((lesson, i) => (
                      <div
                        key={i}
                        className="flex w-full items-center justify-center ps-4"
                      >
                        <div>
                          <Video />
                          <p>{lesson.title}</p>
                        </div>
                        <p>{lesson.duration}m</p>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent value="reviews">Reviews</TabsContent>
        </Tabs>
      </div>

      {/* right side course details */}
      <div className="w-1/2">
        <div className="pb-12">
          {/* Course title */}
          <h1 className="mb-4 text-3xl font-semibold">
            {fullCourseDetails.title}
          </h1>
          {/* Author */}
          <p className="mb-2">
            <span className="text-primary">Cretated by: </span>{" "}
            <span className="text-muted-foreground underline">
              {fullCourseDetails.author}
            </span>
          </p>
          {/* rating count */}
          <div className="flex items-center gap-1 py-2">
            <Star fill="#6D28D9" color="#6D28D9" />
            <Star fill="#6D28D9" color="#6D28D9" />
            <Star fill="#6D28D9" color="#6D28D9" />
            <Star fill="#6D28D9" color="#6D28D9" />
            <Star color="#6D28D9" />
            <span className="ms-3">4.0 (6 reviews)</span>
          </div>
          {/* course descreption */}
          <p className="mt-6 text-sm text-muted-foreground">
            {fullCourseDetails.description}
          </p>

          {/* Course Price */}
          {fullCourseDetails.price <= 0 ? (
            <p className="mt-4 text-3xl font-bold">FREE</p>
          ) : (
            <p className="mt-4 text-3xl font-bold">
              ₹ {fullCourseDetails.price}.00
            </p>
          )}

          {/* Course Price */}
          <div className="mt-4 flex gap-4">
            <Button variant={"default"}>Buy now</Button>
            <Button variant={"outline"}>
              <BadgePercent className="mr-2 h-4 w-4" />
              Apply Coupon
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="border-t border-secondary">
            <h3 className="py-6">Highlights</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: fullCourseDetails?.highlights,
              }}
              className="text-sm leading-7 text-muted-foreground"
            />
          </div>

          <div className="border-t border-secondary">
            <h3 className="py-6">Learning Outcomes</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: fullCourseDetails?.learningOutcomes,
              }}
              className="text-sm leading-7 text-muted-foreground"
            />
          </div>

          <div className="border-t border-secondary">
            <h3 className="py-6">Prerequisites</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: fullCourseDetails?.prerequisites,
              }}
              className="text-sm leading-7 text-muted-foreground"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
