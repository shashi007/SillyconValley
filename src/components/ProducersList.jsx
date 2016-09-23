import React from 'react';
import Producer from './Producer';
import Monkey from './Monkey';
import Highschooler from './Highschooler';
import MonkeyModel from '../models/Monkey';

const ProducersList = (props) => (
  <div className="producers-list">
    <Monkey {...props} />
    <Highschooler {...props} />
    <Producer model={MonkeyModel} {...props} />
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
