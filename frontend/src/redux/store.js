import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

const reducers = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const cartItemFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: {
    cartItems: cartItemFromLocalStorage,
  },
};
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
