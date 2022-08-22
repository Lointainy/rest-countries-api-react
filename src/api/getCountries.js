import { BASE_URL } from './config'

export const getCountries = async () => {
  let countriesData = await fetch(`${BASE_URL}/all`)
    .then((res) => res.json())
    .then((data) => data)
  return countriesData
}
