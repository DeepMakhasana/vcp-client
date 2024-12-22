"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { creatorRegisterSchema } from "@/schema/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { creatorRegister, sendVerifyOtpEmail } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { registerPayload, registerResponse, sendVerifyEmailPayload, sendVerifyEmailResponse } from "@/types/auth";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Verified } from "lucide-react";
import InputOTPForm from "./InputOTPForm";
import useAuthContext from "@/context/auth/useAuthContext";
import { useRouter } from "next/navigation";

export interface IIsEmailVerify {
  email: string;
  isVerified: boolean;
}

const CreatorRegisterForm = () => {
  const [isEmailVerified, setIsEmailVerified] = useState<IIsEmailVerify>({ email: "", isVerified: false });
  const [step, setStep] = useState<boolean>(false); // first step is denoted by "false" and second step is denoted by "true"
  const { login } = useAuthContext();
  const router = useRouter();

  const form = useForm<z.infer<typeof creatorRegisterSchema>>({
    resolver: zodResolver(creatorRegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      password: "",
      domain: "",
      bio: "",
      role: "",
    },
  });

  const { reset, getValues } = form;

  // email verification mutation
  const { mutate: sendVerificationMutate, isPending } = useMutation<
    sendVerifyEmailResponse,
    Error,
    sendVerifyEmailPayload
  >({
    mutationKey: ["sendVerificationOtpEmail"],
    mutationFn: sendVerifyOtpEmail,
    onSuccess: (res) => {
      console.log("res", res);
      if (res.message == "Email address already Verified.") {
        setIsEmailVerified({ email: res.email, isVerified: true });
      } else {
        setIsEmailVerified({ email: res.email, isVerified: false });
      }
      toast({
        title: "Success:",
        description: res.message,
      });
    },
    onError: (error: any) => {
      console.log("request fail: ", error);
      toast({
        title: "Creator register warning:",
        description: error?.response?.data?.message || error.message,
        variant: "destructive",
      });
    },
  });

  const { mutate: registrationMutate, isPending: isRegistrationPending } = useMutation<
    registerResponse,
    Error,
    registerPayload
  >({
    mutationKey: ["registration"],
    mutationFn: creatorRegister,
    onSuccess: (res) => {
      // reset the input filed
      reset();
      // show the notification
      toast({
        title: "Creator register warning:",
        description: res.message,
      });
      // set the token in local
      login(res.token);
      setTimeout(() => {
        router.replace("/creator/dashboard");
      }, 500);
    },
    onError: (error: any) => {
      console.log("request fail: ", error);
      toast({
        title: "Login warning:",
        description: error?.response.data.message || error.message,
        variant: "destructive",
      });
    },
  });

  // email verification handler
  function handelEmailVerification() {
    const email = getValues("email");
    sendVerificationMutate({ email });
  }

  function handelNextStep() {
    if (isEmailVerified.isVerified) {
      setStep(true);
    } else {
      toast({
        title: "Warning:",
        description: "Please first verify the email address",
      });
    }
  }

  function onSubmit(values: z.infer<typeof creatorRegisterSchema>) {
    const { firstName, lastName, number, password, domain, bio, role } = values;
    console.log("verified: ", isEmailVerified);
    if (isEmailVerified.isVerified) {
      registrationMutate({
        name: `${firstName} ${lastName}`,
        email: isEmailVerified.email,
        password,
        mobile: number,
        domain,
        bio,
        role,
      });
    } else {
      toast({
        title: "Warning:",
        description: "Please first verify the email address",
      });
    }
  }

  if (isEmailVerified?.email && !isEmailVerified?.isVerified) {
    return <InputOTPForm isEmailVerified={isEmailVerified} setIsEmailVerified={setIsEmailVerified} />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* step one of registration */}
        {!step && (
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input placeholder="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input placeholder="surname" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 items-end">
              <div className={`grid gap-2 ${isEmailVerified?.isVerified ? "col-span-3" : "col-span-2"} `}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="creator@email.com" {...field} />
                      </FormControl>
                      {isEmailVerified?.isVerified && (
                        <FormDescription className="text-green-600 flex items-center gap-1">
                          <Verified className="h-4 w-4" /> Verified
                        </FormDescription>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {!isEmailVerified?.isVerified && (
                <Button type="button" onClick={handelEmailVerification} className="w-full" disabled={isPending}>
                  {/* verify */}
                  {isPending ? "Sending..." : "Verify"}
                </Button>
              )}
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="whatsapp number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="password" {...field} />
                    </FormControl>
                    <FormDescription>Password must be strong and at least 8 characters long.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="button" onClick={handelNextStep} className="w-full">
              {/* verify */}
              Next
            </Button>
          </div>
        )}

        {/* step two of registration */}
        {step && (
          <div className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="domain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Domain</FormLabel>
                    <FormControl>
                      <Input placeholder="example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea rows={4} placeholder="Tell us a little bit about yourself" {...field} />
                    </FormControl>
                    <FormDescription>brief introduction of yourself</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Input placeholder="ex. Graphic designer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <Button type="button" onClick={() => setStep(false)}>
                Previous
              </Button>

              {isRegistrationPending ? (
                <Button disabled>
                  <Loader2 className="animate-spin" />
                  Creating...
                </Button>
              ) : (
                <Button type="submit">Register</Button>
              )}
            </div>
          </div>
        )}
      </form>
    </Form>
  );
};

export default CreatorRegisterForm;
