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

type LessonType = {
  id?: number;
  title: string;
  duration: number;
  video_url: string;
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
