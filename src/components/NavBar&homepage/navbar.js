import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';


export default class Navbar extends Component {
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
    <Link to="/SellerItems"> seller Items</Link>
    <Link to="/sign" >sign in</Link>
    <Link to="/AdminItems"> Admin Items </Link>
    <Link to="/AddItems"> Add Items </Link>
    <Link to="/AdminProfile"> Admin Profile </Link>
    <Link to="/SellerProfile"> Seller Profile </Link>
    <Link to="/" onClick={() => {localStorage.removeItem('token'); window.location.reload()}}> Sign out </Link>
    
    </nav>
    </div>
    );
  }
}