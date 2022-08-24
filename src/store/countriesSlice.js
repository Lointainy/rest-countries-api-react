import { createSlice } from '@reduxjs/toolkit'
import { getCountries } from '../api/getCountries'

const counriesSlice = createSlice({
  name: 'countries',
  initialState: {
    itemPerPage: 8,
    countries: [],
    country: [],
    isLoading: false,
  },
  reducers: {
    getCountriesFromApi(state, action) {
      state.isLoading = !state.isLoading
      state.countries = getCountries()
      state.isLoading = !state.isLoading
    },
    getCountryFromApi(state, action) {},
  },
})

export const { getCountriesFromApi } = counriesSlice.actions

export default counriesSlice.reducer
