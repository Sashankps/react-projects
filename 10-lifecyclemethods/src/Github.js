import React, { Component } from 'react';
import axios from 'axios';
import './Github.css';

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      imgUrl: '',
      loader: true,
    };
  }
  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    let data = response.data;
    console.log(data);
    setTimeout(
      function () {
        this.setState({
          fullName: data.name,
          imgUrl: data.avatar_url,
          loader: false,
        });
      }.bind(this),
      3000
    );
  }
  render() {
    let check = this.state.loader;
    let result;
    if (check) {
      result = (
        <div class="loader">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <div class="bar4"></div>
          <div class="bar5"></div>
          <div class="bar6"></div>
          <div class="bar7"></div>
          <div class="bar8"></div>
          <div class="bar9"></div>
          <div class="bar10"></div>
          <div class="bar11"></div>
          <div class="bar12"></div>
        </div>
      );
    } else {
      result = (
        <div>
          <h2>Github Stats : {this.state.fullName} </h2>
          <img src={this.state.imgUrl} alt="Github imgUrl" />
        </div>
      );
    }
    return result;
  }
}

export default Github;
