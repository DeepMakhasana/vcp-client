import { TeamSection } from "@/components/team/team";
import styles from "./about.module.css";

export const metadata = {
  title: "Param Jewellery CAD Center | About Us",
  description:
    "Param Jewellery CAD Center began it's journey in 2010 with a vision to train job-focused youth in India and make them employable at affordable fees. We provide Jewellery Designing and Computer Courses with experienced instructors.",
  keywords: "Param Jewellery CAD Center, jewellery designing course in rajkot, jewellery designing",
};

async function About() {
  return (
    <main>
      <div className="heading">
        <h2 className="heading-style">About Us</h2>
        <p>
          We offer a Jewellery Designing Courses with experienced instructors, and a supportive learning and practical
          environment.
        </p>
      </div>
      <div className="bgColor">
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage}>
            <img src="/team/main.png" alt="about" className="rounded bg-slate-200" />
          </div>
          <div className={styles.aboutInfo}>
            <h1>Welcome to Param Jewellery CAD Center</h1>
            <p className={styles.firstPara}>
              Param Jewellery CAD Center began its journey in 2010 with a vision to train the freelance and job-focused
              youth and make them employable at affordable fees. As the industry demands 'skilled manpower', we too,
              expanded our horizon to not just provide practical training to our students but also support them with
              placement at top companies.
            </p>
            <p>
              Param Jewellery CAD Center Running Under Shree Param Education Trust. Trust Reg. No. E-8956. We are Proud
              to be a member of (RSDA) Rajkot Skill Development association & (NSVT) National Society for Vocation
              Training.
            </p>
            <h2>Our Mission</h2>
            <p>
              To provide placement assistance and personalized guidance, helping students explore career opportunities
              and achieve success in the evolving world of jewellery design.
            </p>
          </div>
        </div>
        <div className={styles.points}>
          <h2>Why Join us?</h2>
          <ul>
            <li>13 years of teaching experience as well as jewelry CAD practical work</li>
            <li>Get Government-Approved CAD Certificate</li>
            <li>High Configuration & Licensed Software Computer LAB</li>
            <li>Fire Safety Approved Institute (NOC No. 341)</li>
            <li>Ladies Special Batch & Ladies Faculty</li>
            <li>Affordable Fees Structure & Installment Facility</li>
            <li>Experienced and well-qualified faculty</li>
            <li>100% placement support in Rajkot</li>
            <li>Lifetime support for freelance jewelry CAD work</li>
          </ul>
        </div>
      </div>

      {/* Gallery section START */}
      <TeamSection />
      {/* Gallery section END */}
    </main>
  );
}

export default About;
