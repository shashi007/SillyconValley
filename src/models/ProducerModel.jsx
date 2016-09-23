import React from 'react';

export default class ProducerModel {
  constructor(addTokens, forceUpdate) {
    this.name = '[name]';
    this.description = '[description]';
    this.addTokens = addTokens;
    this.forceUpdate = forceUpdate;
    this.quantity = 0;
  }

  initialize() {
    console.error('ProducerModel.initialize() called. You need to override this.');
  }

  tic() {
    console.error('ProducerModel.tic() called. You need to override this.');
  }

  price() {
    return Math.floor(50 + 50 * Math.pow(1.2, this.quantity));
  }

  purchase(tokens) {
    if (this.price() <= tokens) {
      this.addTokens(-this.price());
      this.quantity = this.quantity + 1;
    }
  }

  percentage() {
    return 50;
  }

  render() {
    return (
      <div>
        <pre>ProducerModel.render()</pre>
      </div>
    )
  }
}
