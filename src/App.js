import React , {useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminProfile from './components/Profile/admin'
import SellerProfile from './components/Profile/user'
import AdminItems from './components/ListItems/admin'
import SellerItems from './components/ListItems/SellerItems'
import Homepage from './components/NavBar&homepage/homepage'
import AddItems from './components/ListItems/addItems'
import Sign from './components/Profile/Sign'
import { getALLItems } from './actions';
// import { useDispatch } from 'react-redux';
// import {useSelector} from 'react-redux'

function App() {
  // we need to define this dispatch using hooks
  // const dispatch = useDispatch();
  // // now we have access to this dispatch we need to find a way where we will dispatch this action ---the best way inside use Effect  : it is like component didmount
  // useEffect(() => {
  //   dispatch(getALLItems());
  // }, [dispatch]);

  return (
    <div>
      
      <Router className="container">
      <div>
        <Route path="/" component={Homepage} />
        <Route path="/SellerItems" component={SellerItems} />
        <Route path="/AdminItems" component={AdminItems} />
        <Route path = "/AdminProfile"  component = {AdminProfile} />
        <Route path="/SellerProfile" component={SellerProfile} />
        <Route path="/AddItems" component={AddItems} />
        <Route path="/sign"  component={Sign} />
      </div>
    </Router>
  
  </div>
  );
}

export default App;
