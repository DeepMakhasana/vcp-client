"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Building2, CheckCircle2, Mail, Phone } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./registrationForm.module.css";

type RegistrationKind = "job-seeker" | "company";

type RegistrationFormProps = {
  kind: RegistrationKind;
};

const details = {
  "job-seeker": {
    eyebrow: "Career registration",
    title: "Find the right place for your jewellery CAD skills.",
    description:
      "Share your profile with Param Jewellery CAD Center. We will contact you before sharing your details with suitable companies.",
    formLabel: "Job seeker form",
    formTitle: "Tell us about your experience",
    submitLabel: "Register as a job seeker",
    sideLabel: "Your next opportunity",
    sideTitle: "Let the right employers find you.",
    sideText:
      "Register your profile so we can understand your software skills, experience, and preferred way of working.",
  },
  company: {
    eyebrow: "Hiring requirement",
    title: "Connect with jewellery CAD professionals.",
    description:
      "Tell us about your hiring requirement and we will help you connect with suitable candidates from our network.",
    formLabel: "Company requirement form",
    formTitle: "Tell us who you need",
    submitLabel: "Submit hiring requirement",
    sideLabel: "Build your team",
    sideTitle: "Find talent with the skills you need.",
    sideText:
      "Share the role, software requirements, and experience level. We will use these details to identify suitable profiles.",
  },
};

const softwareOptions = ["Rhino", "JFR", "Matrix Gold", "JewelCAD", "RhinoGold", "ZBrush", "Other"];

