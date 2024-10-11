import { ICourse } from "@/types/course";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { LinkIcon } from "lucide-react";

const CreatedCourse = ({ course }: { course: ICourse }) => {
  return (
    <Card className="flex flex-col sm:flex-row">
      <CardHeader className="p-3">
        <Image
          src={course.image}
          alt={course.title}
          width={200}
          height={100}
          className="rounded"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </CardHeader>
      <CardContent className="p-3 flex gap-3 justify-between w-full flex-col sm:flex-row">
        <div>
          <h2 className="mb-2 text-lg font-medium">{course?.title}</h2>
          <p className="mt-2 mb-4 line-clamp-4 text-sm text-muted-foreground">
            {course?.price <= 0 ? "FREE" : `₹ ${course?.price}.00`}
          </p>
          <div className="border rounded-lg px-3 py-1 inline text-sm text-muted-foreground">
            Manage
          </div>
        </div>
        <div>
          <Link
            href={`/courses/${course.id}`}
            className="flex gap-2 justify-center items-center border rounded-lg px-4 py-2"
          >
            <LinkIcon className="h-4 w-4" />
            Preview
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatedCourse;
