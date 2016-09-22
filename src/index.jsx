import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import md5 from 'md5';

const producersList = {
  1: {
    name: 'Monkey + typewriter',
    description: 'Get enough of them and wait long enough...',
    baseRate: 10,
    tic: function(ms) {
      let hash = md5(Math.random()).substring(0, 10);
      console.log(hash);
    }
  },
  2: {
    name: 'Highschool kid',
    description: 'Cheap and reliably bad, but you get what you pay for',
    baseRate: 20
  },
  3: {
    name: 'Outsourced foreign contractor',
    description: 'Hit or miss, like gambling with your company',
    baseRate: 40
  }
}

const initialGameState = {
  tokens: 0,
  producers: {
    1: {
      quantity: 1
    },
    2: {
      quantity: 0
    },
    3: {
      quantity: 0
    }
  }
}

ReactDOM.render((
  <App producers={producersList} initialGameState={initialGameState} />
), document.getElementById('app'));
