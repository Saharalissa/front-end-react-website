import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/index';
import { checkUser } from '../../actions/index';

//sign up/sign in component
const Sign = ({ currentId }) => {
    ////this is for sign up
    const [userData, setUserData] = useState({  username: '', email: '', password: '', phoneNumber: '', location: '', image: '', iBan: ''});
    ////this is for sign in
    const [savedUserData, setSavedUserData] = useState({ email: '', password: ''});

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
    
          dispatch(createUser(userData));
          console.log("userData",userData)       
      };

      /////sign in button
      const onSignIn = async (e) => {
        e.preventDefault();
    
          dispatch(checkUser(savedUserData));
          console.log("savedUserData",savedUserData)       
      };

    return (
        <div>
        <div>
        <h1>Sign Up</h1>
        <br />
        <div className = "container">
          <form className="text-center border border-light p-9" action="#!"  >
            <p className="h4 mb-4">Please register your Info</p>
            <br />
                <div className="col">
                <label>Username</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {userData.username}
                  onChange = {(e) => setUserData({ ...userData ,username : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Name"/>
                </div>
                <br />
                <div className="col">
                <label>Email</label>
                <input
                required="true"
                  type = "email"
                  className = "form-control"
                   value = {userData.email}
                  onChange = {(e) => setUserData({ ...userData ,email : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Email"/>
                </div>
                <br />
                <div className = "col">
                  <label>Password</label>
                  <input
                    type = "password"
                    required="true"
                    className = "form-control"
                     value = {userData.password}
                  onChange = {(e) => setUserData({ ...userData ,password : e.target.value})}
                    placeholder = " Insert a password"/>
                </div>
                <br/>
                <div className="col">
                <label>Phone Number</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {userData.phoneNumber}
                  onChange = {(e) => setUserData({ ...userData ,phoneNumber : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Phone Number"/>
                </div>
              <br />
              <div className="col">
                <label>Location</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {userData.location}
                  onChange = {(e) => setUserData({ ...userData ,location : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Location"/>
                </div>
                <br/>
                <div className="col">
                <label>image</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {userData.image}
                  onChange = {(e) => setUserData({ ...userData ,image : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Image"/>
                </div>
                <br/>
                <div className="col">
                <label>iBan</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {userData.iBan}
                  onChange = {(e) => setUserData({ ...userData ,iBan : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert iBan"/>
                </div>
                <div>
                <button type="submit" onClick= {onSubmit} className="btn btn-deep-orange darken-4">Sign Up</button>
                </div>
          </form>
        </div>
        </div>
        <div>
        <h1>Sign In</h1>
        <br />
        <div className = "container">
          <form className="text-center border border-light p-9" action="#!"  >
            <p className="h4 mb-4">Please enter your Info</p>
                <br />
                <div className="col">
                <label>Email</label>
                <input
                required="true"
                  type = "email"
                  className = "form-control"
                   value = {savedUserData.email}
                  onChange = {(e) => setSavedUserData({ ...savedUserData ,email : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Email"/>
                </div>
                <br />
                <div className = "col">
                  <label>Password</label>
                  <input
                    type = "password"
                    required="true"
                    className = "form-control"
                     value = {savedUserData.password}
                  onChange = {(e) => setSavedUserData({ ...savedUserData ,password : e.target.value})}
                    placeholder = " Insert a password"/>
                </div>
                <div>
                <button type="submit" onClick= {onSignIn} className="btn btn-deep-orange darken-4">Sign In</button>
                </div>
          </form>
        </div>
        </div>
        </div>
    )
}

export default Sign;