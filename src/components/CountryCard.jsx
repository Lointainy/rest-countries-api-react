export const CountryCard = ({ country }) => {
  return (
    <div className="country-card flex flex-col bg-secondary h-[21rem] rounded-md overflow-hidden">
      <div className="country-card__img ">
        <img className="w-full h-40" src={country.flags.png} alt={country.name.common} />
      </div>
      <div className="country-card__info p-6 text-primary">
        <div className="country-name text-lg mb-4 font-extrabold">{country.name.common}</div>
        <ul className="country-subtitle__list flex flex-col gap-1">
          <li className="country-subtitle__list-item font-light text-sm">
            <span className="font-semibold mr-2">Population:</span>
            {country.population.toLocaleString()}
          </li>
          <li className="country-subtitle__list-item font-light text-sm">
            <span className="font-semibold mr-2">Region:</span>
            {country.region}
          </li>
          {country.capital ? (
            <li className="country-subtitle__list-item font-light text-sm">
              <span className="font-semibold mr-2">Capital:</span>
              {country.capital.join(', ')}
            </li>
          ) : (
            ''
          )}
        </ul>
        {/* <div className="">{country.cca3}</div> */}
      </div>
    </div>
  )
}
