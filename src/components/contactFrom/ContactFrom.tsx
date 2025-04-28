"use client";
import { FormEvent, useState } from "react";
import styles from "./contactFrom.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Building2, Clock, Instagram, Mail, Phone, Youtube } from "lucide-react";

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
          toast.success("Message Send Successfully. We are contact you in short time.");
        } else {
          setLoader(false);
          toast.error("Please form fill again because of some error!");
        }
      });

    if (name) name.value = "";
    if (number) number.value = "";
    if (course) course.value = "";
    if (message) message.value = "";
  };
  return (
    <main className="py-10">
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
      {/* <div className="heading">
        <h2 className="heading-style">Contact Us</h2>
        <p>Please feel free to contact us for any inquiries or assistance you may need. We are here to help!</p>
      </div> */}

      <section id="contact" className="container sm:py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <h2 className="text-lg text-primary mb-2 tracking-wider">Contact</h2>

              <h2 className="text-3xl md:text-4xl font-bold">Connect With Us</h2>
            </div>
            <p className="mb-8 text-muted-foreground lg:w-5/6">
              {
                "Get in touch with Param Jewellery CAD Centre today for course details, software purchases, or expert assistance — we are here to help you every step of the way!"
              }
            </p>

            <div className="grid gap-2">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex gap-2 mb-1 items-center">
                    <Building2 className="w-5 h-5" />
                    <h3 className="font-bold">Kuvadva Road Branch</h3>
                  </div>

                  <p>
                    <a href="https://maps.app.goo.gl/aQXzcHYH51xyvwKW9">
                      Bholenath Arcade, Nr. Ford Service Center, New 80 Feet Road Opp Nagbai Pan Kuvadva Road, Rajkot-3.
                    </a>
                  </p>
                </div>

                <div>
                  <div className="flex gap-2 mb-1 items-center">
                    <Building2 className="w-5 h-5" />
                    <h3 className="font-bold">Amin Marg Branch</h3>
                  </div>

                  <p>C/o NIFD, Janki Park Main Road, B/H Silver Classic, Amin Marg, Rajkot-1.</p>
                </div>

                <div>
                  <div className="flex gap-2">
                    <Clock className="w-5 h-5" />
                    <div className="font-bold">Visit us</div>
                  </div>

                  <div>
                    <div>Monday - Saturday</div>
                    <div>8AM - 8PM</div>
                  </div>
                </div>

                <div>
                  <div className="flex gap-2 mb-1 items-center">
                    <Phone className="w-5 h-5" />
                    <p className="font-semibold">+91 9624000098</p>
                  </div>
                </div>

                <div>
                  <div className="flex gap-2 mb-1 items-center">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:param.cc@gmail.com" className="font-semibold">
                      param.cc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex gap-2 mb-1 items-center">
                    <Instagram className="w-5 h-5" />
                    <a
                      href="https://www.instagram.com/param_computer_classes"
                      target="_blank"
                      className="font-semibold"
                    >
                      Instagram
                    </a>
                  </div>
                  <span> | </span>
                  <div className="flex gap-2 mb-1 items-center">
                    <Youtube className="w-5 h-5" />
                    <a href="https://www.youtube.com/@Param_Computer_Classes" target="_blank" className="font-semibold">
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                <form onSubmit={submitFrom} method="POST" id="formData">
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
                      placeholder="WhatsApp Number"
                      title="Please use a 10 digit telephone number with no dashes or dots"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                  <div className={styles.inputField}>
                    <label htmlFor="course">Course</label>
                    <select id="course" name="course" required>
                      <option value="">Select Course</option>
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
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write Message.."
                      style={{ height: "200px" }}
                      required
                    ></textarea>
                  </div>

                  <input type="submit" value="Submit" />
                </form>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
};

export default ContactFrom;
