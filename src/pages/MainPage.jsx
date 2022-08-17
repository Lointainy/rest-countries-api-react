import { useContext, useEffect } from 'react'
import { CountryContext } from '../hooks/Context'

import { CountryList } from '../components/CountryList'
import { SearchBar } from '../components/SearchBar'

export const MainPage = () => {
  const { getCountriesFromApi } = useContext(CountryContext)

  useEffect(function getCountries() {
    getCountriesFromApi()
  }, [])

  return (
    <>
      <SearchBar />
      <CountryList />
    </>
  )
}
