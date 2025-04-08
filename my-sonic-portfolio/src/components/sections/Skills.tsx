// Skills.tsx
import React from "react";
import styles from "./Skills.module.css";
import sharedStyles from "../shared-styling/SharedStyles.module.css";
import animStyles from "../shared-styling/SonicAnimations.module.css";
import Emerald from "../Emerald";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaSass,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

const Skills: React.FC = () => {
  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      tags: ["Semantic", "Accessible"],
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      tags: ["Flexbox", "Grid", "SCSS"],
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      tags: ["ES6+", "DOM", "APIs"],
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      tags: ["Grid", "Components"],
    },
    {
      icon: <FaReact />,
      name: "React",
      tags: ["Hooks", "Context"],
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      tags: ["Express", "NPM"],
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      tags: ["Version Control", "GitHub"],
    },
    {
      icon: <FaSass />,
      name: "Sass",
      tags: ["Mixins", "Variables"],
    },
    {
      icon: <FaWordpress />,
      name: "WordPress",
      tags: ["Themes", "Plugins"],
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      tags: ["UI Design", "Prototyping"],
    },
  ];

  return (
    <section id="skills" className={`${sharedStyles.sectionBackground} relative`}>
      {/* Sonic Rings */}
      <div className={`${animStyles.ring} ${animStyles.ring1}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring2}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring3}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring4}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring5}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring6}`}></div>

      {/* Emerald */}
      <div className={`${animStyles.emerald} ${styles.leftEmerald}`}></div>
      
      {/* Blue Chaos Emerald Easter Egg */}
      <div className="absolute top-1/4 left-[10%] z-50">
        <Emerald id="blue" className="transform hover:scale-110 transition-transform duration-300" />
      </div>

      <div className={styles.skillsContainer}>
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <span className={styles.skillName}>{skill.name}</span>
              <div className={styles.skillTags}>
                {skill.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
