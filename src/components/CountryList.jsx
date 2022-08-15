import { useContext } from 'react'
import { CountryContext } from '../hooks/Context'
import { CountryCard } from './CountryCard'

export const CountryList = () => {
  const { filteredListCountries = [] } = useContext(CountryContext)

  return (
    <div className="container mt-12 grid grid-cols-1 gap-[4.5rem] place-content-center w-[16.5rem] sm:grid-cols-2 sm:w-[37.5rem] lg:grid-cols-3 lg:w-[58.5rem] xl:grid-cols-4 xl:w-full">
      {filteredListCountries.map((item, index) => {
        return <CountryCard key={index} country={item} />
      })}
    </div>
  )
}
