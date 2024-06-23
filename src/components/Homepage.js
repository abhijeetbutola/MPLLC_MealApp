import { useNavigate } from "react-router-dom";
import Button from "./atoms/Button";

function Homepage() {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <>
      <div style={{ flex: "1" }}>
        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "40px" }}>Home Page</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "400px",
              width: "250px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              border: "solid green 0px",
            }}
          >
            <Button onClick={() => handleNavigate("/menu")}>Menu</Button>

            <Button onClick={() => handleNavigate("/favourites")}>
              Favourites
            </Button>

            <Button onClick={() => handleNavigate("/randommeal")}>
              Random Meal
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
