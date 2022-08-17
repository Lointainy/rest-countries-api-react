import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate, useParams } from 'react-router-dom'

export const DetailsPage = () => {
  const { countryId } = useParams()

  let navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <div className="details-country mt-20 container">
      <button
        className="bg-secondary flex items-center justify-center px-9 h-10 rounded-md text-primary cursor-pointer hover:bg-[color:var(--color-text-primary)] hover:text-[color:var(--color-bg-secondary)] transition duration-250 ease-out hover:ease-in"
        onClick={goBack}>
        <FontAwesomeIcon className="mr-[0.625rem]" icon="arrow-left-long" />
        Back
      </button>
      <div className="details-country__card grid grid-cols-1 md:grid-cols-2 lg:gap-[9rem] gap-[3rem] mt-20">
        <div className="details-country__img  h-[25rem] overflow-hidden bg-secondary rounded-xl flex justify-center items-center">
          <img className="block w-[85%] mx-auto h-auto rounded-md" src="https://flagcdn.com/ua.svg" alt="" />
        </div>
        <div className="details-country__info text-primary">
          <div className="country__name font-extrabold text-[2rem] mb-6">Ukraine</div>
          <div className="country__details w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-[2rem]">
            <ul className="country__details-list flex flex-col flex-wrap gap-2 text-[0.875rem] lg:text-base lg:font-light">
              <li className="country__details-list-item ">
                <span className="font-semibold mr-1">Native Name:</span>
                Ukraine
              </li>
              <li>
                <span className="font-semibold mr-1">Population:</span>
              </li>
              <li className="country__details-list-item">
                <span className="font-semibold mr-1">Region:</span>
              </li>
              <li>
                <span className="font-semibold mr-1">Sub Region:</span>
              </li>
              <li className="country__details-list-item">
                <span className="font-semibold mr-1">Capital:</span>
              </li>
            </ul>
            <ul className="country__details-list flex flex-col flex-wrap gap-2 text-[0.875rem] lg:text-base lg:font-light">
              <li className="country__details-list-item">
                <span className="font-semibold mr-1">Top Level Domain:</span>
              </li>
              <li className="country__details-list-item">
                <span className="font-semibold mr-1">Currencies:</span>
              </li>
              <li className="country__details-list-item">
                <span className="font-semibold mr-1">Languages:</span>
              </li>
            </ul>
          </div>

          <div className="country__border flex flex-row flex-wrap w-full mt-16 items-center">
            <span className="font-semibold mr-1 mb-2">Border Countries: </span>
            <ul className="flex flex-row flex-wrap gap-3 font-light text-[0.875rem] text-xs">
              <li className="bg-secondary px-7 h-7 flex items-center justify-center cursor-pointer rounded-sm hover:bg-[color:var(--color-text-primary)] hover:text-[color:var(--color-bg-secondary)] transition duration-250 ease-out hover:ease-in">
                Poland
              </li>
              <li className="bg-secondary px-7 h-7 flex items-center justify-center cursor-pointer rounded-sm hover:bg-[color:var(--color-text-primary)] hover:text-[color:var(--color-bg-secondary)] transition duration-250 ease-out hover:ease-in">
                Poland
              </li>
              <li className="bg-secondary px-7 h-7 flex items-center justify-center cursor-pointer rounded-sm hover:bg-[color:var(--color-text-primary)] hover:text-[color:var(--color-bg-secondary)] transition duration-250 ease-out hover:ease-in">
                Poland
              </li>
              <li className="bg-secondary px-7 h-7 flex items-center justify-center cursor-pointer rounded-sm hover:bg-[color:var(--color-text-primary)] hover:text-[color:var(--color-bg-secondary)] transition duration-250 ease-out hover:ease-in">
                Poland
              </li>
              <li className="bg-secondary px-7 h-7 flex items-center justify-center cursor-pointer rounded-sm hover:bg-[color:var(--color-text-primary)] hover:text-[color:var(--color-bg-secondary)] transition duration-250 ease-out hover:ease-in">
                Poland
              </li>
              <li className="bg-secondary px-7 h-7 flex items-center justify-center cursor-pointer rounded-sm hover:bg-[color:var(--color-text-primary)] hover:text-[color:var(--color-bg-secondary)] transition duration-250 ease-out hover:ease-in">
                Poland
              </li>
              <li className="bg-secondary px-7 h-7 flex items-center justify-center cursor-pointer rounded-sm hover:bg-[color:var(--color-text-primary)] hover:text-[color:var(--color-bg-secondary)] transition duration-250 ease-out hover:ease-in">
                Poland
              </li>
              <li className="bg-secondary px-7 h-7 flex items-center justify-center cursor-pointer rounded-sm hover:bg-[color:var(--color-text-primary)] hover:text-[color:var(--color-bg-secondary)] transition duration-250 ease-out hover:ease-in">
                Poland
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
