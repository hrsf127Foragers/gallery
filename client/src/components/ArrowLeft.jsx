import React from 'react';
import styles from './arrowleft.css';

const ArrowLeft = (props) => {
  return (
      <a className={styles.carousel_arrow_left} onClick={props.clickFunction}>{props.glyph}</a>
  )
}

export default ArrowLeft;