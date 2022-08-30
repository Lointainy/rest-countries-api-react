import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../store/countriesSlice'

import { CountryList } from '../components/CountryList'
import { Loader } from '../components/Loader'
import { SearchBar } from '../components/SearchBar'

export const MainPage = () => {
  const isLoading = useSelector((store) => store.countries.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
  }, [])
  return (
    <>
      <SearchBar />
      {isLoading ? <Loader /> : <CountryList />}
    </>
  )
}
