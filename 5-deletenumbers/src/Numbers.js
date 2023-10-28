import React, { Component } from 'react';
import Number from './Number';

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [1, 2, 3, 4, 5],
    };
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    console.log(this.state.nums);
    this.setState((st) => ({
      nums: st.nums.filter((n) => n !== num),
    }));
  }

  render() {
    return (
      <div>
        {this.state.nums.map((n) => {
          return <Number key={n} value={n} remove={this.remove} />;
        })}
      </div>
    );
  }
}

export default Numbers;
