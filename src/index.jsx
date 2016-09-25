import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import pkg from 'json!../package.json';

ReactDOM.render((
  <App producers={producersList} initialGameState={initialGameState} version={pkg.version} />
), document.getElementById('app'));
