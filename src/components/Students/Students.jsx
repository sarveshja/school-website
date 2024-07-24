import React from 'react';
import styles from './Students.module.css';

import activityImage from '../../assets/images/extracurricular.jpeg';
import clubImage from '../../assets/images/clubs.jpg';
import achievementImage1 from '../../assets/images/johnsmiths.jpeg';
import achievementImage2 from '../../assets/images/sarahlee.jpeg';
import achievementImage3 from '../../assets/images/techinnovatorclub.jpeg';
import presidentImage from '../../assets/images/amy.jpeg';
import vpImage from '../../assets/images/rajiv1.jpeg';
import secretaryImage from '../../assets/images/lisa.jpeg';

const studentsData = {
  lifeAtSpringdale: {
    extracurricularActivities: [
      "Music",
      "Dance",
      "Drama",
      "Art",
      "Sports",
      "Robotics",
      "Debate Club",
      "Science Club"
    ],
    clubsAndSocieties: [
      "Literary Society",
      "Environmental Club",
      "Astronomy Club",
      "Coding Club"
    ]
  },
  achievements: [
    { text: "John Smith - National Level Math Olympiad Winner", image: achievementImage1 },
    { text: "Sarah Lee - Gold Medalist in State Swimming Championship", image: achievementImage2 },
    { text: "Tech Innovators Club - Winners of Inter-School Robotics Competition", image: achievementImage3 }
  ],
  studentCouncil: {
    president: "Amy Parker, Grade 12",
    vicePresident: "Rajiv Mehta, Grade 11",
    secretary: "Lisa Wong, Grade 10"
  }
};

const Students = () => {
  return (
    <div className={styles.students}>
      

      <section className={styles.section}>
        <h3 className='h3'>Life at Springdale</h3>
        <div className={styles.flexContainer}>
          <div className={styles.card}>
            <img src={activityImage} alt="Extracurricular Activities" className={styles.image} />
            <h4>Extracurricular Activities</h4>
            <ul>
              {studentsData.lifeAtSpringdale.extracurricularActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <img src={clubImage} alt="Clubs and Societies" className={styles.image} />
            <h4>Clubs and Societies</h4>
            <ul>
              {studentsData.lifeAtSpringdale.clubsAndSocieties.map((club, index) => (
                <li key={index}>{club}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className='h3'>Achievements and Accolades</h3>
        <div className={styles.flexContainer}>
          {studentsData.achievements.map((achievement, index) => (
            <div key={index} className={styles.card}>
              <img src={achievement.image} alt="Achievement" className={styles.image} />
              <p>{achievement.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h3 className='h3'>Student Council and Leadership Opportunities</h3>
        <div className={styles.flexContainer}>
          <div className={styles.card}>
            <img src={presidentImage} alt="President" className={styles.image} />
            <p><strong>President:</strong> {studentsData.studentCouncil.president}</p>
          </div>
          <div className={styles.card}>
            <img src={vpImage} alt="Vice President" className={styles.image} />
            <p><strong>Vice President:</strong> {studentsData.studentCouncil.vicePresident}</p>
          </div>
          <div className={styles.card}>
            <img src={secretaryImage} alt="Secretary" className={styles.image} />
            <p><strong>Secretary:</strong> {studentsData.studentCouncil.secretary}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;
