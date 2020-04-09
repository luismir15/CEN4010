import React from "react";

//Wishlist context, pass down the data  
const WishListContext = React.createContext({
  wishlists: [],
  addToWishList: () => {},
});

export const Provider = WishListContext.Provider;

export default WishListContext;
