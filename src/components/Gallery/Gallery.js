import React, { useContext, useEffect } from "react";
import ImageContext from "../../images/image-context";

import styles from "./Gallery.module.scss";

const Gallery = () => {
  const imgCtx = useContext(ImageContext);

  const { results } = imgCtx;
  console.log(results);
  let gallery = <p>No images...</p>;

  if (results && results.length > 0) {
    gallery = (
      <>
        {results.map((image, index) => (
          <figure
            key={image.id}
            className={`${styles["gallery__item"]} ${
              styles[`gallery__item--${index + 1}`]
            }`}
          >
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className={styles["gallery__img"]}
            />
          </figure>
        ))}
      </>
    );
  }

  return (
    <section className={styles.gallery}>
      {gallery}
      {/* <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--1"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure>

      <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--2"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure>

      <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--3"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure>

      <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--4"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure>

      <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--5"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure>

      <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--6"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure>

      <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--7"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure>

      <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--8"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure>

      <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--9"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure>

      <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--10"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure>

      <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--11"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure>

      <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--12"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure>

      <figure
        className={`${styles["gallery__item"]} ${styles["gallery__item--13"]}`}
      >
        <img
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTg4NzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8fHx8MTY0NDMyMzA5Nw&ixlib=rb-1.2.1&q=85"
          alt="Gallery"
          className={styles["gallery__img"]}
        />
      </figure> */}
    </section>
  );
};

export default Gallery;
