import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import useGetCategoryMeals from "../lib/api/hooks/useGetCategoryMeals";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFavourite } from "../store/slices/favouritesSlice";

function Category() {
  const [menuListData, setMenuListData] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { data, isLoading } = useGetCategoryMeals({ category });
  console.log("category", category);
  const favSelector = useSelector((state) => state.favourites.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data?.meals?.length > 0 && menuListData.length <= 0)
      setMenuListData(data.meals);
  }, [data]);

  console.log("Category", menuListData);
  console.log("fav", favSelector);

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

  if (isLoading) return <p>Loading...</p>;

  if (!menuListData.length) return <p>No Meals</p>;

  return (
    <div
      style={{ marginTop: "50px", width: "fit-content", marginInline: "auto" }}
    >
      {menuListData?.length > 0
        ? menuListData.map(({ idMeal, strMeal, strMealThumb }) => (
            <div
              key={idMeal}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <div
                style={{
                  marginTop: "20px",
                  border: "solid black 2px",
                  padding: "6px",
                  width: "500px",
                  //   maxWidth: "500px",
                  borderRadius: "8px",
                  maxHeight: "300px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <img
                      src={strMealThumb}
                      alt={strMeal}
                      height={50}
                      width={50}
                    />
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                      {strMeal}
                    </span>
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

export default Category;
