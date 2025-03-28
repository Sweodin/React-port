import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["About", "Skills", "Projects", "Blog", "Contact"];
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL with hash without page reload - compatible with HashRouter
      window.location.hash = id;
    }
    setIsMenuOpen(false);
  };

  // Check if a section is in the viewport to highlight the nav item
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 100; // Add offset for header

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            window.history.replaceState(null, '', `#${navItems[index].toLowerCase()}`);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${styles.header}`}>
      <nav className={styles.nav}>
        <a
          href="#"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.location.hash = "";
          }}
        >
          Peters Portfolio
        </a>
        <div
          className={`${styles.menuIcon} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          tabIndex={-1}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`${styles.navList} ${isMenuOpen ? styles.active : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item} className={styles.navItem}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={
                    location.hash === `#${item.toLowerCase()}` ||
                    (location.hash === "" && item.toLowerCase() === "about")
                      ? styles.active
                      : ""
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
