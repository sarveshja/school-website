import React from 'react';
import Header from './components/Header/Header';
import AppRoutes from './routes/routes';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className={styles.app}>
    <Header />
    <AppRoutes />
    <Footer />
  </div>
);

export default App;
