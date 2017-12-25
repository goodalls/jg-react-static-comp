import React from 'react';
import Button from './Button';
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img src={props.img} />
      <div className='story-info'>
        <div>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        {/* create an Author component and add it here */props.authName}
        {/* it will need properties of the author image, name, and the estimated reading time of the story */props.authImg, props.authName, props.estTime}
      </div>
    </div>
  )
}

export default Story;
