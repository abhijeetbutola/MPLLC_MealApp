import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFavourite } from "../store/slices/favouritesSlice";

function Favourites() {
  const favSelector = useSelector((state) => state.favourites.value);
  const dispatch = useDispatch();

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

  if (!favSelector.length) return <p>No Favourites</p>;

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
                  border: "solid black 2px",
                  width: "600px",
                  borderRadius: "8px",
                  maxHeight: "300px",
                  overflowY: "auto",
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
                    {/* <div style={{ overflowY: "auto" }}> */}
                    {/* <p>{strCategoryDescription}</p> */}
                    {/* </div> */}
                  </div>
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
          ))
        : null}
    </div>
  );
}

export default Favourites;
