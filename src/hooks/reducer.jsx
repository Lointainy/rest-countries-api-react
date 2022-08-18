export const initialState = {
  itemPerPage: 8,
  countries: [],
  country: [],
  isLoading: false,
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_COUNTRIES_API':
      return {
        ...state,
        countries: payload || [],
      }
    case 'GET_COUNTRY_API':
      return {
        ...state,
        country: payload || [],
      }
    case 'ON_LOADING':
      return {
        ...state,
        isLoading: payload,
      }
    default:
      return state
  }
}
