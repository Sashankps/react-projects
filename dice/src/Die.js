import React, { Component } from 'react';

class Die extends Component {
  render() {
    let number = this.props.value;
    let awsm = `fa-solid fa-dice-${number}`;
    return (
      <div className="">
        <h2 className="">
          <i className={awsm}></i>
        </h2>
      </div>
    );
  }
}

export default Die;
