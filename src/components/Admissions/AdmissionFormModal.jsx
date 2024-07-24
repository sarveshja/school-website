import React from 'react';
import { useForm } from 'react-hook-form';
import jsPDF from 'jspdf';
import styles from './AdmissionFormModal.module.css';

const AdmissionFormModal = ({ onClose }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  // Watch for changes in grade
  const grade = watch('grade');
  const age = watch('age');
  
  // Validate age based on grade
  const validateAge = (value) => {
    const gradeValue = parseInt(grade);
    const ageValue = parseInt(value);
    return (
      ageValue >= (gradeValue + 2) &&
      ageValue <= (gradeValue + 5)
    ) || 'Age must be between Grade + 2 and Grade + 5';
  };

  const onSubmit = (data) => {
    const doc = new jsPDF();
    
    doc.text('School Admission Form', 10, 10);
    doc.text(`Name: ${data.name}`, 10, 20);
    doc.text(`Age: ${data.age}`, 10, 30);
    doc.text(`Grade Applied For: ${data.grade}`, 10, 40);
    doc.text(`Parent/Guardian Name: ${data.parentName}`, 10, 50);
    doc.text(`Phone Number: ${data.phone}`, 10, 60);
    doc.text(`Email: ${data.email}`, 10, 70);

    doc.save('AdmissionForm.pdf');
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.modalTitle}>School Admission Form</h2>
        <form className={styles.modalContent} onSubmit={handleSubmit(onSubmit)}>
          <h3>Personal Information</h3>
          <label>
            Name:
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </label>
          <label>
            Age:
            <input
              type="number"
              {...register('age', { 
                required: 'Age is required',
                validate: validateAge
              })}
            />
            {errors.age && <p className={styles.error}>{errors.age.message}</p>}
          </label>
          <label>
            Grade Applied For:
            <select
              {...register('grade', { required: 'Grade is required' })}
            >
              {[...Array(12).keys()].map(num => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
            </select>
            {errors.grade && <p className={styles.error}>{errors.grade.message}</p>}
          </label>

          <h3>Contact Information</h3>
          <label>
            Parent/Guardian Name:
            <input
              type="text"
              {...register('parentName', { required: 'Parent/Guardian Name is required' })}
            />
            {errors.parentName && <p className={styles.error}>{errors.parentName.message}</p>}
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              {...register('phone', { required: 'Phone Number is required' })}
            />
            {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
          </label>
          <label>
            Email:
            <input
              type="email"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Email is invalid' } })}
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </label>
          <button type="submit">Download as PDF</button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionFormModal;
