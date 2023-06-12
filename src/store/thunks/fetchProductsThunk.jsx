import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get(
    "https://crud-json-server-api.onrender.com/products"
  );

  return response.data;
});
