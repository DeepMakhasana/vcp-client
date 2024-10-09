"use client";

import TextEditor from "@/components/text-editer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const Courses = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining to handle potential nulls

    if (file) {
      setFileName(file.name);

      // Only proceed if the file is an image
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setImagePreview(reader.result as string); // FileReader result is a string (Data URL)
        };

        reader.readAsDataURL(file); // Read the file as Data URL
      } else {
        setImagePreview(null); // Reset preview if the file is not an image
      }
    } else {
      setFileName(null);
      setImagePreview(null);
    }
  };

  return (
    <main className="grid flex-1 my-4 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4 py-4">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-medium tracking-tight sm:grow-0">
            Create Course
          </h1>
          <Badge variant="outline" className="ml-auto sm:ml-0">
            New
          </Badge>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">Save Course</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle className="font-medium">Courses Details</CardTitle>
                <CardDescription>Main details of course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Title</Label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      placeholder="Course title"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Course description"
                      className="min-h-32"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name">Price</Label>
                    <Input
                      id="name"
                      type="number"
                      className="w-full"
                      placeholder="399.00"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-1">
              <CardHeader>
                <CardTitle className="font-medium">More Details</CardTitle>
                <CardDescription>
                  Expletion of course using some points
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="description">Highlights</Label>
                    <TextEditor />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Learning Outcomes</Label>
                    <TextEditor />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Prerequisites</Label>
                    <TextEditor />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <CardTitle className="font-medium">Courses Status</CardTitle>
                <CardDescription>
                  After complete upload change with live currently select
                  panding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="status">Status</Label>
                    <Select>
                      <SelectTrigger id="status" aria-label="Select status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="panding">Panding</SelectItem>
                        <SelectItem value="live">Live</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle className="font-medium">Courses Image</CardTitle>
                <CardDescription>Upload main thumbnail image</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Image
                    alt="Courses image"
                    className="aspect-square w-full rounded-md object-contain"
                    height="300"
                    src={imagePreview ? imagePreview : "/placeholder.svg"}
                    width="300"
                  />
                  <div className="flex">
                    <div className="flex items-center space-x-2">
                      <Input
                        id="name"
                        type="file"
                        className="w-full"
                        onChange={handleFileChange}
                      />

                      {/* {fileName && (
                        <span className="text-sm text-gray-600">
                          {fileName}
                        </span>
                      )} */}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Courses</Button>
        </div>
      </div>
    </main>
  );
};

export default Courses;
