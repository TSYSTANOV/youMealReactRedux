import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../Utils/const";
const initialState = {
  category: [],
  error: '',
  activeCategory: 0,
};

export const categoryRequstAsync = createAsyncThunk(
  'category/fetch',
  async()=>{
    const response = await fetch(API_URI+POSTFIX+'/category').then(res=>res.json()).catch(error=> {return {error}})
    return response
  }
)

const CategorySlice = createSlice({
  name:'category',
  initialState:initialState,
  reducers:{
    changeActiveCategory:(state,action)=>{
      state.activeCategory = action.payload
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(categoryRequstAsync.fulfilled,(state,action)=>{
      state.category = action.payload
    })
  }
})
export const {changeActiveCategory} = CategorySlice.actions
export default CategorySlice.reducer
