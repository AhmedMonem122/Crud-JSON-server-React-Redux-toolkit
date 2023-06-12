import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateProduct = createAsyncThunk(
  "product/update",
  async (product) => {
    const response = await axios.put(
      `https://crud-json-server-api.onrender.com/products/${product.id}`,
      product
    );

    return response.data;
  }
);
