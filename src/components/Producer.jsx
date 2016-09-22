import React from 'react';
import Bar from './Bar';

const Producer = ({name, quantity, description, baseRate, percentage}) => (
  <div className="producer flex-producer">
    <div>
      <span className="producer-name">
        {name} 
      </span>
      <span className="producer-quantity">
        x{quantity}
      </span>
    </div>
    <div className="producer-description">
      {description}
    </div>
    <Bar percentage={percentage} text={baseRate} />
  </div>
)

export default Producer;
