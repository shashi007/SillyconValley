import React from 'react';
import Producer from './Producer';
import _ from 'underscore';

const INTERVAL_DURATION = 1000;

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

export default class Highschooler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      percentage: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tic();
    }, INTERVAL_DURATION / 30);
  }

  tic() {
    if (this.state.percentage >= 99) {
      let value = 1 * this.state.quantity;
      this.props.addTokens(value);
      let i = Math.floor(Math.random() * loc.length);
      this.setState({text: loc[i], percentage: 0});
    }
    this.setState({percentage: this.state.percentage + 100 / 30});
  }

  purchase() {
    if (this.price() <= this.props.tokens) {
      this.props.addTokens(-this.price());
      this.setState({quantity: this.state.quantity + 1});
    }
  }

  price() {
    return Math.floor(100 + 100 * Math.pow(1.2, this.state.quantity));
  }

  render() {

    return (
      <div className="flex-row">
        <Producer
            name='Highschooler'
            description='Shitty, but cheap'
            baseRate=''
            price={this.price()}
            percentage={this.state.percentage}
            purchase={this.purchase.bind(this)}
            quantity={this.state.quantity}
        />
        <div className="flex-render highschooler-render">
          {this.state.text}
        </div>
      </div>
    )
  }
}
