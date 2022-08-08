import { createContext } from 'react'

export const CountryContext = createContext()

export const ContextProvider = ({ children }) => {
  const value = {}

  return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
}
