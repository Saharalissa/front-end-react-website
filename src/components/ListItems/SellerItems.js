import React, { useEffect } from 'react';
import { getALLItems } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';

const SellerItems =() =>{
    const dispatch = useDispatch();
    const orders = useSelector(state => state.Items)
   
    useEffect(() => {
      dispatch(getALLItems());
    }, [dispatch]);

    // useEffect(()=>{
    //     dispatch(getOrders());    // here we want to dispatch an action so we need to creat an action 
    //   })
    
    return (

<div>
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
        image:{post.image}
        </div>
       
          ))}
           </div>
    )

}

export default withRouter(SellerItems);