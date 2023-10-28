import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 'one',
      y: 'five',
    };
  }
  render() {
    const values = ['one', 'two', 'three', 'four', 'five', 'six'];

    const clickHandler = () => {
      this.setState({
        x: values[Math.floor(Math.random() * values.length)],
      });
      this.setState({
        y: values[Math.floor(Math.random() * values.length)],
      });
    };
    return (
      <div className="roll-main">
        <div className="roll-comp">
          <Die value={this.state.x} />
          <Die value={this.state.y} />
        </div>
        <button onClick={() => clickHandler()}>Roll bruv</button>
      </div>
    );
  }
}

export default RollDice;
