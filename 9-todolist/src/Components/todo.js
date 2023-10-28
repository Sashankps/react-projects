import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: this.props.name,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }
  handleRemove() {
    this.props.removeTask(this.props.id);
  }
  toggleEdit() {
    this.setState((st) => ({
      isEditing: !st.isEditing,
    }));
  }
  changeHandler(evt) {
    console.log(evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  updateHandler(evt) {
    evt.preventDefault();
    this.props.updateTask(this.props.id, this.state.name);
    this.setState({
      isEditing: false,
    });
  }
  render() {
    const containerStyle = {
      display: 'flex',
      alignItems: 'center', // Align items vertically in the middle
    };
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form">
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.changeHandler}
              value={this.state.name}
            />
            <button onClick={this.updateHandler}>Update</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <span style={containerStyle}>
            <h2>{this.props.name}</h2>
            <div className="Todo-buttons">
              <button onClick={this.toggleEdit}>Edit</button>
              <button onClick={this.handleRemove}>X</button>
            </div>
          </span>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
