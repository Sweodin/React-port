// src/components/Projects/Projects.tsx
import React, { useState } from "react";
import styles from "./Projects.module.css";
import sharedStyles from "../../shared-styling/SharedStyles.module.css";
import animStyles from "../../shared-styling/SonicAnimations.module.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projectsData";
import Emerald from "../../Emerald";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(3);

  // Filter projects based on selected category
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Get visible projects based on count
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Handle filter change
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setVisibleCount(3); // Reset visible count when changing filters
  };

  // Handle load more
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section
      id="projects"
      className={`${styles.projectsSection} ${sharedStyles.sectionBackground}`}
    >
      {/* Decorative rings */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`${animStyles.ring} ${animStyles[`ring${i + 1}`]}`}
        ></div>
      ))}

      {/* Emerald */}
      <div className={`${animStyles.emerald} ${styles.rightEmerald}`}></div>

      {/* Yellow Chaos Emerald Easter Egg */}
      <Emerald id="yellow" className="absolute bottom-16 right-0-24" />

      <div className={styles.sectionContent}>
        <h2>Featured Projects</h2>

        <div className={styles.projectsFilters}>
          <button
            className={`${styles.filterBtn} ${
              filter === "all" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterBtn} ${
              filter === "web" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("web")}
          >
            Web Apps
          </button>
          <button
            className={`${styles.filterBtn} ${
              filter === "frontend" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("frontend")}
          >
            Frontend
          </button>
          <button
            className={`${styles.filterBtn} ${
              filter === "fullstack" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("fullstack")}
          >
            Full Stack
          </button>
        </div>

        <div className={styles.projectsContainer}>
          <div className={styles.projectsGrid}>
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {visibleProjects.length < filteredProjects.length && (
          <div className={styles.viewAllContainer}>
            <button className={styles.viewAllButton} onClick={handleLoadMore}>
              Load More Projects
              <span className={styles.buttonRing}></span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
