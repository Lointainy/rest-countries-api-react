import { Route, Routes } from 'react-router-dom'

/* Components */
import { Header } from './components/Header'
/* Page`s */
import { DetailsPage } from './page/DetailsPage'
import { MainPage } from './page/MainPage'
import { NotPageFound } from './page/NotPageFound'

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<MainPage />} />
        <Route path="details/:countryId" element={<DetailsPage />} />
        <Route path="*" element={<NotPageFound />} />
      </Routes>
    </>
  )
}
