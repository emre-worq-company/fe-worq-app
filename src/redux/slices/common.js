import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  // Name of our slice which we will call in our store
  name: "common",

  // Initial state
  initialState: {
    theme: "light",
    lang: "tr"
  },

  reducers: {
    switchTheme: (state, action) => {
      // state.theme = action.payload;
      state.theme === "light" ? state.theme = "dark" : state.theme = "light"
    },
    switchLang: (state, action) => {
        // state.theme = action.payload;
        state.lang === "tr" ? state.lang = "en" : state.lang = "tr"
    },
  },
});

export const { switchTheme, switchLang } = commonSlice.actions;

export default commonSlice.reducer;