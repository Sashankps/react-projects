import react, { Component } from 'react';

class Number extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (num) => {
    console.log('Inside handleClick');
    this.props.remove(this.props.value);
  };
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.value}</h2>
          <button onClick={this.handleClick}>X</button>
        </div>
      </div>
    );
  }
}

export default Number;
