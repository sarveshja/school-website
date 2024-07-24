// src/components/ContactUs/ContactUs.jsx
import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'A valid email is required';
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className={styles.contactUs}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h2>Contact Details</h2>
          <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Email:</strong> info@springdale.edu</p>
        </div>
      </div>
      <div className={styles.card}>
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.errorInput : ''}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : ''}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? styles.errorInput : ''}
            />
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className={styles.card}>
        <h2>Find Us on Google Maps</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.185860413184!2d-122.08385158468988!3d37.38605177982521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb79c0e7b8b9d%3A0x9b68cfb54424e6f!2sGoogleplex!5e0!3m2!1sen!2sus!4v1615846587634!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
