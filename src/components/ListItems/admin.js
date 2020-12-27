// import React, { useEffect } from 'react';
// import { getALLItems, purchaseProcess } from '../../actions';
// import { useDispatch,useSelector } from 'react-redux';
// import {Button} from 'react-bootstrap';
// import AdminItemsNav from '../Navbar/adminItemsNav';

// // we are retreiving all the admin items 
// const AdminItems =() =>{
//     // we are dipatching th state
//     const dispatch = useDispatch();
//     //we are declaring a new const called items which will save all the items in it 
//     const Items = useSelector(state => state.Items)

//     // we are rendering the whole items instantly when we load our page 
//     useEffect(() => {
//       dispatch(getALLItems());
//     }, [dispatch]);


//     function purchaseFunc(itemId,price){
//       var purchaseInfo ={
//         sender_item_id : itemId,
//         price: price
//       }
      
//       dispatch(purchaseProcess(purchaseInfo));
//       window.location='/AdminItems'
//     }

//     return (
//          <div>
//            <AdminItemsNav/>
//           {Items.map((Item) => (
//         <div style={{ border: '1px solid black', margin: "6px" }} >

//         category: {Item.category}
//         <br></br>
//         quantity:  {Item.quantity}
//         <br></br>
//         weight:  {Item.weight}
//         <br></br>
//         description:  {Item.description}
//         <br></br>
//         image:  <img src={Item.image}/>

//         <Button variant="outline-primary">Primary</Button>{' '}

//         <button type="primary" onClick= {()=> {purchaseFunc(Item.id,Item.price)}} >Buy </button>

//         </div>
       
//           ))}
//            </div>
//     )

// }

// export default AdminItems;

import React, { useEffect , useState } from 'react';
import { getALLItems, purchaseProcess } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import {  Link} from "react-router-dom" ;
import { updateOrder,deleteOrder } from '../../actions/index';
// import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import ItemsNav from '../Navbar/itemsNav';
import AdminItemsNav from '../Navbar/adminItemsNav';


const AdminItems =({currentId}) =>{

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

    const onSubmit = async (e) => {
 
      dispatch(deleteOrder(e))
      window.location.href = '/SellerItems'

 };
 
   return (
<div>
<AdminItemsNav/>
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
                  { Items.map((Item) => (
                     <tr>
                     <td>{Item.category}</td>
                     <td>{Item.quantity}</td>
                     <td class="form-row justify-content-center">{Item.weight}</td>
                     <td>{Item.description}</td>
                     <td>
                     <img src= {Item.image} width="120" height="120" class="w3-round" />
                     {console.log(Item.image)}
                     </td>
                     <td class="form-row justify-content-center">{Item.price}</td>
                     <td>{Item.status}</td>
                     <td>
                     <Link to ={"/EditItems/"+Item.itemID} >update</Link></td>
                     <td><button  type="submit" onClick={() => onSubmit(Item.itemID) }>Delete</button></td>
                 </tr>
       
        
       
          ))}  
                   
              </tbody>
               </table>
       
           </div>
    )

}

export default withRouter(AdminItems);
