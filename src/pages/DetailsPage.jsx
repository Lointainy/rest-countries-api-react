import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { CountryDetailsCard } from '../components/CountryDetailsCard'
import { Loader } from '../components/Loader'

import { CountryContext } from '../hooks/Context'

export const DetailsPage = () => {
  const { countryId } = useParams()
  const { getCountryFromApi, country, isLoading } = useContext(CountryContext)

  /* Back to last page */

  let navigate = useNavigate()
  const goBack = () => navigate(-1)

  useEffect(() => {
    getCountryFromApi(countryId)
  }, [])

  useEffect(() => {
    getCountryFromApi(countryId)
  }, [countryId])
  return (
    <div className="details-country mt-12 container md:p-0 px-4">
      <button
        className="bg-secondary flex items-center justify-center px-9 h-10 rounded-md text-primary cursor-pointer hover:bg-[color:var(--color-text-primary)] hover:text-[color:var(--color-bg-secondary)] transition duration-250 ease-out hover:ease-in"
        onClick={goBack}>
        <FontAwesomeIcon className="mr-[0.625rem]" icon="arrow-left-long" />
        Back
      </button>
      {isLoading ? (
        <Loader />
      ) : (
        country.map((item, index) => {
          return <CountryDetailsCard country={item} key={index} />
        })
      )}
    </div>
  )
}
