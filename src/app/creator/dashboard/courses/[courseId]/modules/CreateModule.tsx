import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const CreateModule = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create new</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">
            Create Module
          </DialogTitle>
          <DialogDescription>Add new module in course.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <Label htmlFor="title" className="text-left">
              Title
            </Label>
            <Input
              id="title"
              //   defaultValue="Pedro Duarte"
              className="col-span-3"
              placeholder="Module title"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateModule;
