import React, { useEffect } from 'react';
import { getALLItems, purchaseProcess } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import {Button} from 'react-bootstrap';
import AdminItemsNav from '../Navbar/adminItemsNav';

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


    function purchaseFunc(itemId,price){
      var purchaseInfo ={
        sender_item_id : itemId,
        price: price
      }
      
      dispatch(purchaseProcess(purchaseInfo));
      window.location='/AdminItems'
    }

    return (
         <div>
           <AdminItemsNav/>
          {Items.map((Item) => (
        <div style={{ border: '1px solid black', margin: "6px" }} >

        category: {Item.category}
        <br></br>
        quantity:  {Item.quantity}
        <br></br>
        weight:  {Item.weight}
        <br></br>
        description:  {Item.description}
        <br></br>
        image:  <img src={Item.image}/>

        <Button variant="outline-primary">Primary</Button>{' '}

        <button type="primary" onClick= {()=> {purchaseFunc(Item.id,Item.price)}} >Buy </button>

        </div>
       
          ))}
           </div>
    )

}

export default AdminItems;


