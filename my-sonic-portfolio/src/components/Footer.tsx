import React from "react";
import styles from "./Footer.module.css";
import Emerald from "./Emerald";

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} relative`}>
      {/* White Chaos Emerald Easter Egg */}
      <div className="absolute top-1/2 right-[5%] transform -translate-y-1/2 z-50">
        <Emerald id="white" className="transform hover:scale-110 transition-transform duration-300" />
      </div>

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
