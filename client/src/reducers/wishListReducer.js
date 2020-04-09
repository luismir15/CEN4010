import { ADD_WISHLIST, GET_WISHLIST, DELETE_WISHLIST } from "../actions/types";

const initialState = {
  wishlists: [],
};

//Some wishlist reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WISHLIST: {
      return {
        ...state,
        wishlists: action.payload,
      };
    }
    case ADD_WISHLIST:
      return {
        ...state,
        wishlists: [...state.wishlists, action.payload],
      };
    case DELETE_WISHLIST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default reducer;
