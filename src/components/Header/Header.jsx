import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.schoolName}>Springdale Public School</h2>
      <div className={styles.navContainer}>
        <Navbar expand="lg" className={styles.navbar}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className={styles.navLink}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className={styles.navLink}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/academics" className={styles.navLink}>Academics</Nav.Link>
              <Nav.Link as={Link} to="/admissions" className={styles.navLink}>Admissions</Nav.Link>
              <Nav.Link as={Link} to="/faculty" className={styles.navLink}>Faculty</Nav.Link>
              <Nav.Link as={Link} to="/students" className={styles.navLink}>Students</Nav.Link>
              <Nav.Link as={Link} to="/gallery" className={styles.navLink}>Gallery</Nav.Link>
              <Nav.Link as={Link} to="/contact" className={styles.navLink}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
