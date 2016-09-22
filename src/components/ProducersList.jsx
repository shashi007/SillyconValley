import React from 'react';
import Producer from './Producer';
import Monkey from './Monkey';
import Highschooler from './Highschooler';

const ProducersList = (props) => (
  <div className="producers-list">
    <Monkey {...props} />
    <Highschooler {...props} />
  </div>
)

export default ProducersList;
