import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../Utils/const";

const initialState = {
  products: [],
  error: "",
  loading: "",
};

export const productRequestAsync = createAsyncThunk(
  "product/fetch",
  async (category) => {
    const data = await fetch(`${API_URI}${POSTFIX}?category=${category}`).then(
      (res) => res.json()
    );
    return data;
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(productRequestAsync.fulfilled, (state, action) => {
      state.loading = "success";
      state.products = action.payload;
    });
    builder.addCase(productRequestAsync.pending, (state, action) => {
      state.loading = "loading";
    });
  },
});

export default ProductSlice.reducer;
