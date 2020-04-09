import { combineReducers } from "redux";
import wishlistReducer from "./wishListReducer";
import cartReducer from "./cartReducer";
const reducers = combineReducers({
  wishLists: wishlistReducer,
  carts: cartReducer,
});

export default reducers;
