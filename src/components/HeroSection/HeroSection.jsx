import React from "react";
import styles from "./HeroSection.module.css";
import vibratingHeadphone from "../../assets/hero-headphone 1.svg";

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroContent}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <div className={styles.vibratingHeadphone}>
        <img src={vibratingHeadphone} alt="vibratingHeadphone" />
      </div>
    </div>
  );
};

export default HeroSection;
