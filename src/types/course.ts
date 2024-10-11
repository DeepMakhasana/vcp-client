export interface ICourse {
  id: string;
  image: string;
  title: string;
  description: string;
  author: string;
  price: number;
}

export interface ICourseDetails {
  highlights: string;
  learningOutcomes: string;
  prerequisites: string;
}

// export interface ICoursePage extends ICourse, ICourseDetails {}

export type ModuleType = {
  id: number;
  courseId: number;
  title: string;
  lessonsCount: number;
};

export type LessonType = {
  id?: number;
  title: string;
  duration: number;
  video_url?: string;
  moduleId?: number;
};

export interface ICourseContent {
  id: number;
  title: string;
  lessons: LessonType[];
}

export interface ICourseReview {
  id: number;
  image: string;
  name: string;
  time: string;
  rating: number;
  review: string;
}

export type StudentType = {
  id: number;
  name: string;
  email: string;
  number: string;
  purchaseCount: number;
};
