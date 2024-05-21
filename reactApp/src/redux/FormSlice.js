import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clearOrder } from "./OrderSlice";
import { closeModal } from "./ModalOrderSlice";

export const submitForm = createAsyncThunk(
  "form/submit",
  async (formOrder, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://cloudy-slash-rubidium.glitch.me/api/order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formOrder),
        }
      );
      dispatch(clearOrder());
      dispatch(closeFormAndReset());
      dispatch(closeModal());
      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      } else {
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initState = {
  name: "",
  phone: "",
  delivery: "toClient",
  addressStreet: "",
  addressFloor: "",
  addressDomofon: "",
};
const FormSlice = createSlice({
  name: "form",
  initialState: initState,
  reducers: {
    updateFormValue: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    closeFormAndReset: (state) => {
      state.name = "";
      state.phone = "";
      state.delivery = "toClient";
      state.addressStreet = "";
      state.addressFloor = "";
      state.addressDomofon = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitForm.pending, (state, action) => {});
    builder.addCase(submitForm.fulfilled, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(submitForm.rejected, (state, action) => {});
  },
});
export const { closeFormAndReset, updateFormValue } = FormSlice.actions;
export default FormSlice.reducer;
