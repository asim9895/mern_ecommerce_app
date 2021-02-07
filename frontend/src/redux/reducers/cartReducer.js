import { CART_ADD_ITEM, CART_DELETE_ITEM } from '../constants/cartConstants';

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CART_ADD_ITEM:
      const item = actions.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== actions.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
