import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CreatorRegisterForm from "@/components/auth/CreatorRegisterForm";

function Register() {
  return (
    <section className="flex items-center justify-center px-3 fullScreenHeight">
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle className="text-xl">Creator Registration</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <CreatorRegisterForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/creator/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default Register;
