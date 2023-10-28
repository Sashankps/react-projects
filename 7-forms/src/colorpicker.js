import React, { Component } from 'react';

class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      backgroundColor: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      height: 0,
      width: 0,
      backgroundColor: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Box Making</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="height">Height:</label>
            <input
              id="height"
              type="text"
              name="height"
              onChange={this.handleChange}
              value={this.state.height}
            />
          </div>
          <div>
            <label htmlFor="width">Width:</label>
            <input
              id="width"
              type="text"
              name="width"
              onChange={this.handleChange}
              value={this.state.width}
            />
          </div>
          <div>
            <label htmlFor="backgroundColor">Background Color:</label>
            <input
              id="backgroundColor"
              type="text"
              name="backgroundColor"
              onChange={this.handleChange}
              value={this.state.backgroundColor}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div
          style={{
            width: this.state.width + 'px',
            height: this.state.height + 'px',
            backgroundColor: this.state.backgroundColor,
          }}
        ></div>
      </div>
    );
  }
}

export default Colors;
