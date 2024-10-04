import { ICourse } from "@/types/course";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

const Course = ({ course }: { course: ICourse }) => {
  return (
    <Link href={`/courses/${course.id}`} className="h-full">
      <Card className="h-full">
        <CardHeader className="p-3">
          <Image
            src={course.image}
            alt={course.title}
            layout="responsive"
            width={800}
            height={600}
            className="rounded"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </CardHeader>
        <CardContent className="p-4">
          <h2 className="mb-4 text-xl font-medium">{course?.title}</h2>
          <p className="line-clamp-4 text-sm text-muted-foreground">
            {course.description}
          </p>
          <p className="mt-4 line-clamp-4 text-sm text-muted-foreground">
            <span className="font-medium text-primary">Created by: </span>
            {course.author}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Course;
