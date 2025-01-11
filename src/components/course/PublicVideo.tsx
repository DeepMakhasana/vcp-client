"use client";

import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import PublicVideoPlayer from "./PublicVideoPlayer";

const PublicVideo = ({ title, url }: { title: string; url: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-sm font-normal cursor-pointer">
          {title} - <span className="underline">preview</span>
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[768px]">
        <div className="py-4">
          <div className="bg-slate-400 my-5">
            <PublicVideoPlayer url={url} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PublicVideo;
