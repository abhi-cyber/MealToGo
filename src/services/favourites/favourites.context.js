import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourutes] = useState([]);

  const add = (restaurant) => {
    setFavourutes([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filler(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourutes(newFavourites);
  };
  return (
    <FavouritesContext.Provider
      value={{
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
