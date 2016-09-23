import React from 'react';
import ProducerInfo from './ProducerInfo';
import md5 from 'md5';
import _ from 'underscore';

const INTERVAL_TIME = 250;
const HASH_LENGTH = 16;

export default class Monkey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      hash: ''
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tic();
    }, INTERVAL_TIME)
  }

  tic() {
    let hash = md5(Math.random()).substring(0, HASH_LENGTH);
    let value = this.compareHash(hash) * this.state.quantity;
    this.props.addTokens(value);
    this.setState({hash});
  }

  compareHash(hash) {
    return _.foldl(hash, (acc, v) => v === '1' ? acc + 1 : acc, 0);
  }

  renderHash(hash) {
    return _.map(hash, (v,i) => <span key={i} className={v === '1' ? 'monkey-match' : ''}>{v}</span>);
  }

  purchase() {
    if (this.price() <= this.props.tokens) {
      this.props.addTokens(-this.price());
      this.setState({quantity: this.state.quantity + 1});
    }
  }

  price() {
    return Math.floor(50 + 50 * Math.pow(1.2, this.state.quantity));
  }

  render() {
    return (
      <div className="flex-row">
        <ProducerInfo
            name='Monkey + Typewriter'
            description='Wait long enough..'
            baseRate=''
            price={this.price()}
            purchase={this.purchase.bind(this)}
            percentage={this.compareHash(this.state.hash) / HASH_LENGTH * 100}
            quantity={this.state.quantity}
        />
        <div className="flex-render monkey-render">
          {this.renderHash(this.state.hash)}
        </div>
      </div>
    )
  }
}
