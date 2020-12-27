import React, { useEffect , useState } from 'react';
import {connect} from 'react-redux';
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
    // const Filter = orders.filter(items => items.user_id==localStorage.getItem('user_id'))
    
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
      <table className = "table" >
               <thead className = "thead">
                   <tr>
                       <th>Category</th>
                       <th>Quantity</th>
                       <th>Weight</th>
                       <th>Description</th>
                       <th>Image</th>
                       <th>Enviroment support</th>
                       <th>Status</th>
                       <th>Update</th>
                       <th>Delete</th> 
                   </tr>
               </thead>
               <tbody >
                  { orders.filter(items => items.user_id==localStorage.getItem('user_id')).map((post) => (
                     <tr>
                     <td>{post.category}</td>
                     <td>{post.quantity}</td>
                     <td class="form-row justify-content-center">{post.weight}</td>
                     <td>{post.description}</td>
                     <td>
                     <img src= {post.image} width="120" height="120" class="w3-round" />
                     {console.log(post.image)}
                     </td>
                     <td class="form-row justify-content-center">{post.price}</td>
                     <td>{post.status}</td>
                     <td>
                     <Link to ={"/EditItems/"+post.itemID} >update</Link></td>
                     <td><button  type="submit" onClick={() => onSubmit(post.itemID) }>Delete</button></td>
                 </tr>
       
        
       
          ))}  
                   
              </tbody>
               </table>
       
           </div>
    )

}

export default withRouter(SellerItems);