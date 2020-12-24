import React, { Component } from "react";
// import Navbar from '../Navbar/navbar';

export default class Viewpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
    <div>
 <button onClick={() => {window.location='/sign'}}>sign up</button>
 <button onClick={() => {window.location='/sign'}}>sign in</button>
    </div>
    );
  }
}