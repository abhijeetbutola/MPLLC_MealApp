import { useNavigate } from "react-router-dom";
import Button from "./atoms/Button";
import Logo from "../assets/Logo";
import { useTheme } from "../providers/ThemeProvider";

function Homepage() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <>
      <div style={{ flex: "1", marginTop: "100px" }}>
        <div style={{ width: "fit-content", margin: "auto" }}>
          <Logo />
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3
            style={{
              fontSize: "40px",
              color: `${theme.colours.secondaryBrown}`,
            }}
          >
            Home Page
          </h3>
        </div>
        <div
          style={{
            justifyContent: "center",
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              marginTop: "60px",
            }}
          >
            <Button
              className="menu-item"
              style={{
                marginTop: "20px",
                backgroundColor: `${theme.colours.primaryBrown}`,
                border: `solid ${theme.colours.primaryBrown} 2px`,
                width: "150px",
                borderRadius: "4px",

                cursor: "pointer",
              }}
              onClick={() => handleNavigate("/menu")}
            >
              Menu
            </Button>

            <Button
              className="menu-item"
              style={{
                marginTop: "20px",
                backgroundColor: `${theme.colours.primaryBrown}`,
                border: `solid ${theme.colours.primaryBrown} 2px`,
                width: "150px",
                borderRadius: "4px",

                cursor: "pointer",
              }}
              onClick={() => handleNavigate("/favourites")}
            >
              Favourites
            </Button>
          </div>
          <div
            style={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
              marginTop: "15px",
            }}
          >
            <Button
              className="menu-item"
              style={{
                marginTop: "20px",
                backgroundColor: `${theme.colours.primaryBrown}`,
                border: `solid ${theme.colours.primaryBrown} 2px`,
                width: "150px",
                borderRadius: "4px",

                cursor: "pointer",
              }}
              onClick={() => handleNavigate("/randommeal")}
            >
              Random Meal
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
