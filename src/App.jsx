/* Components */
import { CountryList } from './components/CountryList'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
/* Page`s */
import { DetailsPage } from './page/DetailsPage'
import { MainPage } from './page/MainPage'

export const App = () => {
  return (
    <>
      <Header />

      <SearchBar />

      <MainPage />
      <DetailsPage />
    </>
  )
}
