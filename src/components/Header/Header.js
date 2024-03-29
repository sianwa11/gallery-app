import React from "react";

import styles from "./Header.module.scss";

import logo from "../../assets/logo192.png";
import { FaInfo } from "react-icons/fa";
import Form from "../UI/Form";

const Header = (props) => {
  const getImageHandler = (imageName) => {
    props.setImageHandler(imageName);
  };

  return (
    <div className={styles.header}>
      <div>
        <img className={styles.header__img} src={logo} alt="React logo" />
      </div>

      <div className={styles.searchbar}>
        <Form getImageHandler={getImageHandler} />
      </div>
      <FaInfo className={styles.info} />
    </div>
  );
};

export default Header;
