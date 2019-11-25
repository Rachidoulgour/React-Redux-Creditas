import { combineReducers } from 'redux';
import userReducer from './UserReducers';
import isLoggedReducer from './IsLogged';
import productReducer from './ProductReducers';

const rootReducer = combineReducers({
  user: userReducer,
  isLogged: isLoggedReducer,
  getProduct: productReducer,
});

export default rootReducer;