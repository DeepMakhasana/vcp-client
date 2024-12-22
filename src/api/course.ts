import axiosInstance from "@/lib/axiosInstance";
import { endpoints } from ".";
import { ICourseFullDetail, ICourseFullDetailResponse } from "@/types/course";

export async function createCourse(payload: ICourseFullDetail): Promise<ICourseFullDetailResponse> {
  const { data } = await axiosInstance.post(endpoints.course.create, payload, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkFtaSBNYWtoYXNhbmEiLCJlbWFpbCI6ImRlZXBtYWtoYXNhbmEuZGV2QGdtYWlsLmNvbSIsIm1vYmlsZSI6IjcwNDM0NDczOTciLCJpbWFnZSI6Imh0dHBzOi8vaW1nLmZyZWVwaWsuY29tL2ZyZWUtcHNkLzNkLWlsbHVzdHJhdGlvbi1wZXJzb24td2l0aC1zdW5nbGFzc2VzXzIzLTIxNDk0MzYxODguanBnP3NpemU9MzM4JmV4dD1qcGcmZ2E9R0ExLjEuMjAwODI3MjEzOC4xNzI4MTcyODAwJnNlbXQ9YWlzX2h5YnJpZCIsImRvbWFpbiI6InBhcmFtY2FkY2VudGVyLmNvbSIsImJpbyI6IkhlbGxvIGV2ZXJ5b25lLCBNeSBzZWxmIERlZXAgTWFraGFzYW5hIGluIHRoZSBwcm9mZXNzaW9uIEkgYW0gYSBmdWxsLXN0YWNrIHNvZnR3YXJlIGRldmVsb3BlciBhbmQgZW50cmVwcmVuZXVyLiIsInJvbGUiOiJTb2Z0d2FyZSBEZXZlbG9wZXIiLCJjcmVhdGVkQXQiOiIyMDI0LTExLTA5VDE1OjQ4OjM5LjEzNVoiLCJ1cGRhdGVkQXQiOiIyMDI0LTExLTEwVDAzOjU5OjEzLjMxOVoiLCJ1c2VyUm9sZSI6ImNyZWF0b3IiLCJpYXQiOjE3MzE2OTIzMzh9.fSFpv8oRn7VKL-cKtaR7tShERZoyz20f9xLTqzoV420",
    },
  });
  return data;
}
