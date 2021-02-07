import {
  PRODUCT_LIST_ERROR,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  SINGLE_PRODUCT_ERROR,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
} from '../constants/productConstants';
import axios from 'axios';

export const product_list = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/products');
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const single_product = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_PRODUCT_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: SINGLE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
