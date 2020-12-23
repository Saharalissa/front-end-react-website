import axios from 'axios';


//we  use the same port of our server port (heroku local)
const url = 'http://localhost:5000';

//http request to routs
export const fetchOrders = () => axios.get(url + '/ItemsList');
export const createOrder = (newOrder) => axios.post(url+ '/items', newOrder);
export const createUser = (newUser) => axios.post(url+ '/signup', newUser);
export const checkUser = (savedUser) => axios.post(url+ '/signin', savedUser);

//getting the admin info
export const AdminProfile = () => axios.get(url+'/AdminUser' );
//getting the user profile
export const UserProfile = () => axios.get(url + '/UserProfile' );
