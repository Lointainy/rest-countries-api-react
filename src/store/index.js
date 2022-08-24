import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counriesReducer from './countriesSlice'

export default configureStore({
  reducer: {
    countriesStore: counriesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})
