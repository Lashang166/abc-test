import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducers'

import { userReducer } from './userReducers'

const rootReducer = combineReducers({
   userState: userReducer,
   productState: productReducer,
   cartState: cartReducer
})


export default rootReducer