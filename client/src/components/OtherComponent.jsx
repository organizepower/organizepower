import React from 'react';

const OtherComponent = ({ items }) => (
  <div>
    <h4>Other Component</h4>
    <ul>
      {items.map(item => (
        <p>{item}</p>
      ))}
    </ul>
  </div>
);

export default OtherComponent;
