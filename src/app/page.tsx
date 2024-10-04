import Course from "@/components/course/Course";
import { ICourse } from "@/types/course";

export const coursesData: ICourse[] = [
  {
    id: "docker",
    title: "Docker: Containerization for Modern Development",
    description:
      "In this course, you'll learn how to build, ship, and run applications using containers. We cover all key concepts, including containers, images, networking, volumes, Dockerfile, Docker Compose, AWS ECS and ECR, and auto-scaling. Perfect for developers, IT pros, and teams looking to simplify workflows and boost scalability. Start mastering Docker and modern development today with hands-on projects and real-world examples.",
    author: "Priyus Garg",
    price: 899.0,
    image:
      "https://learn.piyushgarg.dev/_next/image?url=https%3A%2F%2Fdcaj3bhl5hivm.cloudfront.net%2F__courses%2Fbcfa1456-e84f-4483-8cb6-f8cd98a728dc%2FCOURSE_IMAGE%2Fdocker-image-FLlCmt.png&w=640&q=75",
  },
  {
    id: "nextjs",
    title: "Master NextJS 14",
    description:
      'Welcome to "Mastering Next.js 14 Course" a comprehensive course designed to elevate your skills in developing modern web applications using Next.js version 14.',
    author: "Sandipt Gupta",
    price: 1899.0,
    image:
      "https://learn.piyushgarg.dev/_next/image?url=https%3A%2F%2Fdcaj3bhl5hivm.cloudfront.net%2F__courses%2Fbcfa1456-e84f-4483-8cb6-f8cd98a728dc%2FCOURSE_IMAGE%2Fdocker-image-FLlCmt.png&w=640&q=75",
  },
  {
    id: "javascript",
    title: "Javascript in Hindi",
    description:
      "In this course, we will take you on a journey from the very basics of JavaScript to more advanced concepts, equipping you with the knowledge and skills needed to build dynamic web applications. Whether you are a beginner with no prior coding experience or an experienced developer looking to expand your skill set, this course is designed to cater to learners of all levels.",
    author: "Rohit Nisad",
    price: 0.0,
    image:
      "https://learn.piyushgarg.dev/_next/image?url=https%3A%2F%2Fdcaj3bhl5hivm.cloudfront.net%2F__courses%2Fbcfa1456-e84f-4483-8cb6-f8cd98a728dc%2FCOURSE_IMAGE%2Fdocker-image-FLlCmt.png&w=640&q=75",
  },
  {
    id: "nodejs",
    title: "Master NodeJS - Hindi",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server side, creating server-side applications with JavaScript.",
    author: "Priyus Garg",
    price: 999.0,
    image:
      "https://learn.piyushgarg.dev/_next/image?url=https%3A%2F%2Fdcaj3bhl5hivm.cloudfront.net%2F__courses%2Fbcfa1456-e84f-4483-8cb6-f8cd98a728dc%2FCOURSE_IMAGE%2Fdocker-image-FLlCmt.png&w=640&q=75",
  },
  {
    id: "kafka",
    title: "Kafka mastering",
    description:
      "In this course, you'll learn how to build, ship, and run applications using containers. We cover all key concepts, including containers, images, networking, volumes, Dockerfile, Docker Compose, AWS ECS and ECR, and auto-scaling. Perfect for developers, IT pros, and teams looking to simplify workflows and boost scalability. Start mastering Docker and modern development today with hands-on projects and real-world examples.",
    author: "Deep Makhasana",
    price: 899.0,
    image:
      "https://learn.piyushgarg.dev/_next/image?url=https%3A%2F%2Fdcaj3bhl5hivm.cloudfront.net%2F__courses%2Fbcfa1456-e84f-4483-8cb6-f8cd98a728dc%2FCOURSE_IMAGE%2Fdocker-image-FLlCmt.png&w=640&q=75",
  },
  {
    id: "java",
    title: "Master Java with spring boot",
    description:
      "In this course, you'll learn how to build, ship, and run applications using containers. We cover all key concepts, including containers, images, networking, volumes, Dockerfile, Docker Compose, AWS ECS and ECR, and auto-scaling. Perfect for developers, IT pros, and teams looking to simplify workflows and boost scalability. Start mastering Docker and modern development today with hands-on projects and real-world examples.",
    author: "Priyus Garg",
    price: 899.0,
    image:
      "https://learn.piyushgarg.dev/_next/image?url=https%3A%2F%2Fdcaj3bhl5hivm.cloudfront.net%2F__courses%2Fbcfa1456-e84f-4483-8cb6-f8cd98a728dc%2FCOURSE_IMAGE%2Fdocker-image-FLlCmt.png&w=640&q=75",
  },
];

export default function Home() {
  return (
    <section className="px-4 py-8">
      <div className="my-8 flex flex-col items-center gap-3">
        <h1 className="text-3xl">Featured Courses</h1>
        <p className="max-w-3xl text-center text-sm leading-5 text-muted-foreground">
          Join thousands of learners and advance your career with our
          comprehensive courses or Master New Skills with Expert-Led Video
          Courses
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3">
        {coursesData.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
