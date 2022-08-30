import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../api/config'

export const getCountries = createAsyncThunk('countries/getCountries', async function () {
  const response = await fetch(`${BASE_URL}/all`)
  const data = response.json()
  return data
})

export const getCountry = createAsyncThunk('countries/getCountry', async function (countryName) {
  const response = await fetch(`${BASE_URL}/alpha/${countryName}`)
  const data = response.json()
  return data
})

const counriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    countriesContainer: [],
    country: [],
    isLoading: false,
    search: '',
    filter: '',
    currentPage: 1,
    totalPage: 1,
    itemPerPage: 8,
  },
  reducers: {
    ON_SEARCH: (state, action) => {
      state.search = action.payload
      state.currentPage = 1
    },
    ON_FILTER: (state, action) => {
      state.filter = action.payload
      state.currentPage = 1
    },
    ON_PAGE: (state, action) => {
      if (action.payload == 'prev') state.currentPage = state.currentPage - 1
      else if (action.payload == 'next') state.currentPage = state.currentPage + 1
      else state.currentPage = action.payload
    },
    filteredCountries: (state, action) => {
      let start = (state.currentPage - 1) * state.itemPerPage // start value to slice
      let end = start + state.itemPerPage // end value to slice

      state.countries = state.countriesContainer.filter(
        (country) =>
          country.name.common.toLowerCase().includes(state.search.toLowerCase()) &&
          country.region.toLowerCase().includes(state.filter.toLowerCase())
      )

      state.totalPage = Math.ceil(state.countries.length / state.itemPerPage) // total page from counries array
      state.totalPage < 1 ? (state.totalPage = 1) : '' // reset zero totalPage

      state.countries = state.countries.slice(start, end) //output array to 1 page
    },
  },
  extraReducers: {
    /* get all countries */
    [getCountries.pending]: (state, action) => {
      state.isLoading = !state.isLoading
      state.countries = []
    },
    [getCountries.fulfilled]: (state, action) => {
      state.isLoading = !state.isLoading
      state.countriesContainer = action.payload
      state.countries = action.payload
    },
    /* get selected country */
    [getCountry.pending]: (state, action) => {
      state.isLoading = !state.isLoading
      state.country = []
    },
    [getCountry.fulfilled]: (state, action) => {
      state.isLoading = !state.isLoading
      state.country = action.payload
    },
  },
})

export const { ON_SEARCH, ON_FILTER, filteredCountries, ON_PAGE } = counriesSlice.actions

export default counriesSlice.reducer
