import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counriesReducer from './countriesSlice'

export const store = configureStore({
  reducer: {
    countries: counriesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})
