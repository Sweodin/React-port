import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <p className={styles.footerName}>Peter Gustafsson</p>
          <p className={styles.footerTitle}>Full Stack Developer</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#welcome">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <p className={styles.footerCopyright}>
          &copy; 2024 Peter Gustafsson. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
