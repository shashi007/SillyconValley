import React from 'react';
import ProducerInfo from './ProducerInfo';

export default class Producer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: new props.model(props.addTokens, this.forceUpdate.bind(this))
    };
  }

  componentDidMount() {
    this.state.model.initialize();
  }

  render() {
    const m = this.state.model;
    return (
      <div className="flex-row">
        <ProducerInfo
            name={m.name}
            description={m.description}
            price={m.price()}
            purchase={() => m.purchase(this.props.tokens)}
            percentage={m.percentage()}
            quantity={m.quantity === 0 ? '0' : m.quantity}
        />
        <div className="flex-render">
          {m.render()}
        </div>
      </div>
    )
  }
}
