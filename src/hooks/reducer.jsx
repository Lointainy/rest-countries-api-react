export const initialState = {
  itemPerPage: 8,
  countries: [],
  country: null,
  isLoading: false,
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GEP_COUNTRIES_API':
      return {
        ...state,
        countries: payload || [],
      }
    default:
      return state
  }
}
