import React from 'react';

const Buttons = (props) => {
  return (
    <div className="buttons-container">
      <button className="share-button"><i className="fas fa-share-square"></i></button>
      <button className="report-button"><i className="fas fa-flag"></i></button>
        <button className="helpful-button"><i className="fas fa-arrow-up"></i>Helpful</button>
        <button className="helpful-button"><i className="fas fa-arrow-down"></i>Not Helpful</button>
    </div>
  )
}

export default Buttons;