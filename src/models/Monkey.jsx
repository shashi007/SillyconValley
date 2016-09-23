import React from 'react';
import md5 from 'md5';
import _ from 'underscore';

import ProducerModel from './ProducerModel';

const INTERVAL_TIME = 250;
const HASH_LENGTH = 16;

export default class Monkey extends ProducerModel {
  constructor(addTokens, forceUpdate) {
    super(addTokens, forceUpdate);
    this.name = 'Monkey + Typewriter';
    this.description = 'Wait long enough...';
    this.quantity = 1;
    this.hash = '';
  }

  initialize() {
    this.interval = setInterval(() => {
      this.tic();
      this.forceUpdate();
    }, INTERVAL_TIME);
  }

  tic() {
    this.hash = md5(Math.random()).substring(0, HASH_LENGTH);
    let value = this.compareHash(this.hash) * this.quantity;
    this.addTokens(value);
  }

  compareHash(hash) {
    return _.foldl(hash, (acc, v) => v === '1' ? acc + 1 : acc, 0);
  }

  renderHash(hash) {
    return _.map(hash, (v,i) => <span key={i} className={v === '1' ? 'monkey-match' : ''}>{v}</span>);
  }

  price() {
    return Math.floor(50 + 50 * Math.pow(1.2, this.quantity));
  }

  percentage() {
    return this.compareHash(this.hash) / HASH_LENGTH * 100;
  }

  render() {
    return (
      <div className="monkey-render">
        {this.renderHash(this.hash)}
      </div>
    )
  }
}
