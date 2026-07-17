import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={styles.container}>
        <h1 className={styles.brand}>Reyna Martinez</h1>

        <div className={styles.links}>
          <a href="#skills" className={styles.link}>Skills</a>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#contact" className={styles.link}>Contact</a>
          <ThemeToggle />
        </div>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="#skills" className={styles.link} onClick={closeMenu}>Skills</a>
          <a href="#projects" className={styles.link} onClick={closeMenu}>Projects</a>
          <a href="#contact" className={styles.link} onClick={closeMenu}>Contact</a>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
