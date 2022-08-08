import { Filter } from './Filter'
import { PagePagination } from './PagePagination'
import { Search } from './Search'

export const SearchBar = () => {
  return (
    <>
      <Search />
      <PagePagination />
      <Filter />
    </>
  )
}
