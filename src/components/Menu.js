import React, { useEffect, useState } from "react";
import useGetMealList from "../lib/api/hooks/useGetMealList";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const [menuListData, setMenuListData] = useState([]);

  const { data } = useGetMealList();
  // console.log(data);
  useEffect(() => {
    if (data?.meals?.length > 0 && menuListData.length <= 0)
      setMenuListData(data.meals);
  }, [data, menuListData.length]);

  console.log("Category", menuListData);

  const handleRouting = (category) => {
    navigate({
      pathname: "/category",
      search: `category=${category}`,
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ width: "100%", textAlign: "center" }}>
          <h3>Category Menu</h3>
        </div>
        <div
          style={{
            marginTop: "50px",
            // width: "fit-content",
            marginInline: "auto",
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: "10px",
            marginBottom: "50px",
          }}
          className="menu-item"
        >
          {menuListData?.length > 0
            ? menuListData.map(
                ({ idCategory, strCategory, strCategoryThumb }) => (
                  <div
                    key={idCategory}
                    style={{
                      marginTop: "20px",
                      backgroundColor: "rgb(129 83 13 / 30%)",
                      border: "solid rgb(129 83 13 / 50%) 2px",
                      width: "150px",
                      borderRadius: "4px",

                      cursor: "pointer",
                    }}
                    onClick={() => handleRouting(strCategory)}
                  >
                    <div
                      style={{
                        padding: "6px",
                        height: "100%",
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {strCategory}
                    </div>
                  </div>
                )
              )
            : null}
        </div>
      </div>
    </>
  );
}

export default Menu;
