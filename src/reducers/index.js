// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import { combineReducers } from 'redux';
import Items from './Items.js';
import Profiles from './profiles.js';
import user from './authReducer';
import saveduser from './authInReducer';

const AllReducers = combineReducers({ Items, user, saveduser, Profiles });

export default  AllReducers;

