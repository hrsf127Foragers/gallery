import React from 'react';

const Arrow = (props) => {
  return (
      <a className="slide-arrow" onClick={props.clickFunction}>{props.glyph}</a>
  )
}

export default Arrow;