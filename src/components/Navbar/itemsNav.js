import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ItemsNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
    <div>
    <nav>
    <Link to="/" > DAWERHA </Link>
    <Link to="/home"> Home </Link>
    <Link to="/SellerProfile"> Profile </Link>
    <Link to="/AddItems"> Add Items</Link>
    </nav>
    </div>
    );
  }
}