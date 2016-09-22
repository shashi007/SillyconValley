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
        <div>
          Tokens: { this.state.tokens }
        </div>
        <ProducersList
            addTokens={this.addTokens.bind(this)}
            />
      </div>
    )
  }
}

