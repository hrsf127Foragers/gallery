import React from 'react';
import Buttons from './Buttons.jsx';
import styles from './reviewerinfo.css';

const ReviewerInfo = (props) => {
  return (
    <div className={styles.reviewer_container}>
      <div className={styles.reviewer_wrapper}>
        <img className={styles.profile_pic}src="https://loremflickr.com/320/240/people" />
        <span className={styles.reviewer_name}>
          Joe S.
        </span><br></br>
        <span className={styles.friends_emoji}><i className="fas fa-user-friends">
          <p className={styles.reviewer_text}>88</p>
        </i></span>
        <span className={styles.star_emoji}><i className="fas fa-star">
          <p className={styles.reviewer_text}>88</p>
        </i></span>
      </div>
      <Buttons />
    </div>
  )
}

export default ReviewerInfo;

