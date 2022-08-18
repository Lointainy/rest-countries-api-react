import { Link } from 'react-router-dom'

export const CountryDetailsCard = ({ country }) => {
  return (
    <div className="details-country__card grid grid-cols-1 md:grid-cols-2 lg:gap-[9rem] gap-[3rem] mt-12 mb-12">
      <div className="details-country__img  h-[25rem] overflow-hidden bg-secondary rounded-xl flex justify-center items-center">
        <img
          className="block w-[85%] mx-auto h-auto rounded-md"
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
        />
      </div>
      <div className="details-country__info text-primary">
        <div className="country__name font-extrabold text-[2rem] mb-6">{country.name.common}</div>
        <div className="country__details w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-[2rem]">
          <ul className="country__details-list flex flex-col flex-wrap gap-2 text-[0.875rem] lg:text-base lg:font-light">
            <li className="country__details-list-item ">
              <span className="font-semibold mr-1">Native Name:</span>
              {country.name.official}
            </li>
            <li>
              <span className="font-semibold mr-1">Population:</span>
              {country.population.toLocaleString()}
            </li>
            <li className="country__details-list-item">
              <span className="font-semibold mr-1">Region:</span>
              {country.region}
            </li>
            <li>
              <span className="font-semibold mr-1">Sub Region:</span>
              {country.subregion}
            </li>
            <li className="country__details-list-item">
              <span className="font-semibold mr-1">Capital:</span>
              {country.capital.join(', ')}
            </li>
          </ul>
          <ul className="country__details-list flex flex-col flex-wrap gap-2 text-[0.875rem] lg:text-base lg:font-light">
            <li className="country__details-list-item">
              <span className="font-semibold mr-1">Top Level Domain:</span>
              {country.tld.join(', ')}
            </li>
            <li className="country__details-list-item flex">
              <span className="font-semibold mr-1">Currencies:</span>
              {Object.values(country.currencies).map((item) => {
                return (
                  <div key={item}>
                    <span className="mr-1">{item.name}</span>
                    {item.symbol}
                  </div>
                )
              })}
            </li>
            <li className="country__details-list-item flex">
              <span className="font-semibold mr-1">Languages:</span>
              {Object.values(country.languages).map((item, index) => {
                return (
                  <div key={item}>
                    <span className="mr-1">
                      {item}
                      {index + 1 < Object.keys(country.languages).length ? ', ' : ''}
                    </span>
                  </div>
                )
              })}
            </li>
          </ul>
        </div>

        <div className="country__border flex flex-col flex-wrap w-full mt-16">
          <span className="font-semibold mr-1 mb-2 lg:mb-0">Border Countries: </span>
          <ul className="country__border-list flex flex-row flex-wrap gap-3 font-light text-[0.875rem] text-xs">
            {country.borders
              ? country.borders.map((countryBorder) => {
                  return (
                    <li key={countryBorder}>
                      <div>
                        <Link
                          className="country__border-list-item bg-secondary px-7 h-7 flex items-center justify-center cursor-pointer rounded-sm hover:bg-[color:var(--color-text-primary)] hover:text-[color:var(--color-bg-secondary)] transition duration-250 ease-out hover:ease-in"
                          to={`/details/${countryBorder.toLowerCase()}`}>
                          {countryBorder}
                        </Link>
                      </div>
                    </li>
                  )
                })
              : ''}
          </ul>
        </div>
      </div>
    </div>
  )
}
