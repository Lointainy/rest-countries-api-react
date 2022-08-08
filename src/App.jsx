import { Route, Routes } from 'react-router-dom'

import { ContextProvider } from './hooks/Context'
/* Components */
import { Header } from './components/Header'
/* Page`s */
import { DetailsPage } from './pages/DetailsPage'
import { MainPage } from './pages/MainPage'
import { NotPageFound } from './pages/NotPageFound'

export const App = () => {
  return (
    <>
      <Header />
      <ContextProvider>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="details/:countryId" element={<DetailsPage />} />
          <Route path="*" element={<NotPageFound />} />
        </Routes>
      </ContextProvider>
    </>
  )
}
