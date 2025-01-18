import styles from "../styles/Gallery.module.css";
import { images } from "../data";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  function preview(url) {
    setSelectedImage(url);
  }

  function close() {
    setSelectedImage(null);
  }

  return (
    <>
      <div className={styles.containerDiv}>
        <h2 className={styles.heading}>Gallery</h2>

        <div className={styles.galleryDiv}>
          {images.map((url, i) => (
            <img
              key={i}
              src={url}
              alt="gallery-img"
              onClick={() => preview(url)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={close}>
          <div className={styles.modalContent}>
            <img src={selectedImage} alt="preview-image" />
            <span class="material-symbols-outlined" onClick={close}>
              close
            </span>
          </div>
        </div>
      )}
    </>
  );
}
