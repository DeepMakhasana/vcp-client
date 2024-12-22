"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { loginValidationSchema } from "@/schema/auth";
import { loginPayload, loginResponse } from "@/types/auth";
import { creatorLogin } from "@/api/auth";
import { Loader2 } from "lucide-react";
import useAuthContext from "@/context/auth/useAuthContext";

const defaultValues = {
  email: "",
  password: "",
};

const CreatorLoginFrom = () => {
  const { login } = useAuthContext();
  const router = useRouter();

  const form = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues,
  });

  const { reset } = form;

  const { mutate, isPending } = useMutation<loginResponse, Error, loginPayload>({
    mutationKey: ["login"],
    mutationFn: creatorLogin,
    onSuccess: (res) => {
      // reset the input filed
      reset();
      // show the notification
      toast({
        title: "Success:",
        description: res.message,
      });

      // set the token in local
      login(res.token);
      // navigate the route to dashboard
      setTimeout(() => {
        router.replace("/creator/dashboard");
      }, 500);
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

  function onSubmit(values: z.infer<typeof loginValidationSchema>) {
    // ✅ This will be type-safe and validated.
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="creator@email.com" {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your public display name.</FormDescription> */}
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
                  <div className="flex items-center">
                    <FormLabel>Password</FormLabel>
                    <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormDescription>Password must be at least 8 characters long</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {isPending ? (
            <Button disabled>
              <Loader2 className="animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              Login
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default CreatorLoginFrom;
