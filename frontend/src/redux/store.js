import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import userDetailsReducer from './reducers/userDetailsReducer';

const reducers = combineReducers({
  product: productReducer,
  cart: cartReducer,
  user: userReducer,
  userDetail: userDetailsReducer,
});

const cartItemFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const userDetailsFromLocalStorage = localStorage.getItem('userDetails')
  ? JSON.parse(localStorage.getItem('userDetails'))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemFromLocalStorage,
  },
  user: {
    userInfo: userInfoFromLocalStorage,
  },
  userDetail: {
    userDetails: userDetailsFromLocalStorage,
  },
};
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
