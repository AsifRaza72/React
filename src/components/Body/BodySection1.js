import React, { useState } from 'react';
import './BodySection1.css'

const BodySection1 = (props) => {
  const [loc, setloc] = useState('');

  const locHandler = (e) => {
    setloc(e.target.value);
    // Pass the updated location data to the parent component
    props.onAdd(loc);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="heading">
          <h1>It's the food and groceries you love, delivered</h1>
        </div>
        <div className="loc-search">
          <input
            placeholder="Your street and street number"
            type="text"
            value={loc}
            onChange={locHandler}
          />
          <button type='button' className="content-button">Find food</button>
        </div>
      </div>
      <div className="image-part"></div>
    </div>
  );
};

export default BodySection1;
