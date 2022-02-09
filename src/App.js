import { useState } from "react";
import styles from "./App.module.scss";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";

import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: `${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
});

function App() {
  const [images, setImages] = useState("");

  const setImageHandler = (imageName) => {
    api.search
      .getPhotos({ query: imageName, page: 1, perPage: 13 })
      .then((response) => {
        setImages(response.response.results);
      });
  };

  return (
    <div className={styles.container}>
      <Header setImageHandler={setImageHandler} />
      <Gallery images={images} />
    </div>
  );
}

export default App;
