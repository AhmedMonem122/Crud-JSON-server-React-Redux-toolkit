import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../store";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    }),
      builder.addCase(addProduct.rejected, (state, action) => {
        state.error = action.error;
      });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    }),
      builder.addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error;
      });

    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        } else {
          return product;
        }
      });
    }),
      builder.addCase(updateProduct.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const productsReducer = productsSlice.reducer;
