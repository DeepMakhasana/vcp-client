import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { courseModules } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import CreateModule from "./CreateModule";

const Module = () => {
  return (
    <main className="p-4 md:p-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-medium">Modules</h1>
          <p className="text-sm hidden text-muted-foreground sm:block">
            View and manage course modules
          </p>
        </div>
        <div>
          <CreateModule />
        </div>
      </div>
      <Table className="my-8">
        <TableCaption>
          {courseModules.length <= 0
            ? "Dose Not have any module in course"
            : "A list of modules in course"}
        </TableCaption>
        <TableHeader>
          <TableRow className="py-4">
            <TableHead>Title</TableHead>
            <TableHead className="w-[100px]">Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courseModules.map((module) => (
            <TableRow key={module.id}>
              <TableCell className="font-medium py-4">
                <Link
                  href={`/creator/dashboard/courses/${module.courseId}/modules/${module.id}/lessions`}
                  className="cursor-pointer line-clamp-1"
                >
                  {module.title}
                </Link>
              </TableCell>
              <TableCell className="py-4">
                <Link
                  href={`/creator/dashboard/courses/${module.courseId}/modules/${module.id}/lessions`}
                  className="cursor-pointer"
                >
                  {module.lessonsCount} lessions
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

export default Module;
