import React from "react";

import styles from "./Gallery.module.scss";

import background from "../../assets/recal-media-ueBIGLmiI5A-unsplash.webp";
import photographer from "../../assets/nicolas-ladino-silva-o2DVsV2PnHE-unsplash.webp";
import background2 from "../../assets/stardust-0713-FACAaPZak2k-unsplash.webp";

const Gallery = (props) => {
  const images = props.images;

  let gallery = (
    <>
      <figure
        className={`${styles.gallery__landing} ${styles["gallery__landing--1"]}`}
      >
        <img
          className={styles["gallery__default"]}
          src={background}
          alt="background"
          loading="lazy"
        />
      </figure>

      <figure
        className={`${styles.gallery__landing} ${styles["gallery__landing--3"]}`}
      >
        <img
          className={styles["gallery__default"]}
          src={background2}
          alt="background 2"
          loading="lazy"
        />
      </figure>

      <figure
        className={`${styles.gallery__landing} ${styles["gallery__landing--2"]}`}
      >
        <img
          className={styles["gallery__default"]}
          src={photographer}
          alt="photographer"
          loading="lazy"
        />
      </figure>
      <h1
        className={`${styles.gallery__landing} ${styles["gallery__landing--heading"]}`}
      >
        Search Images 📷
      </h1>
    </>
  );

  if (images && images.length > 0) {
    gallery = (
      <>
        {images.map((image, index) => (
          <figure
            key={image.id}
            className={`${styles["gallery__item"]} ${
              styles[`gallery__item--${index + 1}`]
            }`}
          >
            <img
              placeholderSrc={image.blur_hash}
              src={image.urls.regular}
              alt={image.alt_description}
              className={styles["gallery__img"]}
              loading="lazy"
            />
          </figure>
        ))}
      </>
    );
  }

  return <section className={styles.gallery}>{gallery}</section>;
};

export default Gallery;
