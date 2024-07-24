import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import AdmissionFormModal from './AdmissionFormModal';
import styles from './Admissions.module.css';

const Admissions = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOverlayOpen = () => {
    setIsOverlayOpen(true);
  };

  const handleOverlayClose = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div className={styles.admissions}>
      <h1>Admissions</h1>
      <div className={styles.admissionsContainer}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Admission Process and Criteria</h2>
          <div className={styles.sectionContent}>
            <p><strong>Process:</strong> "Admission forms are available for download. Submit the completed form along with required documents at the school office."</p>
            <p><strong>Criteria:</strong> "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades."</p>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Important Dates and Deadlines</h2>
          <ul className={styles.datesList}>
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Downloadable Admission Forms</h2>
          <div className={styles.downloadOptions}>
            <button onClick={handleOverlayOpen} className={styles.downloadLink}>Fill Form Online and Download</button>
            <PDFDownloadLink
              document={<EmptyFormPDF />}
              fileName="Empty_Admission_Form.pdf"
              className={styles.downloadLink}
            >
              {({ loading }) => (loading ? 'Generating PDF...' : 'Download Empty Form')}
            </PDFDownloadLink>
          </div>
        </div>
      </div>

      {isOverlayOpen && <AdmissionFormModal onClose={handleOverlayClose} />}
    </div>
  );
};

// PDF component for empty form
const EmptyFormPDF = () => (
  <Document>
    <Page size="A4" style={{ padding: 20, backgroundColor: '#FFFFFF' }}>
      <View style={{ margin: 10, padding: 10, fontSize: 12 }}>
        <Text style={{ fontSize: 18, marginBottom: 20, textAlign: 'center' }}>School Admission Form</Text>
        <View style={{ margin: 10, padding: 10 }}>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>Personal Information</Text>
          <Text>Name:</Text>
          <View style={{ borderBottom: '1px solid #000', width: '100%', height: 20, marginBottom: 10 }} />
          <Text>Age:</Text>
          <View style={{ borderBottom: '1px solid #000', width: '100%', height: 20, marginBottom: 10 }} />
          <Text>Grade Applied For:</Text>
          <View style={{ borderBottom: '1px solid #000', width: '100%', height: 20, marginBottom: 10 }} />
        </View>
        <View style={{ margin: 10, padding: 10 }}>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>Contact Information</Text>
          <Text>Parent/Guardian Name:</Text>
          <View style={{ borderBottom: '1px solid #000', width: '100%', height: 20, marginBottom: 10 }} />
          <Text>Phone Number:</Text>
          <View style={{ borderBottom: '1px solid #000', width: '100%', height: 20, marginBottom: 10 }} />
          <Text>Email:</Text>
          <View style={{ borderBottom: '1px solid #000', width: '100%', height: 20, marginBottom: 10 }} />
        </View>
      </View>
    </Page>
  </Document>
);

export default Admissions;
