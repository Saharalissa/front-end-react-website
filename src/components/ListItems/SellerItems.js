import React, { useEffect , useState } from 'react';
import { getALLItems } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import {  Link} from "react-router-dom" ;
import { updateOrder,deleteOrder } from '../../actions/index';

import {withRouter} from 'react-router-dom';
import ItemsNav from '../Navbar/itemsNav';
import AdminItemsNav from '../Navbar/adminItemsNav';


const SellerItems =({currentId}) =>{
    const dispatch = useDispatch();

    

    const orders = useSelector(state => state.Items)
   
    useEffect(() => {
      dispatch(getALLItems());
    }, [dispatch]);


    

    const onSubmit = async (e) => {
 
      dispatch(deleteOrder(e))
      window.location.href = '/SellerItems'

 };
 
   return (
<div>
      <ItemsNav/>
  
          {orders.map((post) => (
        <div style={{ border: '1px solid black', margin: "6px" }} >

        category: {post.category}
        <br></br>
        quantity: {post.quantity}
        <br></br>
        weight:{post.weight}
        <br></br>
        description:{post.description}
        <br></br>

        image:<img src = {post.image}/>

        image:{post.image}


        <div>
        <Link to ={"/EditItems/"+post.itemID} >update</Link>
                <button  type="submit" onClick={() => onSubmit(post.itemID) }>Delete</button>
                </div>
 </div>
       
          ))}
           </div>
    )

}

export default withRouter(SellerItems);