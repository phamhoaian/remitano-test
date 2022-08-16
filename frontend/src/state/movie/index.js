import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from './helpers'
import { STATUS } from './constants'

const initialState = {
  status: STATUS.INITIAL,
  list: [],
  page: 1,
}

export const fetchMovies = createAsyncThunk('auth/fetchMovies', async ({ page, offset }) => {
  const res = await getMovies(page, offset)
  return res
})

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
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = STATUS.LOADING
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      const list = action.payload
      state.list = list
      state.status = STATUS.SUCCESS
    })
    builder.addCase(fetchMovies.rejected, (state) => {
      state.status = STATUS.ERROR
    })
  }
})

export const { setStatus, setMovieList } = movieSlice.actions

export default movieSlice.reducer