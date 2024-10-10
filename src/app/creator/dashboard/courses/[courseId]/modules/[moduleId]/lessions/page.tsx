import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { courseLessions, courseModules } from "@/lib/utils";
import { Video } from "lucide-react";
import Link from "next/link";
import React from "react";
const Lessions = () => {
  return (
    <main className="p-4 md:p-8">
      <div>
        <h1 className="text-2xl font-medium">Lessions</h1>
        <p className="text-sm hidden text-muted-foreground sm:block">
          View and manage course lessions
        </p>
      </div>
      <Table className="my-8">
        <TableCaption>
          {courseModules.length <= 0
            ? "Dose Not have any lessions in course"
            : "A list of lessions in course"}
        </TableCaption>
        <TableHeader>
          <TableRow className="py-4">
            <TableHead>Title</TableHead>
            <TableHead className="w-[100px]">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courseLessions.map((lesson) => (
            <TableRow key={lesson.id}>
              <TableCell className="font-medium py-4">
                <Link
                  href={`/creator/dashboard/courses/${lesson.id}/modules/${lesson.id}/lessions`}
                  className="cursor-pointer line-clamp-1 flex gap-3 items-center"
                >
                  <Video />
                  {lesson.title}
                </Link>
              </TableCell>
              <TableCell className="py-4">
                <Link
                  href={`/creator/dashboard/courses/${lesson.id}/modules/${lesson.id}/lessions`}
                  className="cursor-pointer"
                >
                  {lesson.duration} min
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

export default Lessions;
