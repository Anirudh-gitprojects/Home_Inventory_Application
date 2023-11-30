import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './itemSlice'
export default store = configureStore({
  reducer: {
    item:itemSlice
  },
})

