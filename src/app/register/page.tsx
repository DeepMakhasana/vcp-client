import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StudentRegisterForm from "@/components/auth/StudentRegisterForm";

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
        </CardContent>
      </Card>
    </section>
  );
}

export default Register;
