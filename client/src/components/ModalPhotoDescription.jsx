import React from 'react';
import ReviewerInfo from './ReviewerInfo.jsx';
import styles from './modalphotodescription.css';

const ModalPhotoDescription = (props) => {
  return (
   <div className={styles.photo_description_wrapper}>
     <span className={styles.photo_caption}>Actual Food</span><br/>
     <span className={styles.photo_date}>January 14, 2020</span>
     <hr className={styles.horizontal_line}/>
     <ReviewerInfo />
   </div>
  )
}

export default ModalPhotoDescription;