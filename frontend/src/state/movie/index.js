import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  status: null,
  list: [],
  page: 1,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload
    },
    setMovieList: (state, action) => {
      state.list = action.payload
    }
  },
})

export const { setStatus, setMovieList } = movieSlice.actions

export default movieSlice.reducer