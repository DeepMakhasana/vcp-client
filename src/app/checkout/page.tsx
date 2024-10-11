import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { coursesData } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

const Checkout = () => {
  const checkoutCourses = coursesData.filter((course, i) => i < 2);
  const totalAmount = checkoutCourses.reduce(
    (acuu, current) => acuu + current.price,
    0
  );
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 px-3 py-8">
        <div className="col-span-2">
          <div className="flex gap-3 items-center py-8">
            <ChevronLeft />
            <h2 className="text-xl font-semibold">Your Checkout</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px] py-4">Image</TableHead>
                <TableHead>Info</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {checkoutCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="py-6">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={200}
                      height={100}
                      className="rounded"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </TableCell>
                  <TableCell className="text-lg font-medium py-6">
                    {course.title}
                  </TableCell>
                  <TableCell className="text-right">₹ {course.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>
          <h2 className="text-xl font-semibold py-8">Summary</h2>
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left py-4">Item</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {checkoutCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="text-sm font-medium py-6">
                      {course.title}
                    </TableCell>
                    <TableCell className="text-right">
                      ₹ {course.price}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className="text-sm font-medium py-6">
                    % Discount
                  </TableCell>
                  <TableCell className="text-right">₹ -120.00 </TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell className="py-4">Total</TableCell>
                  <TableCell className="text-right">
                    ${totalAmount}.00
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            <Button className="block w-full mt-4">Processed and pay</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
