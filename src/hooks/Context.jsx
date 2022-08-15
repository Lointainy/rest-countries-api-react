import { createContext, useEffect, useReducer, useState } from 'react'
import { initialState, reducer } from './reducer'

export const CountryContext = createContext()

export const CountryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState) // reducer

  const [countries, setCountries] = useState([]) // gived countries data from state / store / reducer

  const [filteredCountries, setFilteredCountries] = useState([]) // array after filtered
  const [filteredListCountries, setFilteredListCountries] = useState([]) // output array after sliced

  const [currentPage, setCurrentPage] = useState(1) // currentPage from counries array

  const [search, setSearch] = useState('') // input value search
  const [filter, setFilter] = useState('') // input value filter

  /* SEARCH, FILTER */

  const handleSearch = (value) => {
    setSearch(value)
  }

  const handleFilter = (value) => {
    setFilter(value)
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

    //reducer
    getCountriesFromApi: (data) => {
      dispatch({ type: 'GEP_COUNTRIES_API', payload: data })
    },
  }

  return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
}
