import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import { useState } from "react";
import { NavigationData } from "./NavigationData";
import "../styles/Navigation.css";
import { IconContext } from "react-icons";

function Navigation() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div style={{ position: "fixed" }} className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars
                style={{ color: "black" }}
                onClick={showSidebar}
              />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="menu-bars close-icon">
                <IoIcons.IoClose />
              </li>
              {NavigationData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span className="nav-item">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Navigation;
