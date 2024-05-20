import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ProductSlice from "./ProductSlice";
import OrderSlice from "./OrderSlice";
import ModalProductSlice, { localStorageMiddleWare } from "./ModalProductSlice";

export const store = configureStore({
  reducer: {
    category: CategorySlice,
    products: ProductSlice,
    order: OrderSlice,
    modal: ModalProductSlice,
  },
  middleware: (middleWare) => {
    console.log(middleWare());
    return middleWare().concat(localStorageMiddleWare);
  },
});
