import { ICourseFullDetailResponse, ICourseFullDetails, IPurchaseCoursesResponse } from "@/types/course";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Trash, Edit, LinkIcon, SlidersHorizontal, Loader2 } from "lucide-react";
import { clientEndpoints, courseImageBaseUrl } from "@/lib/constants";
import { formateDateTime } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

function getDaysBetweenDates(startDate: string, endDate: string): number {
  // Parse the ISO strings into Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in milliseconds
  const diffInMilliseconds = end.getTime() - start.getTime();

  // Convert milliseconds to days
  return Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
}

const PurchasedCourse = ({ course }: { course: IPurchaseCoursesResponse }) => {
  return (
    <Card className="flex flex-col md:flex-row">
      <CardHeader className="p-3">
        <Image
          src={`${courseImageBaseUrl}/${course.course.image}`}
          alt={course.course.title}
          width={640}
          height={360}
          className="w-full max-h-64 min-h-36 object-cover rounded bg-slate-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </CardHeader>
      <CardContent className="p-3 flex gap-3 justify-between w-full flex-col sm:flex-row">
        <div>
          <h2 className="mb-2 text-lg font-medium">{course.course?.title}</h2>
          <p className="mt-2 mb-4 line-clamp-4 text-sm text-muted-foreground">
            {Number(course.course?.price) <= 0 ? "FREE" : `₹ ${course.course?.price}.00`}
          </p>
          <p className="mt-2 mb-4 line-clamp-4 text-sm text-muted-foreground">
            <b>remaining:</b> {getDaysBetweenDates(`${course.createdAt}`, `${course.endAt}`)} Days
          </p>
          <div className="flex gap-2">
            <Link href={`/dashboard/learn/${course.course.slug}`}>
              <Button variant={"default"}>
                <SlidersHorizontal />
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
        <div>
          {/* <Link
            href={`/courses/${course.course.id}`}
            className="flex gap-2 justify-center items-center border rounded-lg px-4 py-2"
          >
            <LinkIcon className="h-4 w-4" />
            Preview
          </Link> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchasedCourse;
