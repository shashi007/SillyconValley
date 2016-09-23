import React from 'react';
import ProducersList from './components/ProducersList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokens: 100
    }
  }

  addTokens(amount) {
    this.setState(({tokens}) => {
      return { tokens: tokens + amount };
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Sillycon Valley</h1>
        <div>
          Cash: ${this.state.tokens}.00
        </div>
        <ProducersList
            addTokens={this.addTokens.bind(this)}
            tokens={this.state.tokens}
            />
        <div className="pull-right">
          v{this.props.version}
        </div>
      </div>
    )
  }
}

