import React, { Component } from 'react';
import Counter from './Counter';

class Flipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 0,
      flips: 0,
      heads: 0,
      tails: 0,
    };
  }
  render() {
    const flip = () => {
      this.setState((st) => {
        const newImg = Math.floor(Math.random() * 2) + 1;
        let newHeads = st.heads;
        let newTails = st.tails;

        if (newImg === 1) {
          newHeads++;
        } else {
          newTails++;
        }

        return {
          img: newImg,
          flips: st.flips + 1,
          heads: newHeads,
          tails: newTails,
        };
      });
    };
    return (
      <div>
        <h1>Coin Flipper </h1>
        {this.state.img === 1 ? (
          <img
            src="https://media.istockphoto.com/id/476098227/photo/1-cent-coin-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=8gdvW8Btxtz39wK3kysHZNz1EGLojfIuW_WJ2mgCm3w="
            alt="heads"
            height="100px"
            width="100px"
          />
        ) : (
          <img
            src="https://media.istockphoto.com/id/476098857/photo/1-cent-coin-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=bHPUaHoI4EO5lZmyAhn5mKR4a2Q6ETKQcYzsh35pHjs="
            alt="tails"
            height="100px"
            width="100px"
          />
        )}
        <button onClick={() => flip()}>Flip</button>
        <Counter
          flips={this.state.flips}
          tails={this.state.tails}
          heads={this.state.heads}
        />
      </div>
    );
  }
}
export default Flipper;
