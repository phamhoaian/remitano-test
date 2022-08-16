import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import authReducer from './auth'
import movieReducer from './movie'

const PERSISTED_KEYS = ['auth']

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    auth: authReducer,
    movie: movieReducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: true, serializableCheck: false }), save({ states: PERSISTED_KEYS })],
  preloadedState: load({ states: PERSISTED_KEYS }),
})

export default store
