import React from "react";

//Pass down wishlist data 
const WishListContext = React.createContext({
  wishlists: [],
  addToWishList: () => {},
});

export const Provider = WishListContext.Provider;

export default WishListContext;
