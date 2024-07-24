import React from 'react';
import Introduction from './Introduction';
import CarouselComponent from '../Carousal/Carousel';
import QuickLinks from '../QuickLinks/QuickLinks';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Introduction />
      <CarouselComponent />
      <QuickLinks />
    </div>
  );
};

export default HomePage;
