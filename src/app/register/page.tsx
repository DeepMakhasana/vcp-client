import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StudentRegisterForm from "@/components/auth/StudentRegisterForm";
import Link from "next/link";

function Register() {
  return (
    <section className="flex fullScreenHeight items-center justify-center px-3">
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle className="text-xl">Create an account</CardTitle>
          <CardDescription>Enter your information to sign up.</CardDescription>
        </CardHeader>
        <CardContent>
          <StudentRegisterForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default Register;
