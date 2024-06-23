import React, { useEffect, useState } from "react";
import useGetMealList from "../lib/api/hooks/useGetMealList";
// import { Heart } from "lucide-react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const [menuListData, setMenuListData] = useState([]);

  const { data } = useGetMealList();
  // console.log(data);
  useEffect(() => {
    if (data?.meals?.length > 0 && menuListData.length <= 0)
      setMenuListData(data.meals);
  }, [data]);

  console.log("Category", menuListData);

  const handleRouting = (category) => {
    navigate({
      pathname: "/category",
      search: `category=${category}`,
    });
  };

  return (
    <div
      style={{
        marginTop: "50px",
        // width: "fit-content",
        marginInline: "auto",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: "10px",
      }}
    >
      {menuListData?.length > 0
        ? menuListData.map(({ strCategory }, index) => (
            // <div
            //   key={idCategory}
            //   style={{
            //     display: "flex",
            //     alignItems: "center",
            //     gap: "6px",
            //     // width: "auto",

            //     padding: "10px",
            //   }}
            // >
            <div
              key={index}
              className="menu-item"
              style={{
                marginTop: "20px",
                // padding: "4px",
                border: "solid black 2px",
                width: "200px",
                borderRadius: "8px",
                // maxHeight: "300px",
                // overflowY: "auto",
                cursor: "pointer",
              }}
              onClick={() => handleRouting(strCategory)}
            >
              {/* <div style={{ display: "flex" }}> */}
              {/* <div> */}
              {/* <img
                        src={strCategoryThumb}
                        alt={strCategory}
                        height={50}
                        width={50}
                      /> */}
              {/* </div> */}
              <div style={{ padding: "6px" }}>
                <span style={{ fontWeight: "bold" }}>{strCategory}</span>
                {/* <div style={{ overflowY: "auto" }}> */}
                {/* <p>{strCategoryDescription}</p> */}
                {/* </div> */}
              </div>
              {/* </div> */}
              {/* </div> */}
              {/* <Heart color="red" fill="red" /> */}
            </div>
          ))
        : null}
    </div>
  );
}

export default Menu;
