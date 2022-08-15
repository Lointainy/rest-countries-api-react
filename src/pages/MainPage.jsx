import { useContext, useEffect } from 'react'
import { CountryContext } from '../hooks/Context'

import { CountryList } from '../components/CountryList'
import { SearchBar } from '../components/SearchBar'

export const MainPage = () => {
  const { getCountriesFromApi } = useContext(CountryContext)

  useEffect(function getCountries() {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => data && getCountriesFromApi(data))
  }, [])

  return (
    <>
      <SearchBar />
      <CountryList />
    </>
  )
}
