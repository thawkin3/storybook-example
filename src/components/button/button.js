import React from 'react';
import './button.css';

export const Button = ({ text, onClick, focusType = 'outline' }) => (
  <button
    className={`button ${focusType}`}
    onClick={onClick}
  >
    {text}
  </button>
);
