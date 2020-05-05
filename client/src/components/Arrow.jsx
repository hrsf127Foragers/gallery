import React from 'react';

const Arrow = (props) => {
  return (
    <div>
      <div className={`slide-arrow ${props.direction}`} onClick={props.clickFunction}>{props.glyph}
      </div>
    </div>
  )
}

export default Arrow;