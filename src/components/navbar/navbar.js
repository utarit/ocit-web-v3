import React, { useState } from "react";
import * as styles from "./navbar.module.css";
import logo from "../../images/ocit_logo.png";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="OCİT logo" />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.redLetter}>O</span>DTÜ{" "}
          <span className={styles.redLetter}>C</span>AN KURTARMA VE{" "}
          <span className={styles.redLetter}>İ</span>LK YARDIM{" "}
          <span className={styles.redLetter}>T</span>OPLULUĞU
        </h1>
      </div>
      <div className={styles.buttonContainer}>
        <p className={styles.navbarButton}>
          <a href="#">Eğitimlerimiz</a>
        </p>
        <p className={styles.navbarButton}>
          <a href="#">Biz Kimiz?</a>
        </p>
      </div>
    </div>
  );
}
