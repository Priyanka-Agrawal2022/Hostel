import styles from "../styles/Gallery.module.css";
import { images } from "../data";

export default function Gallery() {
  return (
    <>
      <div className={styles.containerDiv}>
        <h2 className={styles.heading}>Gallery</h2>

        <div className={styles.galleryDiv}>
          {images.map((url, i) => (
            <img key={i} src={url} alt="gallery-img" />
          ))}
        </div>
      </div>
    </>
  );
}
