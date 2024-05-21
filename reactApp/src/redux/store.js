import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ProductSlice from "./ProductSlice";
import OrderSlice, { localStorMiddleWare } from "./OrderSlice";
import ModalProductSlice from "./ModalProductSlice";
import ModalOrderSlice from "./ModalOrderSlice";
import FormSlice from "./FormSlice";

export const store = configureStore({
  reducer: {
    category: CategorySlice,
    products: ProductSlice,
    order: OrderSlice,
    modal: ModalProductSlice,
    modalOrder: ModalOrderSlice,
    form: FormSlice,
  },
  middleware: (getMiddleWare) => {
    return getMiddleWare().concat(localStorMiddleWare);
  },
});
