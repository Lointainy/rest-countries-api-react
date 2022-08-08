import { useNavigate, useParams } from 'react-router-dom'

export const DetailsPage = () => {
  const { countryId } = useParams()

  let navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <>
      details page country: {countryId}
      <button onClick={goBack}>Go Back</button>
    </>
  )
}
