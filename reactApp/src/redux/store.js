import {configureStore} from "@reduxjs/toolkit"
import CategorySlice from "./CategorySlice"
import ProductSlice from "./ProductSlice"

export const store = configureStore({
  reducer:{
      category:CategorySlice,
      products:ProductSlice
  }
})
