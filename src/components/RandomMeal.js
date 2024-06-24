import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFavourite } from "../store/slices/favouritesSlice";
import useGetRandomMeals from "../lib/api/hooks/useGetRandomMeal";
import Button from "./atoms/Button";
import { useTheme } from "../providers/ThemeProvider";

function RandomMeal() {
  const [menuListData, setMenuListData] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { data, refetch, isLoading } = useGetRandomMeals();
  console.log("category", category);
  const favSelector = useSelector((state) => state.favourites.value);
  const dispatch = useDispatch();
  const { theme } = useTheme();

  useEffect(() => {
    if (data?.meals?.length > 0) setMenuListData(data.meals);
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

  if (isLoading) return <p>Loading</p>;
  if (!menuListData.length) return <p>No Meals</p>;

  return (
    <div
      style={{ marginTop: "50px", width: "fit-content", marginInline: "auto" }}
    >
      {menuListData?.length > 0
        ? menuListData.map(({ idMeal, strMeal, strMealThumb }) => (
            <div key={idMeal} style={{}}>
              <h2 style={{ textAlign: "center" }}>Random Meal</h2>
              <div
                style={{
                  marginTop: "20px",
                  padding: "4px",
                  border: `solid ${theme.colours.primaryBrown} 2px`,
                  borderRadius: "8px",
                }}
              >
                <img
                  src={strMealThumb}
                  alt={strMeal}
                  height={250}
                  width={250}
                />
                <div style={{ display: "flex" }}>
                  <div>
                    {/* <img
                      src={strMealThumb}
                      alt={strMeal}
                      height={50}
                      width={50}
                    /> */}
                  </div>

                  <div
                    style={{
                      fontWeight: "bold",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    {strMeal}
                  </div>
                  {/* <div style={{ overflowY: "auto" }}> */}
                  {/* <p>{strCategoryDescription}</p> */}
                  {/* </div> */}
                </div>
                <div
                  style={{
                    marginTop: "24px",
                    textAlign: "end",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                >
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
            </div>
          ))
        : null}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          className="menu-item"
          style={{
            marginTop: "30px",
            backgroundColor: `${theme.colours.primaryBrown}`,
            border: `solid ${theme.colours.primaryBrown} 2px`,
          }}
          onClick={refetch}
        >
          Generate
        </Button>
      </div>
    </div>
  );
}

export default RandomMeal;
