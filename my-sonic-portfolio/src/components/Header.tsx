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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${styles.header}`}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
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
                    location.pathname === `#${item.toLowerCase()}`
                      ? styles.active
                      : ""
                  }
                  onClick={() => setIsMenuOpen(false)}
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
