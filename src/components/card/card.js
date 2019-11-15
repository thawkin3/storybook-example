import React from 'react';
import './card.css';

export const Card = ({ header, content, footer }) => (
  <div className="card">
    {header && <div className="card-section header">{header}</div>}
    <div className="card-section content">{content}</div>
    {footer && <div className="card-section footer">{footer}</div>}
  </div>
);
