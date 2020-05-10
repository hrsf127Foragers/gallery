import React from 'react';
import Reviewer from './Reviewer.jsx';
import ShareButton from './ShareButton.jsx';
import ReportButton from './ReportButton.jsx';
import HelpfulButton from './HelpfulButton.jsx';
import NotHelpfulButton from './NotHelpfulButton.jsx';

const ModalPhotoDescription = (props) => {
  return (
   <div className="photo-description-wrapper">
     <span className="photo-caption">taco salad</span><br/>
     <span className="photo-date">date</span>
     <Reviewer />
     <ShareButton />
     <ReportButton />
     <HelpfulButton />
     <NotHelpfulButton />
   </div>
  )
}

export default ModalPhotoDescription;