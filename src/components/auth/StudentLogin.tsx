"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { decodeJwtToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { userLoginSchema } from "@/schema/auth";
import { userLoginPayload, userRegisterResponse } from "@/types/auth";
import { userLogin } from "@/api/auth";

const defaultValues = {
  email: "",
  password: "",
};

const StudentLoginForm = () => {
  const router = useRouter();

  // mutation for sending mail for verification
  const loginMutation = useMutation<userRegisterResponse, Error, userLoginPayload>({
    mutationFn: userLogin,
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
        title: "Login warning:",
        description: error?.response.data.message || error.message,
        variant: "destructive",
      });
    },
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof userLoginSchema>>({
    resolver: zodResolver(userLoginSchema),
    defaultValues,
  });

  const { reset } = form;

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof userLoginSchema>) {
    // ✅ This will be type-safe and validated.
    console.log(values);
    loginMutation.mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-1">
        <div className="grid gap-2" style={{ marginTop: "0.5rem" }}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
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
          <Link href={"/forgot-password"} className="flex justify-end text-xs underline mb-3">
            Forgot password
          </Link>
        </div>
        <Button type="submit" className="w-full">
          {loginMutation.isPending ? "Login..." : "Login"}
        </Button>
      </form>
    </Form>
  );
};

export default StudentLoginForm;
