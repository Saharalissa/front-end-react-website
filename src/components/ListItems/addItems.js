import React, { useState } from 'react';
// import { render } from 'react-dom';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../actions/index';
// import FileBase from 'react-file-base64';
// import { reducers }   from '../../reducers/index';
import {withRouter} from 'react-router-dom';

const AddItems = ({ currentId }) => {
    const [orderData, setOrderData] = useState({  category: '', quantity: '', weight: '', description: ''});
    const dispatch = useDispatch();
    // const order = useSelector((state) => (orderData ? state.posts.find((message) => message._id === currentId) : null));
    // const order = useSelector(state => state.reducers)
    // useEffect(() => {
    //     if (order) setOrderData(order);
    //   }, [order]);

      const onSubmit = async (e) => {
        e.preventDefault();
    
          dispatch(createOrder(orderData));
          console.log("orderData",orderData)
        //   clear();
        
      };
    return (
        <div>
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
                <label>weight</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {orderData.wights}
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
                {/* <div className = "col">
                            <label>Image</label>
                           <div  id='image' > <img src={this.state.url || "http://via.placeholder.com/50*50"}
                            alt="firebase"  /></div>
                           <input  type="file" onChange={this.handleChangeImage.bind(this)} className="btn btn-deep-orange darken-4" />
                           <button  onClick={this.handleUpload.bind(this)} className="btn btn-deep-orange darken-4">Upload</button>
                           </div>
                            <br />
                  <br /> */}
                {/* <div className = "col">
              <label>Image</label>
              <FileBase type="file" multiple={true}
               onDone={({ base64 }) => setOrderData({ ...orderData, selectedFile: base64 })} />
                </div> */}
              <br />
                <div>
                <button type="submit" onClick= {onSubmit} className="btn btn-deep-orange darken-4">Submit</button>
                </div>
          </form>
        </div>
        </div>
    )
    
}
export default withRouter(AddItems);
