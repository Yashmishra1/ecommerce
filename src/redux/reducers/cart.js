import { ADD_TO_CART, REMOVE_FROM_CART } from '../ActionTypes';

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      return state.filter((item, index) => index !== action.payload);

    default:
      return state;
  }
};

export default cart;
