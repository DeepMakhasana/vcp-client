"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [["bold", "italic"], [{ list: "bullet" }]],
  };

  const handleChange = (value: string) => {
    setContent(value);
  };
  return (
    <div className="w-full my-2">
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        theme="snow"
        className="h-40 text-lg"
      />

      <div className="output mt-14 border p-3">
        <h2 className="mb-3">Output:</h2>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-sm text-muted-foreground"
        />
      </div>
    </div>
  );
};

export default TextEditor;
