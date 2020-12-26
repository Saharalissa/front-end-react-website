import React, { Component } from "react";
import HomeNav from '../Navbar/homeNav';
import MapContainer from '../map.js'
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
    {/* <MapContainer/> */}
    instructions to user how to use our app!
    </div>
    );
  }
}