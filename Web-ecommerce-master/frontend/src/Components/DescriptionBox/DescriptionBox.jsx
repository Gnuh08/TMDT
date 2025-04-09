import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
      <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reveiws (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>This is e-commerce website shoes</p>
            <p></p>
        </div>
      </div>
    );
  }

export default DescriptionBox
