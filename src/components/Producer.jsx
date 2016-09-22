import React from 'react';
import Bar from './Bar';

const Producer = ({name, quantity, description, baseRate, price, percentage, purchase}) => (
  <div className="producer flex-producer">
    <div>
      <span className="producer-name">
        {name} 
      </span>
      <span className="pull-right producer-quantity">
        x{quantity} &nbsp;
        <span onClick={purchase}>[+]</span>
      </span>
    </div>
    <div className="pull-right producer-price">
      Cost: ${price}
    </div>
    <div className="producer-description">
      {description}
    </div>
    <Bar percentage={percentage} text={baseRate} />
  </div>
)

export default Producer;
