import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    price: "",
    category: "",
    editID: null,
    isEditing: false,
  },
  reducers: {
    handleNameChange(state, action) {
      state.name = action.payload;
    },
    handlePriceChange(state, action) {
      state.price = action.payload;
    },
    handleCategoryChange(state, action) {
      state.category = action.payload;
    },
    handleEditID(state, action) {
      state.editID = action.payload;
    },
    handleIsEditing(state, action) {
      state.isEditing = action.payload;
    },
  },
});

export const {
  handleNameChange,
  handleCategoryChange,
  handlePriceChange,
  handleEditID,
  handleIsEditing,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
