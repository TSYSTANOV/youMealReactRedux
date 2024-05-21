import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: JSON.parse(localStorage.getItem("order") || "[]"),
  orderGoods:[],
  totalCount:0,
  totalSum:0
};


export const localStorMiddleWare = (store) => (next) => (action) =>{
  const nextAction = next(action)
  if(action.type === 'order/addProduct'){
    localStorage.setItem('order', JSON.stringify(store.getState().order.orderList))
  }
  return nextAction
}



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
