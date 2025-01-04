import { CourseType } from "@/types/course";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

const Course = ({ course }: { course: CourseType }) => {
  return (
    <Link href={`/courses/${course.slug}`} className="h-full">
      <Card className="h-full">
        <CardHeader className="p-3">
          <Image
            src={`${process.env.IMAGE_BASE_URL}/${course.image}`}
            alt={course.title}
            width={640}
            height={360}
            className="rounded"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </CardHeader>
        <CardContent className="p-4">
          <h2 className=" text-xl font-medium">{course?.title}</h2>
          <div className="flex gap-2 sm:justify-between sm:items-center">
            <span className="mt-2 mb-4 line-clamp-4 text-sm text-muted-foreground">
              {/* <span className="font-medium text-primary">Duration: </span> */}
              {course.duration} Days
            </span>
            <span className="mt-2 mb-4 line-clamp-4 text-sm text-muted-foreground">
              <span className="font-medium text-primary">Created by: </span>
              {course.creator.name}
            </span>
          </div>
          <p className="line-clamp-4 text-sm text-muted-foreground">{course.description}</p>
          {/* <div className="flex w-full justify-between items-center"> */}

          {/* </div> */}
        </CardContent>
      </Card>
    </Link>
  );
};

export default Course;
