"use client";

import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ArrowUpRight,
  Building2,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import styles from "./contactFrom.module.css";

const ContactFrom = () => {
  const [loader, setLoader] = useState(false);

  const submitFrom = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    const name = document.querySelector<HTMLInputElement>("#name");
    const number = document.querySelector<HTMLInputElement>("#number");
    const course = document.querySelector<HTMLSelectElement>("#course");
    const message = document.querySelector<HTMLTextAreaElement>("#message");

    // @ts-ignore
    const form = document.forms["formData"];

    await fetch(
      "https://script.google.com/macros/s/AKfycbwg3M-3615ePTWvq1kugi9K7nnbXS-zqXsZoGyaAw9FTD0NrNZi7URInNHJyUWZWug/exec",
      {
        method: "POST",
        body: new FormData(form),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.result === "success") {
          setLoader(false);
          toast.success("Message sent successfully. We will contact you shortly.");
        } else {
          setLoader(false);
          toast.error("Please fill the form again because of an error.");
        }
      });

    if (name) name.value = "";
    if (number) number.value = "";
    if (course) course.value = "";
    if (message) message.value = "";
  };

  return (
    <main className={styles.page}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <section id="contact" className={`${styles.contactSection} container`}>
        <div className={styles.intro}>
          <div className={styles.eyebrow}>
            <span>Let&apos;s connect</span>
          </div>
          <h1>Let&apos;s build your next opportunity.</h1>
          <p>
            Get in touch with Param Jewellery CAD Center for course details, software purchases, or expert assistance.
            We&apos;re here to help you take the next step.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <aside className={styles.infoPanel}>
            <div className={styles.infoHeading}>
              <span className={styles.infoLabel}>Find us, call us, or write to us</span>
              <h2>We&apos;re happy to help.</h2>
            </div>

            <div className={styles.branchList}>
              <div className={styles.branch}>
                <div className={styles.infoIcon} aria-hidden="true">
                  <MapPin size={19} strokeWidth={1.8} />
                </div>
                <div>
                  <h3>Kuvadva Road Branch</h3>
                  <a href="https://maps.app.goo.gl/aQXzcHYH51xyvwKW9" target="_blank" rel="noreferrer">
                    Bholenath Arcade, Nr. Ford Service Center, New 80 Feet Road Opp Nagbai Pan Kuvadva Road, Rajkot-3.
                  </a>
                </div>
              </div>

              <div className={styles.branch}>
                <div className={styles.infoIcon} aria-hidden="true">
                  <Building2 size={19} strokeWidth={1.8} />
                </div>
                <div>
                  <h3>Amin Marg Branch</h3>
                  <p>C/o NIFD, Janki Park Main Road, B/H Silver Classic, Amin Marg, Rajkot-1.</p>
                </div>
              </div>
            </div>

            <div className={styles.quickDetails}>
              <a href="tel:+919624000098" className={styles.quickDetail}>
                <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
                <span>+91 9624000098</span>
              </a>
              <a href="mailto:param.cc@gmail.com" className={styles.quickDetail}>
                <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
                <span>param.cc@gmail.com</span>
              </a>
              <div className={styles.quickDetail}>
                <Clock size={18} strokeWidth={1.8} aria-hidden="true" />
                <span>Mon - Sat · 8AM - 8PM</span>
              </div>
            </div>

            <div className={styles.socials}>
              <span>Follow along</span>
              <a href="https://www.instagram.com/param_computer_classes" target="_blank" rel="noreferrer">
                <Instagram size={17} strokeWidth={1.8} aria-hidden="true" />
                Instagram
              </a>
              <a href="https://www.youtube.com/@Param_Computer_Classes" target="_blank" rel="noreferrer">
                <Youtube size={17} strokeWidth={1.8} aria-hidden="true" />
                YouTube
              </a>
            </div>
          </aside>

          <div className={styles.contactForm}>
            {loader ? (
              <div className={styles.loaderContainer}>
                <div className={styles.loader}>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : (
              <div>
                <div className={styles.formHeader}>
                  <div>
                    <span className={styles.formLabel}>Start a conversation</span>
                    <h2>Tell us how we can help</h2>
                  </div>
                  <span className={styles.formNumber}>01</span>
                </div>

                <form onSubmit={submitFrom} method="POST" id="formData">
                  <div className={styles.formRow}>
                    <div className={styles.inputField}>
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className={styles.inputField}>
                      <label htmlFor="number">WhatsApp Number</label>
                      <input
                        type="tel"
                        id="number"
                        name="number"
                        placeholder="10-digit number"
                        title="Please use a 10 digit telephone number with no dashes or dots"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.inputField}>
                    <label htmlFor="course">Course</label>
                    <select id="course" name="course" required>
                      <option value="">Select a course</option>
                      <option value="JewelCAD">JewelCAD 5.1</option>
                      <option value="Rhinoceros">Rhinoceros 3D</option>
                      <option value="ArtCAM">ArtCAM</option>
                      <option value="CorelDRAW">CorelDRAW CNC</option>
                      <option value="ZBrush">ZBrush</option>
                      <option value="DesignGold">DesignGold</option>
                    </select>
                  </div>

                  <div className={styles.inputField}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tell us what you&apos;re looking for..." required />
                  </div>

                  <button type="submit">
                    Send enquiry <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactFrom;
