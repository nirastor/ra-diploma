import { configureStore } from '@reduxjs/toolkit'
import catalogSlice from './catalogSlice'

export default configureStore({
  reducer: {
    catalog: catalogSlice,
  },
})