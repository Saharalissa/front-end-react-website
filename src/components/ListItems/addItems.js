import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../actions/index';
import { getPrice } from '../../actions';
import { storage } from '../Profile/firbase'
import AddNav from '../Navbar/addNav';
import {withRouter} from 'react-router-dom';


var Total
const AddItems = ({ currentId }) => {
    const [orderData, setOrderData] = useState({  category: '', quantity: '', weight: '', description: '', price:'',image:'',user_id:localStorage.getItem('user_id') });
    const dispatch = useDispatch();
    const [image, setUserImage] = useState()
    const onSubmit = async (e) => {
        e.preventDefault();
    
          dispatch(createOrder(orderData));
         window.location='/SellerItems'

    }

          function handleChangeImage(e){
            e.preventDefault();
              setUserImage( e.target.files[0])
              console.log(e.target.files[0])
            }
            const imageUpload  = async (e) => {
              const imageLink = storage.ref(`images/${image.name}`).put(image)
              imageLink.on(
                 "state_changed",
                 snapshot => {},
                 error => {
                   console.log(error)
                 },
                 () => {
                   storage
                   .ref("images")
                   .child(image.name)
                   .getDownloadURL()
                   .then(url => {
                    orderData.image = url
                     console.log(url)
                   })
                 })
            }
           
             /// to get the object of costs for each material(category)
    var priceObj = getPrice();
    var category=orderData.category
    /// to get the price for the entered material
    for (var key in priceObj){
      if(category===key)
      var price = priceObj[key]
      // var price = orderData.price
      
    }
    
    // to get the entered Quantity and Weight
    var Quantity=orderData.quantity
    var Weight=orderData.weight
    //To calculate the total price for the order
    Total = Weight*price*Quantity
    //add the order price to the orderData object to save it on the database
    orderData.price = Total
    console.log("price:", Total)
       
        
   
    return (
        <div>
          <AddNav/>
        <h1>Form</h1>
        <br />
        <div className = "container">
          <form className="text-center border border-light p-9" action="#!"  >
            <p className="h4 mb-4">Help your environment by recycling trash</p>
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
                <label>Unit weight</label>
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
                <div className="col">
                <label>image</label>
                <input
                  required={true}
                  type='file'
                  className = "form-control"
                  onChange = {handleChangeImage}
                  />
                   <button  onClick= {imageUpload} className="btn btn-deep-orange darken-4">upload Image</button>
                </div>


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
                <strong>Enviroment support by the government(JD): {Total}</strong>
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
export default withRouter (AddItems);





