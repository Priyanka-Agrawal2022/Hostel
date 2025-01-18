import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  function year() {
    return new Date().getFullYear();
  }

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.containerDiv}>
          <div className={styles.logoDiv}>
            <Link to="/Hostel/">Asha Homes Luxury Girls Hostel</Link>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://api.whatsapp.com/send?phone=918447479080"
              target="_blank"
            >
              <img
                src="https://queenspg.com/assets/images/whatsapp.png"
                alt="whatsapp"
              />
            </a>
            <a
              href="https://www.facebook.com/share/17pRAs2MUh/"
              target="_blank"
            >
              <img
                src="https://queenspg.com/assets/images/facebook.png"
                alt="facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/ashahomeshostel?igsh=cTJpNmpmdWs5bXNs"
              target="_blank"
            >
              <img
                src="https://queenspg.com/assets/images/insta.png"
                alt="instagram"
              />
            </a>
          </div>
        </div>

        <div className={styles.copyrightDiv}>
          <p>
            {year()} © All rights reserved by Asha Homes Luxury Girls Hostel
          </p>
        </div>
      </footer>
    </>
  );
}
