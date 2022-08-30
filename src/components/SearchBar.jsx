import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { filteredCountries, ON_FILTER, ON_SEARCH } from '../store/countriesSlice'

import { Filter } from './Filter'
import { PagePagination } from './PagePagination'
import { Search } from './Search'

export const SearchBar = () => {
  const search = useSelector((store) => store.countries.search)
  const filter = useSelector((store) => store.countries.filter)

  const [searchParams, setSearchParams] = useSearchParams() // search params get set data from link property

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ON_SEARCH(searchParams.get('country') || ''))
    dispatch(ON_FILTER(searchParams.get('region') || ''))
  }, [])

  useEffect(() => {
    /* after change search / filter set params */
    if (searchParams.get('country') || searchParams.get('region')) {
      setSearchParams({ country: search, region: filter })
    } else if (search.length > 0 || filter.length > 0) {
      setSearchParams({ country: search, region: filter })
    } else setSearchParams()

    dispatch(filteredCountries())
  }, [search, filter])

  return (
    <div className="searchbar container mt-12 flex flex-wrap justify-between items-center sm:p-0 px-4">
      <Search search={search} />
      <PagePagination />
      <Filter filter={filter} />
    </div>
  )
}
