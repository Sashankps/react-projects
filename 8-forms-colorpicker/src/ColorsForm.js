import React, { Component } from 'react';

class ColorsForm extends Component {
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

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.newItem(this.state);
    this.setState({
      height: 0,
      width: 0,
      backgroundColor: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="width">Width:</label>
            <input
              type="text"
              id="width"
              name="width"
              onChange={this.handleChange}
              value={this.state.width}
            />
          </div>
          <div>
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              id="width"
              name="height"
              onChange={this.handleChange}
              value={this.state.height}
            />
          </div>
          <div>
            <label htmlFor="backgroundColor">Background Color:</label>
            <input
              type="text"
              id="backgroundColor"
              name="backgroundColor"
              onChange={this.handleChange}
              value={this.state.backgroundColor}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ColorsForm;
