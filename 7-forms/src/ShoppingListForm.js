import React, { Component } from 'react';

class Shoppinglistform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: '',
        quantity: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState((st) => ({
      item: {
        ...st.item,
        [evt.target.name]: evt.target.value,
      },
    }));
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.newItem(this.state.item);
    this.setState({
      item: {
        name: '',
        quantity: '',
      },
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">New Item </label>
          <input
            type="text"
            id="item"
            name="name"
            value={this.state.item.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="quantity"
            value={this.state.item.quantity}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Shoppinglistform;
