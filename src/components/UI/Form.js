import React, { useState, useContext } from "react";

import styles from "./Form.module.scss";
import { FaSearch } from "react-icons/fa";
import ImageContext from "../../images/image-context";

const Form = () => {
  const [image, setImage] = useState("");
  const imageCtx = useContext(ImageContext);

  const getInputHandler = (e) => {
    setImage(e.target.value);
  };

  const searchImage = (e) => {
    e.preventDefault();
    imageCtx.searchImage(image);
    setImage(" ");
  };

  return (
    <form className={styles.form} onSubmit={searchImage}>
      <input
        className={styles.form__input}
        value={image}
        type="text"
        placeholder="Search Images"
        onChange={getInputHandler}
      />

      <button className={styles.form__button}>
        <FaSearch />
      </button>
    </form>
  );
};

export default Form;
