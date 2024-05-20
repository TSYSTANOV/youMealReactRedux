import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: JSON.parse(localStorage.getItem("order") || "[]"),
};

const OrderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.orderList.push({
        id: action.payload.id,
        count: action.payload.count,
      });
    },
  },
});
export const { addProduct } = OrderSlice.actions;
export default OrderSlice.reducer;
