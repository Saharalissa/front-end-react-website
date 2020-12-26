import * as api from '../Api/index.js';
// I am retreiving all the items and Dispatching them
export const getALLItems = () => async (dispatch) => {
  try {
 
    const {data} = await api.fetchOrders()
    dispatch({ type: 'FETCH_ALL', payload: data });
    
  
   } catch (error) {
    console.log(error.message);
 }
};
//create items 
export const createOrder = (order) => async (dispatch) => {
  try {
    const { data } = await api.createOrder(order);

    dispatch({ type: "CREATE", payload: order });
    console.log( "DISPAATCH(ACTION) :",dispatch({ type: "CREATE", payload: order }))
  } catch (error) {
    console.log(error.message);
  }
};


//update the order
export const updateOrder = (id, order) => async (dispatch) => {
  try {
    const { data } = await api.updateOrder(id, order);
 

    dispatch({ type: "UPDATE", payload: id, order });
  } catch (error) {
    console.log(error.message);
  }
};
//delete the item
export const deleteOrder = (id) => async (dispatch) => {
  try {
   const {data} = await api.deleteOrder(id);
      dispatch ( { type: "DELETE", payload: data });
      } 
      catch (error) {
    console.log( error.message );
  }
};

//action to add a new user
export const createUser = (user) => async (dispatch) => {
  try {
    const {data} = await api.createUser(user)
    dispatch({ type: "ADD", payload: user});
    console.log("DISPATCH(ADD) : ", dispatch({ type: "ADD", payload: user}))
    alert('Congrats, you are registered successfully, you can login now')
  } catch (error) {
    if (!user.username || !user.email || !user.password || !user.phoneNumber || !user.location || !user.image) {
      alert ("please fill all required feilds")
    }
   else {
    console.log(user);
    alert("email already exist");
   } 
  }
};
//action to check if user is saved to sign in
export const checkUser = (saveduser) => async (dispatch) => {
  try {
    const {data} = await api.checkUser(saveduser);
    dispatch({ type: "CHECK", payload: data});
    console.log("DISPATCH(CHECK) : ", dispatch({ type: "CHECK", payload: data}));
    console.log(data)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user_id',data.result[0].userID)
      // localStorage.setItem('isAuth', data.auth);
      if (data.result[0].userID === 1) {
        window.location = 'AdminProfile';
      } else {
         window.location = '/home';
      }
      console.log(data)
    // console.log(saveduser)
  } catch (error) {
    console.log(error.message);
    // console.log(saveduser.email);
     if (!saveduser.email || !saveduser.password) {
      alert("email or password is empty");
    }
    else {alert("email or password is incorrect")};
  }
};
// getting the admin info
export const getAdmin = () => async (dispatch) => {
  try {
    const {data} = await api.AdminProfile();

    dispatch({ type: 'AdminInfo', payload: data });
  
  } catch (error) {
    console.log(error.message);
  }
};
//getting the user info
export const getUser = () => async (dispatch) => {
  try {
    const {data} = await api.UserProfile();
      
    dispatch({ type: 'UserInfo', payload: data });
  
  } catch (error) {
    console.log(error.message);
  }
};

// making the price
export const getPrice = () =>  {
  try {
    const costs = {Iron: 0.25,
                    wood:0.10,
                    glass:0.15,
                    plastic:0.12
                  }
   return costs
  } catch (error) {
    console.log(error.message);
  }
};



export const purchaseProcess = (purchaseInfo) => async (dispatch) => {
  try {
    const {data} = await api.payPal(purchaseInfo);
    
    dispatch({ type: 'PURCHASE', payload: data });
    console.log("DISPATCH(ADD) : ", purchaseInfo )
  } catch (error) {
    console.log(error.message);
  }
};






