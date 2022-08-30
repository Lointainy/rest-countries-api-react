import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CountryCard } from './CountryCard'

import { filteredCountries } from '../store/countriesSlice'

export const CountryList = () => {
  const countries = useSelector((store) => store.countries.countries)
  const dispatch = useDispatch()
  const page = useSelector((store) => store.countries.currentPage)

  useEffect(() => {
    dispatch(filteredCountries())
  }, [page])

  return (
    <div className="container my-12 grid grid-cols-1 gap-[4.5rem] place-content-center w-[16.5rem] sm:grid-cols-2 sm:w-[37.5rem] lg:grid-cols-3 lg:w-[58.5rem] xl:grid-cols-4 xl:w-full">
      {countries.map((item, index) => {
        return (
          <Link key={index} to={`/details/${item.cca3.toLowerCase()}`}>
            <CountryCard country={item} />
          </Link>
        )
      })}
    </div>
  )
}
