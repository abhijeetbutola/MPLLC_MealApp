import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFavourite } from "../store/slices/favouritesSlice";
import { useTheme } from "../providers/ThemeProvider";

function Favourites() {
  const favSelector = useSelector((state) => state.favourites.value);
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const handleHeartClick = (value, ifFav) => {
    if (ifFav) {
      const index = favSelector.findIndex((item) => {
        return item.idMeal === value.idMeal;
      });
      const favSelectorTemp = [...favSelector];
      favSelectorTemp.splice(index, 1);
      dispatch(setFavourite(favSelectorTemp));
      return;
    }
    dispatch(setFavourite([value, ...favSelector]));
  };

  const isFav = (idMeal) => {
    return favSelector.find((item) => {
      return item.idMeal === idMeal;
    });
  };

  if (!favSelector.length)
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          height: "100vh",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          // display: "flex",
        }}
      >
        <p>No Favourites Yet :(</p>
      </div>
    );

  return (
    <div
      style={{ marginTop: "50px", width: "fit-content", marginInline: "auto" }}
    >
      {favSelector?.length > 0
        ? favSelector.map(({ idMeal, strMeal, strMealThumb }) => (
            <div
              key={idMeal}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <div
                style={{
                  marginTop: "20px",
                  padding: "4px",
                  border: `2px solid ${theme.colours.primaryBrown}`,
                  width: "600px",
                  borderRadius: "8px",
                  maxHeight: "300px",
                  overflowY: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      src={strMealThumb}
                      alt={strMeal}
                      height={50}
                      width={50}
                    />
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>{strMeal}</span>
                  </div>
                </div>
                <Heart
                  color="red"
                  fill={isFav(idMeal) ? "red" : "white"}
                  onClick={() =>
                    handleHeartClick(
                      { idMeal, strMeal, strMealThumb },
                      isFav(idMeal)
                    )
                  }
                />
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Favourites;
