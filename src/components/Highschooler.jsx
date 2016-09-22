import React from 'react';
import Producer from './Producer';
import _ from 'underscore';

const INTERVAL_TIME = 250;

export default class Highschooler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tic();
    }, INTERVAL_TIME)
  }

  tic() {
    let value = 1 * this.state.quantity;
    this.props.addTokens(value);
  }

  purchase() {
    this.setState({quantity: this.state.quantity + 1});
  }

  render() {
    let x = Math.floor(Math.random() * 10) + 1;
    let y = Math.floor(Math.random() * 10) + 1;

    return (
      <div className="flex-row">
        <Producer
            name='Highschooler'
            description='Shitty, but cheap'
            baseRate=''
            percentage={50}
            purchase={this.purchase.bind(this)}
            quantity={this.state.quantity}
        />
        <div className="flex-render highschooler-render">
          {this.state.quantity > 0 ? `${x} + ${y} = ${x + y}` : ''}
        </div>
      </div>
    )
  }
}
