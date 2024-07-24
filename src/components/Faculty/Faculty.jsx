import React from 'react';
import styles from './Faculty.module.css';
import johnDoe from '../../assets/images/faculty1.jpeg';
import janeSmith from '../../assets/images/faculty2.jpeg';
import emilyJohnson from '../../assets/images/faculty3.jpeg';
import michaelBrown from '../../assets/images/faculty4.jpeg';
import sophiaDavis from '../../assets/images/faculty5.jpeg';
import davidWilson from '../../assets/images/faculty6.jpeg';

const facultyData = [
    {
      name: 'John Doe',
      position: 'Principal',
      qualifications: 'M.Ed',
      experience: '20 years of experience in educational administration.',
      image: johnDoe
    },
    {
      name: 'Jane Smith',
      position: 'Vice Principal',
      qualifications: 'M.Sc. in Physics',
      experience: '15 years of teaching experience.',
      image: janeSmith
    },
    {
      name: 'Emily Johnson',
      position: 'English Teacher',
      qualifications: 'M.A. in English',
      experience: '10 years of teaching experience.',
      image: emilyJohnson
    },
    {
      name: 'Michael Brown',
      position: 'Mathematics Teacher',
      qualifications: 'M.Sc. in Mathematics',
      experience: '8 years of teaching experience.',
      image: michaelBrown
    },
    {
      name: 'Sophia Davis',
      position: 'Science Teacher',
      qualifications: 'M.Sc. in Chemistry',
      experience: '12 years of teaching experience.',
      image: sophiaDavis
    },
    {
      name: 'David Wilson',
      position: 'Computer Science Teacher',
      qualifications: 'B.Tech in Computer Science',
      experience: '5 years of teaching experience.',
      image: davidWilson
    }
  ];
  
  const Faculty = () => {
    return (
      <div className={styles.faculty}>
        <h2>Faculty</h2>
        <div className={styles.profiles}>
          {facultyData.map((member, index) => (
            <div key={index} className={styles.profileCard}>
              <img src={member.image} alt={`${member.name}`} className={styles.profileImage} />
              <h3>{member.name}</h3>
              <p><strong>Position:</strong> {member.position}</p>
              <p><strong>Qualifications:</strong> {member.qualifications}</p>
              <p><strong>Experience:</strong> {member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Faculty;