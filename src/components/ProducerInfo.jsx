import React from 'react';
import Bar from './Bar';

const ProducerInfo = ({name, quantity, description, baseRate, price, percentage, purchase}) => (
  <div className="producer flex-producer">
    <div>
      <span className="producer-name">
        {name || 'undefined'} 
      </span>
      <span className="pull-right producer-quantity">
        x{quantity || 'undefined'} &nbsp;
        <span onClick={() => purchase()}>[+]</span>
      </span>
    </div>
    <div className="pull-right producer-price">
      Cost: ${price || 'undefined'}
    </div>
    <div className="producer-description">
      {description || 'undefined'}
    </div>
    <Bar percentage={percentage} text={baseRate} />
  </div>
)

export default ProducerInfo;
