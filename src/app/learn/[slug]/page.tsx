import { Poppins } from "next/font/google";
import PublicVideo from "@/components/course/PublicVideo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CLIENT_ID, courseImageBaseUrl, MAIN_URL } from "@/lib/constants";
import { FullCourseDetail } from "@/types/publicCourse";
import { BadgePercent, File, Star, Video } from "lucide-react";
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseType } from "@/types/course";

const poppins = Poppins({ style: "normal", weight: "400", subsets: ["latin"] });

interface ICourseDetailProps {
  params: { slug: string };
}

async function getCourse(slug: string): Promise<FullCourseDetail> {
  const res = await fetch(`https://mjd4dzx78k.execute-api.ap-south-1.amazonaws.com/dev/api/public/course/${slug}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) notFound();

  return await res.json();
}

export async function generateMetadata({ params }: ICourseDetailProps): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const course = await getCourse(slug);

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      images: [`${courseImageBaseUrl}/${course.image}`],
    },
  };
}

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

export async function generateStaticParams() {
  const course = await getCourses(CLIENT_ID);

  console.log("courses ", course);

  return course.map((course) => ({
    slug: course.slug,
  }));
}

const CourseDetails = async ({ params: { slug } }: ICourseDetailProps) => {
  const course = await getCourse(slug);

  return (
    <main className={`${poppins.className} mx-auto max-w-screen-xl`}>
      <section className="flex flex-col gap-1 py-5 md:py-14">
        {/* image and course details */}
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div className="w-full px-3 py-5 md:py-0 md:pb-12 md:w-1/2">
            <img src={`${courseImageBaseUrl}/${course.image}`} alt={course.title} className="rounded" />
          </div>

          <div className="w-full px-3  md:pb-12 md:w-1/2">
            {/* Course title */}
            <h1 className="mb-4 text-3xl font-semibold">{course.title}</h1>
            <p className="mb-2">
              <span className="text-black">Duration: </span>{" "}
              <span className="text-muted-foreground font-medium">{course.duration} Days</span>
            </p>
            {/* rating count */}
            <div className="flex items-center gap-1 py-2">
              <Star fill="#0D7284" color="#0D7284" />
              <Star fill="#0D7284" color="#0D7284" />
              <Star fill="#0D7284" color="#0D7284" />
              <Star fill="#0D7284" color="#0D7284" />
              <Star color="#0D7284" />
              <span className="ms-3">4.0 (6 reviews)</span>
            </div>
            {/* Author */}
            <p className="mb-2">
              <span className="text-primary">Created by: </span>{" "}
              <span className="text-muted-foreground underline">{course.creator.name}</span>
            </p>
            {/* course descreption */}
            <p className="mt-6 text-sm text-muted-foreground tracking-wider">{course.description}</p>

            {/* Course Price */}
            {Number(course.price) <= 0 ? (
              <p className="mt-4 text-3xl font-bold">FREE</p>
            ) : (
              <p className="mt-4 text-3xl font-bold">₹ {course.price}.00</p>
            )}

            {/* Course Price */}
            <div className="mt-4 flex gap-4">
              <a href={`${MAIN_URL}/checkout/${slug}`}>
                <Button variant={"default"}>Buy now</Button>
              </a>
              <a href={`${MAIN_URL}/checkout/${slug}`}>
                <Button variant={"outline"}>
                  <BadgePercent className="mr-2 h-4 w-4" />
                  Apply Coupon
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* course content and course other details */}
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <Tabs defaultValue="courseContent" className="mt-4 w-full px-3 pb-12 md:w-1/2">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="courseContent">Course Content</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="courseContent" className="mt-4">
              <Accordion type="single" collapsible className="w-full" defaultValue="1">
                {course.modules.map((topics) => (
                  <AccordionItem key={topics.id} value={`${topics.order}`} className="gap-4 py-2">
                    <AccordionTrigger>
                      <div className="text-start line-clamp-1">{topics.title}</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      {topics.lessons.map((lesson, i) => (
                        <div key={i} className="flex w-full items-center justify-between py-1 ps-4">
                          <div className="flex items-center gap-2">
                            <div className="border rounded p-2">
                              {lesson.isVideo ? <Video className="w-5 h-5" /> : <File className="w-5 h-5" />}
                            </div>
                            {lesson.public ? (
                              <PublicVideo title={lesson.title} url={lesson.public.url} />
                            ) : (
                              <p className="text-sm font-normal">{lesson.title}</p>
                            )}
                          </div>
                          {/* <p className="text-sm text-muted-foreground">{lesson.duration}m</p> */}
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            <TabsContent value="reviews" className="scrollbar-custom mt-4 h-screen overflow-y-scroll">
              <p className="text-sm text-muted-foreground">Coming soon..</p>
              {/* {courseReviews.map((review) => (
              <div className="flex gap-3 py-4" key={review.id}>
                <div className="rounded-full">
                  <Image src={review.image} height={80} width={80} alt="user image" className="rounded-full" />
                </div>

                <div>
                  <div>
                    <h4>{review.name}</h4>
                    <span className="text-sm text-muted-foreground">{review.time}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 py-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) =>
                          i + 1 <= review.rating ? (
                            <Star fill="#6D28D9" color="#6D28D9" key={i} />
                          ) : (
                            <Star color="#6D28D9" key={i} />
                          )
                        )}
                      <span className="ms-3">{review.rating}.0</span>
                    </div>
                    <p className="text-sm">{review.review}</p>
                  </div>
                </div>
              </div>
            ))} */}
            </TabsContent>
          </Tabs>

          <div className="flex w-full flex-col gap-8 px-3 pb-12 md:w-1/2">
            <div className="border-t border-secondary">
              <h3 className="py-6">Highlights</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: course?.highlights,
                }}
                className="text-sm leading-7 text-muted-foreground"
              />
            </div>

            <div className="border-t border-secondary">
              <h3 className="py-6">Learning Outcomes</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: course?.outcomes,
                }}
                className="text-sm leading-7 text-muted-foreground"
              />
            </div>

            <div className="border-t border-secondary">
              <h3 className="py-6">Prerequisites</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: course?.prerequisites,
                }}
                className="text-sm leading-7 text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseDetails;
