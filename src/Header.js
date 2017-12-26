import React from 'react';
import Button from './Button.js';
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
    <a>Write a Story</a>
    <h1>Material</h1>
    <a>Sign in/Sign up</a>
    </div>
  );
};

export default Header;
