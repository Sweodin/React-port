// Welcome.tsx
import React from "react";
import styles from "./Welcome.module.css";
import sharedStyles from "../shared-styling/SharedStyles.module.css";
import animStyles from "../shared-styling/SonicAnimations.module.css";

const Welcome: React.FC = () => {
  return (
    <section id="welcome" className={sharedStyles.sectionBackground}>
      {/* Sonic Rings Decoration */}
      <div className={`${animStyles.ring} ${animStyles.ring1}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring2}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring3}`}></div>

      {/* Chaos Emerald on Left Side */}
      <div className={`${animStyles.emerald} ${styles.leftEmerald}`}></div>
      <div className={styles.card}>
        <div className={styles.welcomeContent}>
          <h1>Welcome to My Sonic Inspired Portfolio</h1>

          <p className={styles.subtitle}>
            Web Development Student & Aspiring Coder
          </p>
          <div className={styles.welcomeText}>
            <p>
              Greetings! Welcome to my portfolio. My name is Peter Gustafsson,
              and I am a web development student eager to learn and create.
              Explore my projects and witness my progress in the exciting world
              of web development!
            </p>
            <p>
              Feel free to explore my portfolio to learn more about my skills,
              projects, and experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
