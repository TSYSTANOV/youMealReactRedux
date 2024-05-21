import { createSlice } from "@reduxjs/toolkit";

const ModalOrderSlice = createSlice({
  name: "modalOrder",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});
export const { openModal, closeModal } = ModalOrderSlice.actions;
export default ModalOrderSlice.reducer;
