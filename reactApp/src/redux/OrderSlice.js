import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../Utils/const";

export const orderProductsFetch = createAsyncThunk(
  "order/fetch",
  async (list) => {
    const data = await fetch(`${API_URI}${POSTFIX}?list=${list}`).then((res) =>
      res.json()
    );

    return data;
  }
);

const initialState = {
  orderList: JSON.parse(localStorage.getItem("order") || "[]"),
  orderGoods: [],
  totalCount: 0,
  totalSum: 0,
  isOpen: false,
};

export const localStorMiddleWare = (store) => (next) => (action) => {
  const nextAction = next(action);
  if (action.type === "order/addProduct") {
    localStorage.setItem(
      "order",
      JSON.stringify(store.getState().order.orderList)
    );
  }
  if (action.type === "order/increaseCount") {
    const productsList = store
      .getState()
      .order.orderGoods.map((item) => ({ id: item.id, count: item.count }));
    localStorage.setItem("order", JSON.stringify(productsList));
  }
  if (action.type === "order/decreaseCount") {
    const productsList = store
      .getState()
      .order.orderGoods.map((item) => ({ id: item.id, count: item.count }));
    localStorage.setItem("order", JSON.stringify(productsList));
  }

  if (action.type === "order/clearOrder") {
    localStorage.setItem("order", store.getState().order.orderList);
  }
  return nextAction;
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
    increaseCount: (state, action) => {
      state.orderGoods.forEach((product) => {
        if (product.id === action.payload.id) {
          product.count += 1;
        }
      });
      const productsList = state.orderGoods.map((item) => ({
        id: item.id,
        count: item.count,
      }));
      state.orderList = productsList;
      [state.totalCount, state.totalSum] = state.orderGoods.reduce(
        (acc, el) => {
          acc[0] += el.count;
          acc[1] += el.price * el.count;
          return acc;
        },
        [0, 0]
      );
    },
    decreaseCount: (state, action) => {
      const product = state.orderGoods.find(
        (el) => el.id === action.payload.id
      );
      if (product.count > 1) {
        product.count -= 1;
      } else {
        state.orderGoods = state.orderGoods.filter(
          (el) => el.id !== action.payload.id
        );
      }
      const productsList = state.orderGoods.map((item) => ({
        id: item.id,
        count: item.count,
      }));
      state.orderList = productsList;
      [state.totalCount, state.totalSum] = state.orderGoods.reduce(
        (acc, el) => {
          acc[0] += el.count;
          acc[1] += el.price * el.count;
          return acc;
        },
        [0, 0]
      );
    },
    toggleCartOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    clearOrder: (state) => {
      state.orderList = [];
      state.orderGoods = [];
      state.totalCount = 0;
      state.totalSum = 0;
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(orderProductsFetch.fulfilled, (state, action) => {
      const productsList = action.payload.map((item) => {
        const productCount = state.orderList.find((el) => el.id === item.id);
        item.count = productCount.count;
        return item;
      });
      state.orderGoods = productsList;
      [state.totalCount, state.totalSum] = state.orderGoods.reduce(
        (acc, el) => {
          acc[0] += el.count;
          acc[1] += el.price * el.count;
          return acc;
        },
        [0, 0]
      );
    });
  },
});
export const {
  closeCart,
  toggleCartOpen,
  addProduct,
  clearOrder,
  increaseCount,
  decreaseCount,
} = OrderSlice.actions;
export default OrderSlice.reducer;
