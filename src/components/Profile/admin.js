import React, { useEffect } from 'react';
import { getAdmin } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import AdminNav from '../Navbar/adminNav'
// we are retreiving all the admin items 
const AdminProfile =() =>{
    // we are dipatching th state
    const dispatch = useDispatch();
    //we are declaring a new const called items which will save all the items in it 
    
    const AdminProfile = useSelector(state => state.Profiles)
    // we are rendering the whole items instantly when we load our page 
    useEffect(() => {
      dispatch(getAdmin());
    }, [dispatch]);

    return (
         <div>
           <AdminNav/>
          {AdminProfile.map((Info) => (
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

export default AdminProfile;
