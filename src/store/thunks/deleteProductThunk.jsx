import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteProduct = createAsyncThunk("product/delete", async (id) => {
  await axios.delete(
    `https://crud-json-server-api.onrender.com/products/${id}`
  );

  return id;
});
