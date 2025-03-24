// About.tsx
import React from "react";
import styles from "./About.module.css";
import sharedStyles from "../shared-styling/SharedStyles.module.css";
import animStyles from "../shared-styling/SonicAnimations.module.css";
import profileImage from "../../assets/images/Peter.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className={sharedStyles.sectionBackground}>
      {/* Sonic Rings Decoration */}
      <div className={`${animStyles.ring} ${animStyles.ring3}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring4}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring5}`}></div>

      {/* Chaos Emerald */}
      <div className={`${animStyles.emerald} ${styles.Emerald}`}></div>

      <div className={styles.card}>
        <div className={styles.aboutContent}>
          <h1>About Me</h1>

          <div className={styles.profileContainer}>
            <div className={styles.profileImageWrapper}>
              <img
                src={profileImage}
                alt="Peter Gustafsson"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.aboutText}>
              <p>Hello and welcome to my portfolio page!</p>
              <p>
                I'm excited to share my journey into web development with you.
                As a 40-year-old family man and proud father to a wonderful
                daughter, I'm currently pursuing my passion at Sundsgårdens
                Folkhögskola to become a web developer.
              </p>
              <p>
                From a young age, I've been fascinated by IT, technology, and
                computers. This lifelong interest has inspired me to embrace a
                career in development as an adult. I'm fully committed to this
                new path and thoroughly enjoying the process of turning my hobby
                and passion into my profession.
              </p>
              <p>
                My education includes frontend development, and I am currently
                focused on backend technologies. I am on track to complete my
                web development program in June 2025.
              </p>
              <p>
                Thank you for visiting my page, and I invite you to explore my
                projects and learn more about my skills and aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
