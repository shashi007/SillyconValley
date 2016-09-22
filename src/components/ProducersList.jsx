import React from 'react';
import Producer from './Producer';
import Monkey from './Monkey';

const ProducersList = (props) => (
  <div className="producers-list">
    <Monkey {...props} />
    {
      //Object.keys(producers).map(k => <Producer key={k} producer={producers[k]} modify={modify} state={producersState[k]} />)
    }
  </div>
)

export default ProducersList;
