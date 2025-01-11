import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.mainFooterContainer}>
        <div className={styles.CoursesLink}>
          <h3>Courses</h3>
          <ul>
            {/* <h4>Jewellery Designing Courses</h4> */}
            <li>
              <Link href="/courses/jewelcad">JewelCAD 5.1</Link>
            </li>
            <li>
              <Link href="/courses/rhinoceros">Rhinoceros</Link>
            </li>
            <li>
              <Link href="/courses/coreldraw">CorelDRAW CNC</Link>
            </li>
            {/* <h4>Accounting Courses</h4> */}
            <li>
              <Link href="/courses/tally">Tally Prime</Link>
            </li>
            <li>
              <Link href="/courses/miracle">Miracle</Link>
            </li>
            {/* <h4>Computer Concepts Course</h4> */}
            <li>
              <Link href="/courses/ccc">CCC</Link>
            </li>
          </ul>
        </div>
        <div className={styles.navigational}>
          <h3>Navigational</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/sales-service">Sales & Service</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/terms-condition">Terms & Condition</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
          </ul>
        </div>
        <div className={styles.contactInformation}>
          <div>
            <h3>Address</h3>
            <h4>Kuvadva Road Branch</h4>
            <p>
              <img src={"/location.svg"} alt="location" style={{ width: "16px", height: "16px" }} className="inline" />{" "}
              Bholenath Arcade, Nr. Ford Service Center, New 80 Feet Road Opp Nagbai Pan Kuvadva Road, Rajkot-3.
            </p>
            <h4>Amin Marg Branch</h4>
            <p>
              <img src={"/location.svg"} alt="location" style={{ width: "16px", height: "16px" }} className="inline" />{" "}
              C/o INIFD, Janki Park Main Road, B/H Silver Classic, Amin Marg, Rajkot-1.
            </p>
            <p className={styles.align}>
              <img src={"/contact.svg"} alt="contact" style={{ width: "16px", height: "16px" }} /> +91 9624000098{" "}
            </p>
            <p className={styles.align}>
              <img src={"/email.svg"} alt="contact" style={{ width: "16px", height: "16px" }} />
              <a href="mailto:param.cc@gmail.com">param.cc@gmail.com</a>
            </p>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.111701180203!2d70.8204392!3d22.3116149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b6066057d63d%3A0xd79806394daed54d!2sParam%20Computer%20Classes!5e0!3m2!1sen!2sin!4v1685532160829!5m2!1sen!2sin"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.lastFooter}>
        <p>
          © {year} Param Computer Classes, All Right Reserved. Designed By{" "}
          <Link href="https://deepmakhasana.netlify.app/">Deep Makhasana</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
