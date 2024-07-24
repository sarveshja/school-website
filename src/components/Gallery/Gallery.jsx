import React, { useState } from 'react';
import styles from './Gallery.module.css';

// Import images and videos
import sportsDayImage from '../../assets/images/gallery1.jpeg';
import scienceExhibitionImage from '../../assets/images/gallery2.jpeg';
import culturalFestImage from '../../assets/images/gallery3.jpeg';
import classroomImage from '../../assets/images/gallery4.jpeg';
import libraryImage from '../../assets/images/gallery5.jpeg';
import schoolTourVideo from '../../assets/videos/schooltour.mp4';
import annualFunctionVideo from '../../assets/videos/culturalfunction.mp4';

const galleryData = {
  photos: [
    { src: sportsDayImage, alt: "Students participating in various sports events." },
    { src: scienceExhibitionImage, alt: "Students presenting their science projects." },
    { src: culturalFestImage, alt: "Students performing in the cultural fest." },
    { src: classroomImage, alt: "A glimpse of our interactive classrooms." },
    { src: libraryImage, alt: "Students reading and studying in the school library." }
  ],
  videos: [
    { src: schoolTourVideo, alt: "Virtual tour of Springdale Public School." },
    { src: annualFunctionVideo, alt: "Highlights from the Annual Function 2023." }
  ]
};

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredPhotos = filter === 'all' ? galleryData.photos : galleryData.photos.filter(photo => photo.alt.includes(filter));
  const filteredVideos = filter === 'all' ? galleryData.videos : galleryData.videos.filter(video => video.alt.includes(filter));

  return (
    <div className={styles.gallery}>
      <h2>Gallery</h2>
      
      <div className={styles.filter}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('sports')}>Sports</button>
        <button onClick={() => setFilter('science')}>Science</button>
        <button onClick={() => setFilter('cultural')}>Cultural</button>
      </div>

      <section className={styles.section}>
        <h3>Photos</h3>
        <div className={styles.flexContainer}>
          {filteredPhotos.map((photo, index) => (
            <div key={index} className={styles.card}>
              <img src={photo.src} alt={photo.alt} className={styles.image} />
              <p>{photo.alt}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h3>Videos</h3>
        <div className={styles.flexContainer}>
          {filteredVideos.map((video, index) => (
            <div key={index} className={styles.card}>
              <video controls className={styles.video}>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{video.alt}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
