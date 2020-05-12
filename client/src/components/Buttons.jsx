import React from 'react';
import styles from './buttons.css';

const Buttons = (props) => {
  return (
    <div className={styles.buttons_container}>
      <button className={styles.share_button}><i className="fas fa-share-square"></i></button>
      <button className={styles.report_button}><i className="fas fa-flag"></i></button>
        <button className={styles.helpful_button}><span className={styles.arrow_up}><i className="fas fa-arrow-up"></i></span>Helpful</button>
        <button className={styles.helpful_button}><span className={styles.arrow_down}><i className="fas fa-arrow-down"></i></span>Not Helpful</button>
    </div>
  )
}

export default Buttons;