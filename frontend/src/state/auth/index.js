import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userAuthentication } from './helpers'

const initialState = {
  user: null,
}

export const userLogin = createAsyncThunk('auth/userAuthentication', async ({ username, password }) => {
  const resUser = await userAuthentication(username, password)
  return resUser
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      const { user } = action.payload
      state.user = user
    })
  }
})

export const { setUser } = authSlice.actions

export default authSlice.reducer