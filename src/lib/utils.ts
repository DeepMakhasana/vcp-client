import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { jwtDecode } from "jwt-decode";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function decodeJwtToken(token: string): any | null {
  try {
    const decoded: any = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error("Failed to decode JWT token:", error);
    return null;
  }
}

export function formateDateTime(isoDate: Date | string, onlyDate: boolean = false): string {
  const date = new Date(isoDate);

  if (onlyDate) {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return formatter.format(date);
}
