// utils/axiosInstance.js
import axios from "axios";

export const BASEURL = "http://localhost:8000/api";

const axiosInstance = axios.create({
  baseURL: BASEURL, // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
  // Add other settings like timeout, interceptors, etc., if needed
});

export default axiosInstance;
