import { ADD_WISHLIST, GET_WISHLIST, DELETE_WISHLIST } from "./types";
import axios from "axios";

//for adding items to wishlist
export const addToWishList = (data) => async (dispatch) => {
  const res = await axios.post("http://localhost:3002/api/wishlists", {
    data,
    userId: "2",
  });
  if (res.data.success === 1) dispatch({ type: ADD_WISHLIST, payload: data });

  return res.data.success;
};

//get function for wishlist items
export const getWishLists = () => (dispatch) => {
  const userId = "2";
  axios.get(`http://localhost:3002/api/wishlists/${userId}`).then((res) => {
    if (res.data) dispatch({ type: GET_WISHLIST, payload: res.data.products });
  });
};

//detele wishlist items
export const deleteWishList = (id) => async (dispatch) => {
  const userId = "2";
  const res = await axios.delete(
    `http://localhost:3002/api/wishlists/${userId}/${id}`
  );
  if (res.data.success === 1)
    dispatch({ type: DELETE_WISHLIST, payload: res.data });
};
