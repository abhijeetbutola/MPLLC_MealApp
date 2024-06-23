import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    value: [],
  },
  reducers: {
    setFavourite: (state, action) => {
      console.log(action);
      state.value = action.payload;
    },
  },
});

export const { setFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
