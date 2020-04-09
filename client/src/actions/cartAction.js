import { ADD_TO_CART, GET_CART_ITEMS, DELETE_FROM_CART } from "./types";
import axios from "axios";

// Uses the authenticated user ID
export const addToCart = (data) => async (dispatch) => {
  const userId = "1";
  const res = await axios.post("http://localhost:3002/api/carts", {
    data,
    userId,
  });
  if (res.data.success === 1) dispatch({ type: ADD_TO_CART, payload: data });
  return res.data.success;
};

// Getting the cart items of the authenticated user
export const getCartItems = () => async (dispatch) => {
  const userId = "1";
  const res = await axios.get(`http://localhost:3002/api/carts/${userId}`);
  if (res.data) dispatch({ type: GET_CART_ITEMS, payload: res.data.products });
};

// Removing an item from the cart
export const deleteCartItem = (id) => async (dispatch) => {
  const userId = "1";
  const res = await axios.delete(
    `http://localhost:3002/api/carts/${userId}/${id}`
  );
  if (res.data.success === 1)
    dispatch({ type: DELETE_FROM_CART, payload: res.data });
};
