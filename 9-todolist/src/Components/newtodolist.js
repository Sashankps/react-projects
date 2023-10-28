import React, { Component } from 'react';
import './newtodolist.css';

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(evt) {
    console.log(evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  submitHandler(evt) {
    evt.preventDefault();
    this.props.newTodo(this.state);
    this.setState({
      name: '',
    });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.submitHandler}>
        <label htmlFor="name">Task name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default NewTodo;
