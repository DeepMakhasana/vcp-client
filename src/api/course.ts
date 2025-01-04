import axiosInstance from "@/lib/axiosInstance";
import { endpoints } from ".";
import {
  CourseCheckoutType,
  ICourseFullDetail,
  ICourseFullDetailResponse,
  IPurchaseCoursePayload,
  IPurchaseCourseResponse,
  IPurchaseCoursesResponse,
} from "@/types/course";

export async function createCourse(payload: ICourseFullDetail): Promise<ICourseFullDetailResponse> {
  const { data } = await axiosInstance.post(endpoints.course.create, payload);
  return data;
}

export async function getCourseBySlug(slug: string): Promise<CourseCheckoutType> {
  const { data } = await axiosInstance.get(`${endpoints.course.create}/slug/${slug}`);
  return data;
}

export async function purchaseCourse(payload: IPurchaseCoursePayload): Promise<IPurchaseCourseResponse> {
  const { data } = await axiosInstance.post(endpoints.purchase.main, payload);
  return data;
}

export async function getPurchaseCourses(): Promise<IPurchaseCoursesResponse[]> {
  const { data } = await axiosInstance.get(`${endpoints.purchase.main}`);
  return data;
}
