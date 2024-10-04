import { LoaderCircle } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <LoaderCircle className="animate-spin" />
    </div>
  );
};

export default Loader;
