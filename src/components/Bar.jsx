import React from 'react';

const Bar = ({percentage, text}) => (
  <div className="bar inactive-bar">
    <div className="bar active-bar" style={{width: percentage + '%'}}>
      {text}
    </div>
  </div>
)

export default Bar;
