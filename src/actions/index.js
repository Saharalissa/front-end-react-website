import * as api from '../Api/index.js';

/* Action creators:
  the idea of using async is : we work with async data to feach all the items so some time we have to pass it 
  to do that we will use thunk it allow as to make additionall arrow function that will dispatch the action
  to make every think /work as we want  by try and catch */


//retreiving all the items and Dispatching them
export const getALLItems = () => async (dispatch) => {
  try {
    const {data} = await api.fetchOrders();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


//action for adding new order
  export const createOrder = (order) => async (dispatch) => {
    try {
      const { data } = await api.createOrder(order);
      dispatch({ type: "CREATE", payload: order });
      console.log( "DISPAATCH(ACTION) :",dispatch({ type: "CREATE", payload: order }))
    } catch (error) {
      console.log(error.message);
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
      console.log(error.message);
      alert('email already exists') 
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
        localStorage.setItem('isAuth', data.auth);
        window.location = '/';
      // console.log(data.token)
      // console.log(saveduser)
    } catch (error) {
      console.log(error.message);
      alert("email or password is incorrect");
    }
  };
