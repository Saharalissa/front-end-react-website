import React, { useEffect } from 'react';
import { getALLItems } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import AdminItemsNav from '../Navbar/adminItemsNav';
import ItemsNav from '../Navbar/itemsNav'
// import {Button} from 'react-bootstrap'
// we are retreiving all the admin items 
const AdminItems =() =>{
    // we are dipatching th state
    const dispatch = useDispatch();
    //we are declaring a new const called items which will save all the items in it 
    const Items = useSelector(state => state.Items)
    // we are rendering the whole items instantly when we load our page 
    useEffect(() => {
      dispatch(getALLItems());
    }, [dispatch]);

    return (
         <div>
             {/* {localStorage.getItem('user_id') === 1? "areen": "notareen"} */}
          {Items.map((Item) => (
        <div style={{ border: '1px solid black', margin: "6px" }} >

        category: {Item.category}
        <br></br>
        quantity: {Item.quantity}
        <br></br>
        weight:{Item.weight}
        <br></br>
        description:{Item.description}
        <br></br>
        image:{Item.image}
        <button variant="primary" >hey </button>
        </div>
       
          ))}
           </div>
    )

}

export default AdminItems;


// const dispatch = useDispatch();
//   // // now we have access to this dispatch we need to find away where we will dispatch this action ---the best way inside use Effect  : it is like component didmount
//   useEffect(()=>{
//     dispatch(getALLItems());    // here we want to dispatch an action so we need to creat an action 
//   },[dispatch])
