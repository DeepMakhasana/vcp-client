import { CourseType } from "@/types/course";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { courseImageBaseUrl } from "@/lib/constants";

const Course = ({ course }: { course: CourseType }) => {
  return (
    <Link href={`/learn/${course.slug}`} className="h-full">
      <Card className="h-full">
        <CardHeader className="p-3">
          <img src={`${courseImageBaseUrl}/${course.image}`} alt={course.title} className="rounded bg-slate-200" />
        </CardHeader>
        <CardContent className="p-4">
          <h2 className=" text-xl font-medium">{course?.title}</h2>
          <div className="flex gap-2 sm:justify-between items-center">
            <span className="mt-2 mb-4 line-clamp-4 text-base text-muted-foreground">
              {/* <span className="font-medium text-primary">Duration: </span> */}
              {course.duration} Days
            </span>
            <span className="mt-2 mb-4 line-clamp-4 text-sm text-muted-foreground">
              <span className="font-medium text-primary">Created by: </span>
              {course.creator.name}
            </span>
          </div>
          <p className="line-clamp-3 text-sm text-muted-foreground">{course.description}</p>
          {/* <div className="flex w-full justify-between items-center"> */}

          {/* </div> */}
        </CardContent>
      </Card>
    </Link>
  );
};

export default Course;
