/// the team member who is handiling this task  add delete update should add the required folders here 
import React, { useEffect,useState} from 'react';
import { getUser } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ProfileNav from '../Navbar/profileNav'


// we are retreiving all the admin items 
const UserProfile =() =>{
    // we are dipatching th state
    const dispatch = useDispatch();
    //we are declaring a new const called items which will save all the items in it 
    // authInreducers
    // const loggedin = useSelector(state => state.authInReducer)
    var Userb=localStorage.getItem('user_id')
    console.log(Userb)
  //   const [loggedin,setLoggedin] = useState(Userb)
  // console.log(loggedin)
    const UserProfile = useSelector(state => state.Profiles)
    
  
   
  
    // we are rendering the whole items instantly when we load our page 
    useEffect(() => {
      dispatch(getUser());
    }, [dispatch]);
    
    return (
         <div>
             < ProfileNav/>
              {UserProfile.filter (Users  => Users.userID == Userb
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
