import { createSlice } from '@reduxjs/toolkit'


export const itemSlice = createSlice({
  name: 'item',
  initialState:{
    items:[]},
  reducers: {
    addItem: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items.push(action.payload) 
    },
    removeItem: (state,action) => {
      state.items.splice(state.items.indexOf(action.payload.id),1)
    },

  }
})

// Action creators are generated for each case reducer function
export const {addItem,removeItem}  = itemSlice.actions

export default itemSlice.reducer