/// the team member who is handiling this task  add delete update should add the required folders here 



import React, { useEffect} from 'react';
import { getUser } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ProfileNav from '../Navbar/profileNav';
import authInReducer from '../../reducers/authInReducer';

// we are retreiving all the admin items 
const UserProfile =() =>{
    // we are dipatching th state
    const dispatch = useDispatch();
    //we are declaring a new const called items which will save all the items in it 
    // authInreducers
    const loggedin = useSelector(state => state.authInReducer[0])
    console.log(loggedin)
    // const loggedin = localStorage.getItem('UserId')
    const UserProfile = useSelector(state => state.Profiles)
    console.log(loggedin)
  
   
  
    // we are rendering the whole items instantly when we load our page 
    useEffect(() => {
      dispatch(getUser());
    }, [dispatch]);
    
    return (
         <div>
              <ProfileNav/>
              {UserProfile.filter (Users  => Users.userID === loggedin
         ).map((Info) => (
        <div style={{ border: '1px solid black', margin: "6px" }} >

         username: {Info.username}
        <br></br>
        email:   {Info.email}
        <br></br>
        phoneNummber:  {Info.phoneNummber}
        <br></br>
        location:   {Info.location}
        <br></br>
        image:   {Info.image}
        <Button variant="outline-primary">Primary</Button>{' '}
        </div>
       
          ))}
           </div>
    )

}

export default UserProfile;