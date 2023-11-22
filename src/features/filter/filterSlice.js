import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "all",
  search: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice;
export const { changeSearch, changeStatus } = filterSlice.actions;
