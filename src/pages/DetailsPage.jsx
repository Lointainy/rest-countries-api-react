import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getCountry } from '../store/countriesSlice'

import { CountryDetailsCard } from '../components/CountryDetailsCard'
import { Loader } from '../components/Loader'

export const DetailsPage = () => {
  const { countryId } = useParams()

  const isLoading = useSelector((store) => store.countries.isLoading)
  const country = useSelector((store) => store.countries.country)
  const dispatch = useDispatch()

  /* Back to last page */

  let navigate = useNavigate()

  const goBack = () => {
    window.history.length <= 1 ? navigate('/') : navigate(-1)
  }

  useEffect(() => {
    dispatch(getCountry(countryId))
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
