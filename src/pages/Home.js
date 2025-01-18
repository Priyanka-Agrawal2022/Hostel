import styles from "../styles/Home.module.css";
import { reviews } from "../data";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.left}>
          <h3>Hostel for Women</h3>
          <h2>Affordable and Comfortable Living Experience</h2>
          <button className={styles.button}>
            <Link to="gallery">Open Gallery</Link>
          </button>
        </div>
        <div className={styles.right}>
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipNJnL3jXkA3E28ocsarN4QKvCDgdMXjzPtN6D0p=s1360-w1360-h1020"
            alt="image"
          />
        </div>
      </div>

      <div className={styles.reviewsDiv}>
        <h2 className={styles.reviewsHeading}>Reviews</h2>
        <h3 className={styles.reviewsSubHeading}>What people say</h3>

        <div className={styles.reviewsContainer}>
          {reviews.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.upper}>
                <img
                  src="https://queenspg.com/assets/images/user-icon.png"
                  alt="pic"
                />
                <h4 className={styles.name}>{r.name}</h4>
              </div>
              <div className={styles.lower}>{r.content}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
