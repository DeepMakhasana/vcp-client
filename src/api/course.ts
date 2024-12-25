import axiosInstance from "@/lib/axiosInstance";
import { endpoints } from ".";
import { ICourseFullDetail, ICourseFullDetailResponse } from "@/types/course";

export async function createCourse(payload: ICourseFullDetail): Promise<ICourseFullDetailResponse> {
  const { data } = await axiosInstance.post(endpoints.course.create, payload);
  return data;
}
