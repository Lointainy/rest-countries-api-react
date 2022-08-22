import { BASE_URL } from './config'

export const getCountry = async (countryName) => {
  let countryData = await fetch(`${BASE_URL}/alpha/${countryName}`)
    .then((res) => res.json())
    .then((data) => data)
  return countryData
}
