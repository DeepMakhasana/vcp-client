import {
  ICourse,
  ICourseContent,
  ICourseDetails,
  ICourseReview,
  LessonType,
  ModuleType,
} from "@/types/course";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const courseDetails: ICourseDetails = {
  highlights:
    '<ul role="list"><li>Hands-on Projects: Practical, real-world projects to reinforce your learning.</li><li>AWS Integration: Deploy containers on AWS using ECS and ECR.</li><li>Auto-scaling Techniques with AWS Auto Scaling Groups</li><li>Container Load balancing and Deployment strategies</li><li>Lifetime Access</li></ul>',
  learningOutcomes:
    '<ul role="list" class="list-image-checkmark"><li>Fundamentals of Docker Containers and Images</li><li>Master Docker Networking</li><li>Dockerfile Configurations</li><li>Container Orchestration with ECS and ECR</li><li>Docker Compose for development environments</li></ul>',
  prerequisites:
    '<ul role="list" class="list-image-checkmark"><li>Basics knowledge of Computer Programming</li></ul>',
};

export const courseContent: ICourseContent[] = [
  {
    id: 1,
    title: "Introduction to docker",
    lessons: [
      {
        title: "Introduction",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Private Discord Invite",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
    ],
  },
  {
    id: 2,
    title: "Docker Command Line Interface",
    lessons: [
      {
        title: "Introduction",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Private Discord Invite",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
    ],
  },
  {
    id: 3,
    title: "Docker Custom Images",
    lessons: [
      {
        title: "Introduction",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Private Discord Invite",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Private Discord Invite",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Private Discord Invite",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
    ],
  },
  {
    id: 4,
    title: "Docker Networking",
    lessons: [
      {
        title: "Introduction",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Private Discord Invite",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
    ],
  },
  {
    id: 5,
    title: "Docker Volumes",
    lessons: [
      {
        title: "Introduction",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Private Discord Invite",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
    ],
  },
  {
    id: 6,
    title: "Docker Compose",
    lessons: [
      {
        title: "Introduction",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Private Discord Invite",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Problem of Multiple Dev Env Setup",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
    ],
  },
  {
    id: 7,
    title: "Docker Orchestration",
    lessons: [
      {
        title: "Introduction",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        title: "Private Discord Invite",
        duration: 1,
        video_url:
          "https://teachyst-v2-production-private.s3.ap-south-1.amazonaws.com/__course/5b46d5c8-3f2c-4c5f-a47a-ecdaa2fabc65/__assets/498d26f9-6834-4459-9481-dce75d7ee6d5/__videos/video-480p.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS7XRSUQCFGS4XKMV%2F20241004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241004T113549Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBPu8t%2FTC%2FIL3A7LQHNG1%2B22VPyADUnW1adTDxSOM435wIgK9VbMsX33ZRVp6IyFzXh6%2B5HlhUeosYi8pBvxrFPntEq9QMI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDU1OTEzMjM2NTIiDIBVMcykvh04r84%2FvSrJAyxV5iF7WA5DJIjxb%2Fbr%2B4kzBFdxxNVuLCW652G%2B6tRKheIHceXmIzirIMrdxnmrRuE58v9xzfoFqnfponVthTb6svp23Rn64QrqKPoHUV5D9g19BR2x1JG5oE4dklNXStDMws6eZTroxDIdWH9y4sH%2BabpcKQ8sg5njjcK6Td3aw9mtPUCiO%2Ftbzu7BrGD2%2FuK%2F3YG%2FInkE43X9s12KuhWSeupXdO9xO4ZAhAchyJ2EmUogHyBI%2F%2BmJaP0fupb0rLQRldwypP47MuTPBWqmseDF%2Fte1ytS8Dbi72GIDm5jLoDCIQFiyQWdR9li5Fn8xCupYwbvOOxvGg%2F6NeCj01R7JqskRND95bnL8%2BYAkSVFw4ET7NNlMLRQ%2BRz7V5wx8JDra%2BJDfvfrJqUCzkFdptKM74%2FVDeCtZiRnB6bPwBx3blKx8YSE9urtyw7srg2geH49jV8eFzPK8zrXvcRLTQNfLKG%2Blf14BMPDXRc3oBkRLSlyKYf69SBPrGan%2Fjgl4t0O%2BVYix9iGhAwqoaFArERU4hS%2BhpxQWyEVb%2F2lzm5zZ83UAKVIMX48nIH0FKmSzY%2BTLxI3JjFN5uLE%2FIol70B41JOUXbcSz2Y0ws%2Bv%2BtwY6pgG3VwkSqVDHFXEVDe%2FJyhcNqeOEwYCTQdis2Lk%2F%2BqMnTOwoR96Lhkw7PYd8KajTtt%2BzRmtSFMFdf0v%2FLCnxSyDtVcPe4knjZDqVOTGrcQeFOVpjNOQ7hdpAE2FObRv6m197oHbjH3vuCV2XjnFGxc5zZp%2B0Ds3Bi5VMQ8MBmpMX9ZXZsbojkC9m4TvthjFlmXDdj%2F%2B%2FUN5YTO5Olp%2FCF9WWgtmtiDGA&X-Amz-Signature=80a7fac74079139c602042c4f173f813c01e4e117ffc6636375734be8648c4f4&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
    ],
  },
];

export const courseReviews: ICourseReview[] = [
  {
    id: 1,
    image:
      "https://pro.piyushgarg.dev/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKmC0KfiQy0o11QA1kjVCn7E1lkX-L0ooaGx1CjXKy38uRbXFBYMA%3Ds96-c&w=64&q=75",
    name: "Muthu",
    time: "1 Oct 2024 4:20 PM",
    rating: 4.0,
    review:
      "I liked the in-depth explanation provided by Piyush. He explained how to use Docker CLI as docs, which is awesome. Highly recommended course on Docker.",
  },
  {
    id: 1,
    image:
      "https://pro.piyushgarg.dev/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKmC0KfiQy0o11QA1kjVCn7E1lkX-L0ooaGx1CjXKy38uRbXFBYMA%3Ds96-c&w=64&q=75",
    name: "Muthu",
    time: "1 Oct 2024 4:20 PM",
    rating: 3.0,
    review:
      "I liked the in-depth explanation provided by Piyush. He explained how to use Docker CLI as docs, which is awesome. Highly recommended course on Docker.",
  },
  {
    id: 1,
    image:
      "https://pro.piyushgarg.dev/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKmC0KfiQy0o11QA1kjVCn7E1lkX-L0ooaGx1CjXKy38uRbXFBYMA%3Ds96-c&w=64&q=75",
    name: "Muthu",
    time: "1 Oct 2024 4:20 PM",
    rating: 5.0,
    review:
      "I liked the in-depth explanation provided by Piyush. He explained how to use Docker CLI as docs, which is awesome. Highly recommended course on Docker.",
  },
  {
    id: 1,
    image:
      "https://pro.piyushgarg.dev/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKmC0KfiQy0o11QA1kjVCn7E1lkX-L0ooaGx1CjXKy38uRbXFBYMA%3Ds96-c&w=64&q=75",
    name: "Muthu",
    time: "1 Oct 2024 4:20 PM",
    rating: 2.0,
    review:
      "I liked the in-depth explanation provided by Piyush. He explained how to use Docker CLI as docs, which is awesome. Highly recommended course on Docker.",
  },
  {
    id: 1,
    image:
      "https://pro.piyushgarg.dev/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKmC0KfiQy0o11QA1kjVCn7E1lkX-L0ooaGx1CjXKy38uRbXFBYMA%3Ds96-c&w=64&q=75",
    name: "Muthu",
    time: "1 Oct 2024 4:20 PM",
    rating: 5.0,
    review:
      "I liked the in-depth explanation provided by Piyush. He explained how to use Docker CLI as docs, which is awesome. Highly recommended course on Docker.",
  },
  {
    id: 1,
    image:
      "https://pro.piyushgarg.dev/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKmC0KfiQy0o11QA1kjVCn7E1lkX-L0ooaGx1CjXKy38uRbXFBYMA%3Ds96-c&w=64&q=75",
    name: "Muthu",
    time: "1 Oct 2024 4:20 PM",
    rating: 3.0,
    review:
      "I liked the in-depth explanation provided by Piyush. He explained how to use Docker CLI as docs, which is awesome. Highly recommended course on Docker.",
  },
];

export const courseModules: ModuleType[] = [
  {
    id: 1,
    courseId: 1,
    title: "Introduction to docker",
    lessonsCount: 4,
  },
  {
    id: 2,
    courseId: 1,
    title: "Docker images",
    lessonsCount: 6,
  },
  {
    id: 3,
    courseId: 1,
    title: "Docker container",
    lessonsCount: 2,
  },
  {
    id: 4,
    courseId: 1,
    title: "Docker orchetaion",
    lessonsCount: 7,
  },
  {
    id: 5,
    courseId: 1,
    title: "Docker file",
    lessonsCount: 3,
  },
];

export const courseLessions: LessonType[] = [
  {
    id: 1,
    moduleId: 1,
    title: "Why use docker?",
    duration: 4,
  },
  {
    id: 2,
    moduleId: 1,
    title: "How to install and use docker images",
    duration: 6,
  },
  {
    id: 3,
    moduleId: 1,
    title: "How to build docker container",
    duration: 2,
  },
  {
    id: 4,
    moduleId: 1,
    title: "Why docker orchetaion is use",
    duration: 7,
  },
  {
    id: 5,
    moduleId: 1,
    title: "How to create docker compose file",
    duration: 3,
  },
];