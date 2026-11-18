import RegistrationForm from "@/components/registrationForm/RegistrationForm";

export const metadata = {
  title: "Company Hiring Requirement | Param Jewellery CAD Center",
  description: "Submit your jewellery CAD hiring requirement and connect with suitable professionals.",
};

export default function CompanyHiringRequirementPage() {
  return <RegistrationForm kind="company" />;
}
