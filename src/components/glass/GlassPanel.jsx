// src/components/glass/GlassPanel.jsx
import React from 'react';
import './glass.css';

const GlassPanel = ({ as: Tag = 'div', radius = 18, pill = false, className = '', children, ...rest }) => {
  const shape = pill ? 'glass--pill' : `glass--r${radius}`;

  return (
    <Tag className={`glass ${shape} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
};

export default GlassPanel;
