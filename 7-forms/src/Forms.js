import React, { Component } from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    console.log(evt.target);
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefaults();
    alert(`${this.state.password}`);
    this.setState({
      username: '',
      password: '',
      email: '',
    });
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
