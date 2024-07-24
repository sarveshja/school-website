import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuickLinks.module.css';

const QuickLinks = () => {
  return (
    <div className={styles.quickLinks}>
      <h2>Quick Links</h2>
      <ul className={styles.linkList}>
        <li><Link to="/about" className={styles.link}>About Us</Link></li>
        <li><Link to="/academics" className={styles.link}>Academics</Link></li>
        <li><Link to="/admissions" className={styles.link}>Admissions</Link></li>
        <li><Link to="/faculty" className={styles.link}>Faculty</Link></li>
        <li><Link to="/students" className={styles.link}>Students</Link></li>
        <li><Link to="/gallery" className={styles.link}>Gallery</Link></li>
        <li><Link to="/contact" className={styles.link}>Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default QuickLinks;
