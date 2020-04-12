import {
  ADD_TO_CART,
  GET_CART_ITEMS,
  DELETE_FROM_CART,
  SAVE_FOR_LATER,
} from "../actions/types";

const initialState = {
  carts: [],
  saved: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        carts: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
      };
    case SAVE_FOR_LATER:
        return {
          ...state,
          carts: [...state.carts, action.payload],
          saved: [...state.saved, action.payload],
        };    
    default:
      return state;
  }
};

export default cartReducer;
