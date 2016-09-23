import React from 'react';
import Producer from './Producer';
import MonkeyModel from '../models/Monkey';
import HighschoolerModel from '../models/Highschooler';

const ProducersList = (props) => (
  <div className="producers-list">
    <Producer model={MonkeyModel} {...props} />
    <Producer model={HighschoolerModel} {...props} />
    {
    // Outsourced
    // Software Engineer
    // Unicorn
    // AI
    // Super AI
    }
  </div>
)

export default ProducersList;
