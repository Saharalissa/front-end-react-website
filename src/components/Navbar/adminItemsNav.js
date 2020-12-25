import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminItemsNav extends Component {
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
    <Link to="/AdminProfile"> Users Profiles </Link>
    <Link to="/" onClick={() => {localStorage.removeItem('token'); localStorage.removeItem('user_id'); window.location.reload()}}> Sign out </Link>
    </nav>
    </div>
    );
  }
}