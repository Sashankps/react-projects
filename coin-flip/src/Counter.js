import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>{`Out of ${this.props.flips} flips, there have been ${this.props.heads} heads and ${this.props.tails} tails `}</h2>
      </div>
    );
  }
}
export default Counter;
