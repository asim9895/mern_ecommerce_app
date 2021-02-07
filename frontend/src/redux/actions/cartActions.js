import { CART_ADD_ITEM, CART_DELETE_ITEM } from '../constants/cartConstants';
import axios from 'axios';

export const add_cart_item = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const delete_cart_item = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_DELETE_ITEM,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
