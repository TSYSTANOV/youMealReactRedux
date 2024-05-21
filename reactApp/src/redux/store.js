import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ProductSlice from "./ProductSlice";
import OrderSlice, { localStorMiddleWare } from "./OrderSlice";
import ModalProductSlice from "./ModalProductSlice";




export const store = configureStore({
  reducer: {
    category: CategorySlice,
    products: ProductSlice,
    order: OrderSlice,
    modal: ModalProductSlice,
  },
  middleware:(getMiddleWare)=>{
    return getMiddleWare().concat(localStorMiddleWare)
  }
});


