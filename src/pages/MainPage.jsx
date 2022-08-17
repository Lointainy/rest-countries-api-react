import { useContext, useEffect } from 'react'
import { CountryContext } from '../hooks/Context'

import { CountryList } from '../components/CountryList'
import { Loader } from '../components/Loader'
import { SearchBar } from '../components/SearchBar'

export const MainPage = () => {
  const { getCountriesFromApi, isLoading } = useContext(CountryContext)

  useEffect(function getCountries() {
    getCountriesFromApi()
  }, [])

  return (
    <>
      <SearchBar />
      {isLoading ? <Loader /> : <CountryList />}
    </>
  )
}
