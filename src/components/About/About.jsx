import React from 'react';
import styles from './About.module.css';
import historyImage from '../../assets/images/history.png';
import visionImage from '../../assets/images/vision.jpeg';
import missionImage from '../../assets/images/mission.jpeg';
import principalImage from '../../assets/images/message.jpeg';
import infrastructureImage from '../../assets/images/infrastructure.jpeg';

const About = () => {
  return (
    <div className={styles.aboutUs}>
      <h1>About Us</h1>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.odd}`}>
          <img src={historyImage} alt="History" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h2>Our History</h2>
            <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.even}`}>
          <img src={visionImage} alt="Vision" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h2>Vision</h2>
            <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.odd}`}>
          <img src={missionImage} alt="Mission" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h2>Mission</h2>
            <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.even}`}>
          <img src={principalImage} alt="Principal's Message" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h2>Message from the Principal</h2>
            <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.odd}`}>
          <img src={infrastructureImage} alt="Infrastructure and Facilities" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h2>Infrastructure and Facilities</h2>
            <ul>
              <li>State-of-the-art science and computer labs</li>
              <li>Spacious and well-equipped classrooms</li>
              <li>Library with a vast collection of books and digital resources</li>
              <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
