import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./slices/modalSlice";
import { formReducer } from "./slices/formSlice";
import { productsReducer } from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    form: formReducer,
    products: productsReducer,
  },
});

export * from "./slices/modalSlice";
export * from "./slices/formSlice";
export * from "./slices/productsSlice";
export * from "./thunks/fetchProductsThunk";
export * from "./thunks/addProductThunk";
export * from "./thunks/deleteProductThunk";
export * from "./thunks/updateProductThunk";
