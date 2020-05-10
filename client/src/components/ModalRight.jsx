import React from 'react';
import ModalSlider from './ModalSlider.jsx';

const ModalRight = React.forwardRef((props, ref) => {
  return (
    <div className="modal-right-wrapper">
      <ModalSlider photos={props.photos} photoId={props.photoId} handleSliderClick={props.handleSliderClick} ref={ref}/>
    </div>
  )
})

export default ModalRight;
