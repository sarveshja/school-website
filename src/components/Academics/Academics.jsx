import React, { useState } from 'react';
import styles from './Academics.module.css';
import SubjectModal from './SubjectModal';

const Academics = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState({ name: '', description: '' });

  const subjects = {
    "English": "English involves the study of language, literature, and communication skills. It helps students develop reading, writing, and analytical skills, and encourages a deep appreciation of literature and effective communication.",
    "Mathematics": "Mathematics is the study of numbers, quantities, shapes, and patterns. It includes topics such as arithmetic, algebra, geometry, and calculus, and develops problem-solving, analytical, and logical thinking skills.",
    "Science": "Science is the systematic study of the natural world through observation and experimentation. It includes subjects like Physics, Chemistry, and Biology, and helps students understand the fundamental principles governing the universe.",
    "Social Studies": "Social Studies is the study of human society and social relationships. It includes history, geography, economics, and civics, and aims to develop an understanding of cultural, social, and political dynamics.",
    "Art": "Art involves the expression of creativity and imagination through various mediums such as painting, drawing, sculpture, and digital media. It fosters creativity, critical thinking, and visual communication skills.",
    "Physical Education": "Physical Education promotes physical fitness and well-being through activities like sports, exercise, and games. It helps develop motor skills, teamwork, and healthy lifestyle habits.",
    "Computer Science": "Computer Science is the study of computers and computational systems. It includes topics like programming, algorithms, data structures, and software development, and prepares students for the digital world.",
    "Physics": "Physics is the study of matter, energy, and the fundamental forces of nature. It explores concepts like motion, force, energy, and the structure of atoms, and helps understand the physical laws of the universe.",
    "Chemistry": "Chemistry is the study of substances, their properties, and how they interact and change. It covers topics such as chemical reactions, the periodic table, and the composition of matter, and is essential for understanding the material world.",
    "Biology": "Biology is the study of living organisms and their interactions with the environment. It includes topics like cell biology, genetics, evolution, and ecology, and helps understand the complexity and diversity of life.",
    "Accountancy": "Accountancy involves the recording, classification, and analysis of financial transactions. It teaches students how to prepare financial statements, manage budgets, and ensure the financial health of an organization.",
    "Business Studies": "Business Studies covers the principles and practices of business and management. It includes topics like entrepreneurship, marketing, finance, and organizational behavior, and prepares students for the corporate world.",
    "Economics": "Economics is the study of how societies use scarce resources to produce valuable commodities and distribute them among different people. It explores concepts like supply and demand, markets, and economic policies."
  };
  

  const openModal = (subject) => {
    setSelectedSubject({ name: subject, description: subjects[subject] });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedSubject({ name: '', description: '' });
  };

  return (
    <div className={styles.academics}>
      <h1>Academics</h1>
      <div className={styles.academicsContainer}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Curriculum</h2>
          <div className={styles.gradeCardContainer}>
            <div className={styles.gradeCard}>
              <h3 className={styles.gradeTitle}>Primary (Grades 1-5)</h3>
              <ul className={styles.sectionList}>
                {["English", "Mathematics", "Science", "Social Studies", "Art", "Physical Education"].map((subject) => (
                  <li key={subject} onClick={() => openModal(subject)}>{subject}</li>
                ))}
              </ul>
            </div>
            <div className={styles.gradeCard}>
              <h3 className={styles.gradeTitle}>Secondary (Grades 6-10)</h3>
              <ul className={styles.sectionList}>
                {["English", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Studies", "Computer Science", "Physical Education", "Art"].map((subject) => (
                  <li key={subject} onClick={() => openModal(subject)}>{subject}</li>
                ))}
              </ul>
            </div>
            <div className={styles.gradeCard}>
              <h3 className={styles.gradeTitle}>Science Stream (Grades 11-12)</h3>
              <ul className={styles.sectionList}>
                {["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English"].map((subject) => (
                  <li key={subject} onClick={() => openModal(subject)}>{subject}</li>
                ))}
              </ul>
            </div>
            <div className={styles.gradeCard}>
              <h3 className={styles.gradeTitle}>Commerce Stream (Grades 11-12)</h3>
              <ul className={styles.sectionList}>
                {["Accountancy", "Business Studies", "Economics", "Mathematics", "English"].map((subject) => (
                  <li key={subject} onClick={() => openModal(subject)}>{subject}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Teaching Methodologies</h2>
          <div className={styles.sectionContent}>
            <p>"We use a blend of traditional and modern teaching techniques to cater to different learning styles."</p>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Educational Resources</h2>
          <div className={styles.sectionContent}>
            <p>"Digital classrooms, interactive learning modules, and access to online educational platforms."</p>
          </div>
        </div>
      </div>
      {modalVisible && <SubjectModal subject={selectedSubject} closeModal={closeModal} />}
    </div>
  );
};

export default Academics;
