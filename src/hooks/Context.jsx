import { createContext, useEffect, useReducer, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { initialState, reducer } from './reducer'

import { BASE_URL } from '../api/config'

export const CountryContext = createContext()

export const CountryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState) // reducer

  const [countries, setCountries] = useState([]) // gived countries data from state / store / reducer

  const [filteredCountries, setFilteredCountries] = useState([]) // array after filtered
  const [filteredListCountries, setFilteredListCountries] = useState([]) // output array after sliced

  const [currentPage, setCurrentPage] = useState(1) // currentPage from counries array

  const [searchParams, setSearchParams] = useSearchParams() // search params get set data from link property
  const [params, setParams] = useState({ country: '', region: '' }) // search params

  const [search, setSearch] = useState(searchParams.get('country') || '') // input value search
  const [filter, setFilter] = useState(searchParams.get('region') || '') // input value filter

  /* SEARCH, FILTER */

  const handleSearch = (value) => {
    setParams({ ...params, country: value })
    setSearch(value)
    setSearchParams({ ...params, country: value })
  }

  const handleFilter = (value) => {
    setParams({ ...params, region: value })
    setFilter(value)
    setSearchParams({ ...params, region: value })
  }

  /* PAGINATION */

  let start = (currentPage - 1) * state.itemPerPage // start value to slice
  let end = start + state.itemPerPage // end value to slice

  let totalPage = Math.ceil(filteredCountries.length / state.itemPerPage) // total page from counries array

  const handlePageClick = (value) => {
    if (value == 'prev') setCurrentPage((prev) => prev - 1)
    else if (value == 'next') setCurrentPage((prev) => prev + 1)
    else setCurrentPage(value)
  }

  /* GET DATA: watchcer*/

  useEffect(() => {
    setCountries(state.countries)
  }, [state.countries])

  /* SEARCH FILTER DATA: watchcer */

  useEffect(() => {
    setCurrentPage(1)
    setFilteredCountries(
      countries.filter(
        (country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase()) &&
          country.region.toLowerCase().includes(filter.toLowerCase())
      )
    )
  }, [countries, search, filter])

  /* OUTPUT COUNTRIES DATA: watchcer */
  useEffect(() => {
    setFilteredListCountries(filteredCountries.slice(start, end))
  }, [filteredCountries, currentPage])

  const value = {
    ...state,
    search,
    filter,
    handleSearch,
    handleFilter,
    currentPage,
    totalPage,
    filteredListCountries,
    handlePageClick,

    /* REDUCER */

    getCountriesFromApi: () => {
      dispatch({ type: 'ON_LOADING', payload: true })
      fetch(`${BASE_URL}/all`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: 'GET_COUNTRIES_API', payload: data })
          dispatch({ type: 'ON_LOADING', payload: false })
        })
    }, // get all countries data

    getCountryFromApi: (countryName) => {
      dispatch({ type: 'ON_LOADING', payload: true })
      fetch(`${BASE_URL}/alpha/${countryName}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: 'GET_COUNTRY_API', payload: data })
          dispatch({ type: 'ON_LOADING', payload: false })
        })
    }, // get selected country data
  }

  return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
}
