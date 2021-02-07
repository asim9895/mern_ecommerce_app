import {
  PRODUCT_LIST_ERROR,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  SINGLE_PRODUCT_ERROR,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
} from '../constants/productConstants';

const initialState = {
  products: [],
  loading: false,
  error: null,
  singleProduct: null,
};

export const productReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SINGLE_PRODUCT_REQUEST:
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
      };

    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: actions.payload,
      };
    case SINGLE_PRODUCT_ERROR:
    case PRODUCT_LIST_ERROR:
      return {
        loading: false,
        error: actions.payload,
      };
    case SINGLE_PRODUCT_SUCCESS:
      return {
        loading: false,
        singleProduct: actions.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
