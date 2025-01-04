export {};

declare global {
  interface Window {
    hls: Hls | null;
  }
}
