import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.css';
import sportsDayImg from '../../assets/images/annualday.jpg';
import scienceExhibitionImg from '../../assets/images/sciexhibition.jpeg';
import culturalFestImg from '../../assets/images/culturals.jpeg';

const CarouselComponent = () => {
    return (
      <Carousel className={styles.carousel}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sportsDayImg}
            alt="Annual Sports Day"
          />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={scienceExhibitionImg}
            alt="Science Exhibition"
          />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={culturalFestImg}
            alt="Cultural Fest"
          />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };
  
  export default CarouselComponent;