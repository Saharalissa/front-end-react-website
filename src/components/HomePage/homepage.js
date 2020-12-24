import React, { Component } from "react";
import HomeNav from '../Navbar/homeNav';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
    <div>
    <HomeNav/>
    instructions to user how to use our app!
    </div>
    );
  }
}