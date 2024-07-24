import React from 'react';
import logo from '../../assets/logo.jpeg'; // Placeholder for logo image
import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <img src={logo} alt="School Logo" className={styles.logo} />
      <h1 className={styles.schoolName}>Springdale Public School</h1>
      <p className={styles.description}>
        Welcome to Springdale Public School, where we nurture young minds for a brighter future.
      </p>
    </div>
  );
};

export default Introduction;
