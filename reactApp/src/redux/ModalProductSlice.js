import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../Utils/const";

export const modalProductFetch = createAsyncThunk("modal/fetch", async (id) => {
  const data = await fetch(`${API_URI}${POSTFIX}/${id}`).then((res) =>
    res.json()
  );
  return data;
});


export const localStorageMiddleWare = (state) => (next) => (action) => {
  const nextAction = next(action);
  if (nextAction.type === "order/addProduct") {
    localStorage.setItem(
      "order",
      JSON.stringify(state.getState().order.orderList)
    );
  }
  return nextAction;
};

const ModalProductSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    activeProduct: {},
  },
  reducers: {
    toggleModal: (state) => {
      state.isOpen = false;
      state.activeProduct = {};
    },
  },
  extraReducers: (bulder) => {
    bulder.addCase(modalProductFetch.fulfilled, (state, action) => {
      state.isOpen = true
      state.activeProduct = action.payload;
    })
  },
});
export const { toggleModal } = ModalProductSlice.actions;
export default ModalProductSlice.reducer;
