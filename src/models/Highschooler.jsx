import React from 'react';

import ProducerModel from './ProducerModel';

const INTERVAL_DURATION = 1000;
const INTERVAL_STEP = 30;

const loc = [
  'while (true) {',
  'function foo(x) { foo(x); }',
  'if (true) {',
  'func x = func x + 1',
  'console.log(\'whyyy\')',
  'println("hello world")',
  'puts "hello world"',
  'loop: goto loop',
  'globalVar = 42',
  'assertEqual(true, true)'
];

export default class Highschooler extends ProducerModel {
  constructor(addTokens, forceUpdate) {
    super(addTokens, forceUpdate);
    this.name = 'Highschooler';
    this.description = 'Not too smart, but not too expensive, either';
    this.value = 0;
    this.text = '';
  }

  initialize() {
    this.interval = setInterval(() => {
      this.tic();
      this.forceUpdate();
    }, INTERVAL_DURATION / INTERVAL_STEP);
  }

  tic() {
    if (this.quantity < 1) { return; }
    if (this.value >= 100 - (100 / INTERVAL_STEP)) {
      this.addTokens(this.quantity);
      this.value = 0;
      this.setRandomLoc();
    }
    this.value = this.value + 100 / INTERVAL_STEP;
  }

  setRandomLoc() {
    let i = Math.floor(Math.random() * loc.length);
    this.text = loc[i];
  }

  price() {
    return Math.floor(60 + 60 * Math.pow(1.2, this.quantity));
  }

  percentage() {
    return this.value;
  }

  render() {
    return (
      <div className="highschooler-render">
        {this.text}
      </div>
    )
  }
}
