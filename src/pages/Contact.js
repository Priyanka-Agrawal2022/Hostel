import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.containerDiv}>
        <h2 className={styles.heading}>Contact Us</h2>

        <div className={styles.mainDiv}>
          <div className={styles.left}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114521.9517681308!2d78.0571619972656!3d26.2353302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c16d0b5da90b%3A0x475aa1f3ed427461!2sAsha%20Homes%20Luxury%20Girls%20Hostel!5e0!3m2!1sen!2sin!4v1737153702681!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.right}>
            <h3 className={styles.subHeading}>
              <strong>Asha Homes Luxury Girls Hostel</strong>
            </h3>

            <a href="https://maps.app.goo.gl/MbT7UZxEqbo137ZR7" target="_blank">
              <span class="material-symbols-outlined">location_on</span>
              <span>
                Gole Ka Mandir Rd, above Bajaj gold finance limited office,
                Purshottam Vihar, Hanuman Nagar, Morar, Gwalior, Madhya Pradesh
                474005
              </span>
            </a>

            <a href="tel: +91 8447479080">
              <span class="material-symbols-outlined">call</span>
              <span>+91 8447479080</span>
            </a>

            <a href="mailTo: ashahomeshostel@gmail.com">
              <span class="material-symbols-outlined">mail</span>
              <span>ashahomeshostel@gmail.com</span>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=918447479080"
              target="_blank"
            >
              <i class="fa fa-whatsapp" style={{fontSize: '24px'}}></i>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className={styles.contactImage}>
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMmskrEMGaXjY1J4tzd8vG3uF7t5FurFUgMqy2e=s1360-w1360-h1020"
            alt="contact-image"
          />
        </div>
      </div>
    </>
  );
}
