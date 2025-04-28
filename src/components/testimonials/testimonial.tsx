"use client";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, User } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  course: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/ronak-kakriya.png",
    name: "Ronak Kakriya",
    course: "Rhinoceros 3D",
    comment:
      "Truly an amazing course with a supportive faculty. The after course support helped me land exciting freelance opportunities quickly and confidently.",
    rating: 4.9,
  },
  {
    image: "/gosai-jalpa.png",
    name: "Gosai Jalpa",
    course: "Rhinoceros 3D",
    comment:
      "Such a valuable experience! The guidance was top-notch, and I got real help finding freelance work after the course ended.",
    rating: 5.0,
  },
  {
    image: "/lunagariya-hemal.png",
    name: "Lunagariya Hemal",
    course: "Rhinoceros 3D",
    comment:
      "A well-structured course with supportive mentors. I was guided step-by-step, even post-course, to land my first freelance jewellery project.",
    rating: 4.8,
  },

  {
    image: "/harshil-movaliya.png",
    name: "Harshit Movaliya",
    course: "JewelCAD 5.1",
    comment:
      "The faculty was incredibly kind and patient. Their continuous support even after the course ended helped me kickstart my design career.",
    rating: 4.9,
  },
  {
    image: "/prince-gamdha.jpeg",
    name: "Prince Gamdha",
    course: "CorelDRAW CNC",
    comment:
      "Incredible learning journey! The faculty was so helpful, and I learn according to CNC machine and I am fully satisfied with trining.",
    rating: 4.9,
  },
  {
    image: "/anjali-rathod.png",
    name: "Anjali Rathod",
    course: "JewelCAD 5.1",
    comment:
      "The dedicated faculty made learning easy. Their after course guidance gave me the confidence to take on freelance jewellery work.",
    rating: 5.0,
  },
  {
    image: "/prem-sareriya.png",
    name: "Prem Sareriya",
    course: "Rhinoceros 3D",
    comment:
      "Super happy with the course! The faculty was inspiring, and the after course help led me to great freelance gigs.",
    rating: 5.0,
  },
  {
    image: "/disha-savakiya.png",
    name: "Disha Savakiya",
    course: "Rhinoceros 3D",
    comment:
      "If you're serious about jewellery design, this is it! Supportive faculty, amazing learning, and real help finding your first job.",
    rating: 4.9,
  },
  {
    image: "/mohit-sorathiya.png",
    name: "Mohit Sorathiya",
    course: "JewelCAD 5.1",
    comment:
      "This course was a game changer. I got full support in learning, job search, and the faculty is truly encouraging.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-12">
      <div className="heading">
        <h2 className="heading-style">Testimonials</h2>
        <p>Hear What Our 500+ Students Say</p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <img src={`/student${review.image}`} alt="test" className="w-12 h-12 rounded-full object-cover" />

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.course}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
