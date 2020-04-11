import React from "react";

const WishListContext = React.createContext({
  wishlists: [],
  addToWishList: () => {},
});

export const Provider = WishListContext.Provider;

export default WishListContext;
