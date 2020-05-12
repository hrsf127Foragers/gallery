import React from 'react';
import styles from './arrowright.css';

const ArrowRight = (props) => {
  return (
      <a className={styles.carousel_arrow_right} onClick={props.clickFunction}>{props.glyph}</a>
  )
}

export default ArrowRight;