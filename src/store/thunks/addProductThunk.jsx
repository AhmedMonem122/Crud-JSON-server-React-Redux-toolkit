import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProduct = createAsyncThunk("product/add", async (product) => {
  const response = await axios.post(
    "https://crud-json-server-api.onrender.com/products",
    product
  );

  return response.data;
});
