import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./slices/favouritesSlice";

const store = configureStore({
  reducer: {
    // Add other slices here if needed
    favourites: favouritesReducer,
  },
});

export default store;
