import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Favourites from "./components/Favourites";
import Menu from "./components/Menu";
import RandomMeal from "./components/RandomMeal";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Homepage from "./components/Homepage";
import Category from "./components/Category";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/randommeal",
        element: <RandomMeal />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/category",
        element: <Category />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
