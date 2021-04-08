import { createSlice } from '@reduxjs/toolkit'

export const catalogSlice = createSlice({
  name: 'counter',
  initialState: {
    categoryId: 0,
  },
  reducers: {
    setCategoryID: (state, action) => {
      state.categoryId = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategoryID } = catalogSlice.actions

export default catalogSlice.reducer