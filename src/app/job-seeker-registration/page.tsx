import RegistrationForm from "@/components/registrationForm/RegistrationForm";

export const metadata = {
  title: "Job Seeker Registration | Param Jewellery CAD Center",
  description: "Register your jewellery CAD skills and work preferences to connect with suitable job opportunities.",
};

export default function JobSeekerRegistrationPage() {
  return <RegistrationForm kind="job-seeker" />;
}
