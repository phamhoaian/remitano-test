import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from './helpers'
import { STATUS } from './constants'

const initialState = {
  status: STATUS.INITIAL,
  list: [],
  totalItems: 0,
  isLoadMore: false,
}

export const fetchMovies = createAsyncThunk('auth/fetchMovies', async ({ limit, offset }) => {
  const res = await getMovies(limit, offset)
  return res
})

export const fetchMoreMovies = createAsyncThunk('auth/fetchMoreMovies', async ({ limit, offset }) => {
  const res = await getMovies(limit, offset)
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
      const { movies, totalItems } = action.payload
      state.list = movies
      state.totalItems = totalItems
      state.status = STATUS.SUCCESS
    })
    builder.addCase(fetchMovies.rejected, (state) => {
      state.status = STATUS.ERROR
    })
    builder.addCase(fetchMoreMovies.pending, (state) => {
      state.isLoadMore = true
    })
    builder.addCase(fetchMoreMovies.fulfilled, (state, action) => {
      const { movies, totalItems } = action.payload
      state.list = [...state.list, ...movies]
      state.totalItems = totalItems
      state.isLoadMore = false
    })
    builder.addCase(fetchMoreMovies.rejected, (state) => {
      state.status = STATUS.ERROR
    })
  }
})

export const { setStatus, setMovieList } = movieSlice.actions

export default movieSlice.reducer