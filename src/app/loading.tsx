import { LoaderCircle } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center py-8">
      <LoaderCircle className="animate-spin" />
    </div>
  );
};

export default Loading;
