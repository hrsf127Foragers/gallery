import React from 'react';
import Buttons from './Buttons.jsx';

const Reviewer = (props) => {
  return (
    <div className="avatar">
      <div className="reviewer">
        <img className="profile-pic"src="https://loremflickr.com/320/240/people" />
        <span className="reviewer-name">
          Joe S.
        </span><br></br>
        <span className="friends-emoji"><i className="fas fa-user-friends">
          <p className="reviewer-text">88</p>
        </i></span>
        <span className="star-emoji"><i className="fas fa-star">
          <p className="reviewer-text">88</p>
        </i></span>
      </div>
      <Buttons />
    </div>
  )
}

export default Reviewer;

