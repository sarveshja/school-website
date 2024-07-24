import React from 'react';
import styles from './SubjectModal.module.css';

const SubjectModal = ({ subject, closeModal }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{subject.name}</h2>
        <p>{subject.description}</p>
        <button onClick={closeModal} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

export default SubjectModal;
