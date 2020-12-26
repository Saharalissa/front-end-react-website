import React, { useState ,useEffect} from 'react';
import {updateOrder} from '../../actions/index';

import { useDispatch,useSelector } from 'react-redux';

const EditItems = (props) => {
    
    const [orderData, setOrderData] = useState({  category: '', quantity: '', weight: '', description: ''});
    const dispatch = useDispatch();
    const currentId =props.match.params.id

const orders = useSelector(state => state.orders)

    //we will use the useEffect to display the data
    

    // useEffect(  () => {
      
    //   dispatch(getALLItems());
    //      }, [dispatch]);

      const onSubmit = async (e) => {
        e.preventDefault();
     
          dispatch(updateOrder(currentId,orderData));
         
          window.location = '/SellerItems'

        //   clear();
        
      };
      

      
    return (
        <div>
        <h1>Form</h1>
        <br />
        <div className = "container">
          <form className="text-center border border-light p-9" action="#!"  >
            <p className="h4 mb-4">Editing </p>
            <br />
                <div className="col">
                <label>Select Category</label>
                <select
                required="true"
                  className = "form-control"
                   value = {orderData.category}
                  onChange = {(e) => setOrderData({ ...orderData ,category : e.target.value})}
                  text-align = "center"
                 >
                     <option value = "Iron">Iron</option>
                    <option value = "wood">wood</option>
                    <option value = "glass">glass</option>
                    <option value = "plastic">plastic</option>
                    </select>
                    </div>
                     <br />
                <div className="col">
                <label>Quantity</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {orderData.quantity}
                  onChange = {(e) => setOrderData({ ...orderData ,quantity : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Quantity"/>
                </div>
                <br />
                <div className="col">
                <label>weight</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {orderData.weight}
                  onChange = {(e) => setOrderData({ ...orderData ,weight : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Wights"/>
                </div>
                <br />
                <div className = "col">
                  <label>Description  </label>
                  <input
                    type = "text"
                    required="true"
                    className = "form-control"
                     value = {orderData.description}
                  onChange = {(e) => setOrderData({ ...orderData ,description : e.target.value})}
                    placeholder = " Insert a description "/>
                </div>
                <br />
               
              <br />
                <div>
                <button type="submit" onClick= {onSubmit} className="btn btn-deep-orange darken-4">Submit</button>
                </div>
                
          </form>
        </div>
        </div>
    )
    
}
export default EditItems;