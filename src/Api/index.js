import  axios from 'axios';
const url = 'http://localhost:5000';
//get all items
export const fetchOrders = () => axios.get(url+'/ItemsList' );
//create an item
export const createOrder = (newOrder) => axios.post(url+ '/items', newOrder);
//getting the admin info
export const AdminProfile = () => axios.get(url+'/AdminUser' );
//getting the user profile
export const UserProfile = () => axios.get(url + '/UserProfile' );
export const updateOrder = (id, updateOrder) => axios.put(`${url}/items/${id}`, updateOrder);
export const deleteOrder = (id) => axios.delete(`${url}/delete/${id}`);
export const createUser = (newUser) => axios.post(url+ '/signup', newUser);
export const checkUser = (savedUser) => axios.post(url+ '/signin', savedUser)
