import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPageNumber: (state,action) => {
      state.value = action.payload
    }
  },
})

export const { setPageNumber } = counterSlice.actions

export default counterSlice.reducer