const RegistrationForm = ({ kind }: RegistrationFormProps) => {
  const [loader, setLoader] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const content = details[kind];

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setLoader(true);

    try {
      const formData = new FormData(form);

      // Apps Script's e.parameter keeps only the first value for repeated keys.
      // Store the selected software as one comma-separated value instead.
      ["skills", "requiredSoftware"].forEach((fieldName) => {
        const selectedValues = formData.getAll(fieldName).map(String).filter(Boolean);
        if (selectedValues.length > 0) formData.set(fieldName, selectedValues.join(", "));
      });

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw7_nYA-JW_w_BtkRwkCmOwpDj602xvuAAH8jYUeAOtEVaDAvz131aD7A_e8VgjvHo/exec",
        { method: "POST", body: formData }
      );
      const result = await response.json();

      if (result.result === "success") {
        form.reset();
        toast.success("Registration submitted successfully. We will contact you shortly.");
      } else {
        toast.error("We could not submit your details. Please try again.");
      }
    } catch {
      toast.error("We could not submit your details. Please check your connection and try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <main className={styles.page}>
      <ToastContainer position="top-right" autoClose={5000} pauseOnFocusLoss draggable pauseOnHover />

      <section className={`${styles.registrationSection} container`}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>

        <div className={styles.registrationGrid}>
          <aside className={styles.infoPanel}>
            <span className={styles.infoLabel}>{content.sideLabel}</span>
            <h2>{content.sideTitle}</h2>
            <p>{content.sideText}</p>

            <div className={styles.benefits}>
              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Details handled with care</span>
              </div>
              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Focused on jewellery CAD roles</span>
              </div>
              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Our team will follow up with you</span>
              </div>
            </div>

            <div className={styles.contactDetails}>
              <a href="tel:+919624000098"><Phone size={18} aria-hidden="true" /> +91 9624000098</a>
              <a href="mailto:param.cc@gmail.com"><Mail size={18} aria-hidden="true" /> param.cc@gmail.com</a>
            </div>
          </aside>

          <div className={styles.formPanel}>
            {loader ? (
              <div className={styles.loaderContainer} aria-label="Submitting registration">
                <span className={styles.loader} />
              </div>
            ) : (
              <>
                <div className={styles.formHeader}>
                  <div>
                    <span className={styles.formLabel}>{content.formLabel}</span>
                    <h2>{content.formTitle}</h2>
                  </div>
                  {kind === "job-seeker" ? <BriefcaseBusiness aria-hidden="true" /> : <Building2 aria-hidden="true" />}
                </div>

                <form ref={formRef} onSubmit={submitForm}>
                  <input type="hidden" name="formType" value={kind === "job-seeker" ? "Job Seeker Registration" : "Company Hiring Requirement"} />
                  {kind === "job-seeker" ? <JobSeekerFields /> : <CompanyFields />}
                  <button type="submit">
                    {content.submitLabel} <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

const JobSeekerFields = () => (
  <>
    <div className={styles.formRow}>
      <Field label="Full Name" name="fullName" placeholder="Your full name" />
      <Field label="Mobile / WhatsApp Number" name="mobileNumber" type="tel" placeholder="10-digit number" pattern="[0-9]{10}" />
    </div>
    <div className={styles.formRow}>
      <Field label="Email Address" name="email" type="email" placeholder="you@example.com" />
      <Field label="City / Current Location" name="currentLocation" placeholder="City, State" />
    </div>
    <div className={styles.formRow}>
      <Select label="Total Work Experience / Fresher" name="experience" placeholder="Select experience" options={["Fresher", "Less than 1 year", "1–3 years", "3–5 years", "5+ years"]} />
      <Select label="Jewellery CAD Software Knowledge" name="cadKnowledge" placeholder="Select level" options={["Beginner", "Intermediate", "Advanced", "Expert"]} />
    </div>
    <CheckGroup label="Skills" name="skills" options={softwareOptions} />
    <Select label="Preferred Job Location / Freelancing" name="workPreference" placeholder="Select your preference" options={["On-site role", "Remote / Freelance", "Either on-site or freelance"]} />
    <TextArea label="Additional Information" name="additionalInformation" placeholder="Add portfolio links, availability, or anything else employers should know" />
    <label className={styles.consent}>
      <input type="checkbox" name="consent" value="agreed" required />
      <span>I agree that my registration details may be shared with suitable companies after my permission.</span>
    </label>
  </>
);

const CompanyFields = () => (
  <>
    <div className={styles.formRow}>
      <Field label="Company / Business Name" name="companyName" placeholder="Your company name" />
      <Field label="Contact Person Name" name="contactPerson" placeholder="Full name" />
    </div>
    <div className={styles.formRow}>
      <Field label="Mobile / WhatsApp Number" name="mobileNumber" type="tel" placeholder="10-digit number" pattern="[0-9]{10}" />
      <Field label="Email Address" name="email" type="email" placeholder="you@company.com" />
    </div>
    <div className={styles.formRow}>
      <Field label="Company City" name="companyCity" placeholder="City, State" />
      <Field label="Number of Vacancies" name="vacancies" type="number" placeholder="e.g. 2" min="1" />
    </div>
    <CheckGroup label="Required Software" name="requiredSoftware" options={softwareOptions} />
    <div className={styles.formRow}>
      <Select label="Required Experience / Fresher" name="requiredExperience" placeholder="Select requirement" options={["Fresher welcome", "Less than 1 year", "1–3 years", "3–5 years", "5+ years"]} />
      <Select label="Job Type" name="jobType" placeholder="Select job type" options={["Full-time", "Part-time", "Freelance"]} />
    </div>
    <TextArea label="Additional Requirements" name="additionalRequirements" placeholder="Share role responsibilities, salary range, joining timeline, or other requirements" />
  </>
);

type FieldProps = { label: string; name: string; placeholder: string; type?: string; pattern?: string; min?: string };

const Field = ({ label, name, placeholder, type = "text", pattern, min }: FieldProps) => (
  <div className={styles.inputField}>
    <label htmlFor={name}>{label}</label>
    <input id={name} name={name} type={type} placeholder={placeholder} pattern={pattern} min={min} required />
  </div>
);

const Select = ({ label, name, placeholder, options }: { label: string; name: string; placeholder: string; options: string[] }) => (
  <div className={styles.inputField}>
    <label htmlFor={name}>{label}</label>
    <select id={name} name={name} defaultValue="" required>
      <option value="" disabled>{placeholder}</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  </div>
);

const CheckGroup = ({ label, name, options }: { label: string; name: string; options: string[] }) => (
  <fieldset className={styles.checkGroup}>
    <legend>{label}</legend>
    <div>
      {options.map((option) => (
        <label key={option}>
          <input type="checkbox" name={name} value={option} />
          <span>{option}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

const TextArea = ({ label, name, placeholder }: { label: string; name: string; placeholder: string }) => (
  <div className={styles.inputField}>
    <label htmlFor={name}>{label}</label>
    <textarea id={name} name={name} placeholder={placeholder} />
  </div>
);

export default RegistrationForm;
