"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { useState } from "react";
import InputOTPForm from "./InputOTPForm";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { Verified } from "lucide-react";
import { decodeJwtToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { userRegisterSchema } from "@/schema/auth";
import {
  sendVerifyEmailPayload,
  sendVerifyEmailResponse,
  userRegisterPayload,
  userRegisterResponse,
} from "@/types/auth";
import { sendVerifyEmail, userRegister } from "@/api/auth";
import { IIsEmailVerify } from "./CreatorRegisterForm";

const defaultValues = {
  name: "",
  email: "",
  mobile: "",
  password: "",
};

const StudentRegisterForm = () => {
  const [isEmailVerified, setIsEmailVerified] = useState<IIsEmailVerify>({ email: "", isVerified: false });
  const router = useRouter();

  // mutation for sending mail for verification
  const EmailOtpMutation = useMutation<sendVerifyEmailResponse, Error, sendVerifyEmailPayload>({
    mutationFn: sendVerifyEmail,
    onSuccess: (data) => {
      if (data.message == "Email address already Verified.") {
        setIsEmailVerified({ email: data.email, isVerified: true });
      } else {
        setIsEmailVerified({ email: data.email, isVerified: false });
      }
      toast({
        title: "Email verification:",
        description: data.message,
      });
    },
    onError: (error) => {
      console.log("error", error);
      toast({
        title: "Student registration error:",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // mutation for sending mail for verification
  const RegisterMutation = useMutation<userRegisterResponse, Error, userRegisterPayload>({
    mutationFn: userRegister,
    onSuccess: (data) => {
      console.log("done", data);
      localStorage.setItem("auth_token", data.token);
      const userData = decodeJwtToken(data.token);
      localStorage.setItem("user", JSON.stringify(userData));
      reset();
      toast({
        title: "Success:",
        description: data.message,
      });
      router.replace("/dashboard");
    },
    onError: (error: any) => {
      console.log("error", error);
      toast({
        title: "Registration warning:",
        description: error?.response.data.message || error.message,
        variant: "destructive",
      });
    },
  });

  const sendVerificationEmailHandle = () => {
    const email = getValues("email");
    if (email) {
      EmailOtpMutation.mutate({ email });
    } else {
      toast({
        title: "Warning",
        description: "Enter email for verification.",
      });
    }
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof userRegisterSchema>>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues,
  });

  const { reset, getValues } = form;

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof userRegisterSchema>) {
    // ✅ This will be type-safe and validated.
    console.log(values);
    if (isEmailVerified.isVerified) {
      RegisterMutation.mutate(values);
    } else {
      toast({
        title: "Warning",
        description: "Email is not verified, first verify.",
      });
    }
  }

  if (isEmailVerified?.email && !isEmailVerified?.isVerified) {
    return (
      <div className="grid gap-4">
        <InputOTPForm isEmailVerified={isEmailVerified} setIsEmailVerified={setIsEmailVerified} />
      </div>
    );
  }
  return (
    <div className="grid gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-2" style={{ marginTop: "0.5rem" }}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name and Surname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2" style={{ marginTop: "0.5rem" }}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input placeholder="Email address" {...field} />
                      <Button size={"default"} type="button" onClick={sendVerificationEmailHandle}>
                        {EmailOtpMutation.isPending ? "Sending.." : "Verify"}
                      </Button>
                    </div>
                  </FormControl>
                  {isEmailVerified.isVerified ? (
                    <FormDescription className="text-green-600 flex items-center gap-1">
                      <Verified className="h-4 w-4" /> Verified
                    </FormDescription>
                  ) : (
                    <FormDescription>First verify email address</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2" style={{ marginTop: "0.5rem" }}>
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile number</FormLabel>
                  <FormControl>
                    <Input placeholder="Mobile number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2" style={{ marginTop: "0.5rem" }}>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your public display name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            {RegisterMutation.isPending ? "Creating..." : "Create an account"}
          </Button>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default StudentRegisterForm;
