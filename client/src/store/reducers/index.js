import { combineReducers } from 'redux';
import { productReducer } from './productReducer';

import { userReducer } from './userReducers'

const rootReducer = combineReducers({
   userState: userReducer,
   productState: productReducer
})


export default rootReducer