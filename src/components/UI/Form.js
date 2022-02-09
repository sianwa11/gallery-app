import React, { useRef } from "react";

import styles from "./Form.module.scss";
import { FaSearch } from "react-icons/fa";

const Form = (props) => {
  const inputEl = useRef();

  const submitImageHandler = (e) => {
    e.preventDefault();

    props.getImageHandler(inputEl.current.value);
    inputEl.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={submitImageHandler}>
      <input
        className={styles.form__input}
        type="text"
        ref={inputEl}
        placeholder="Search Images"
      />

      <button className={styles.form__button}>
        <FaSearch />
      </button>
    </form>
  );
};

export default Form;
