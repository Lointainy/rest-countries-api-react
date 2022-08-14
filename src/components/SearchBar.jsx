import { Filter } from './Filter'
import { PagePagination } from './PagePagination'
import { Search } from './Search'

export const SearchBar = () => {
  return (
    <div className="searchbar container mt-12 flex flex-wrap justify-between items-center sm:p-0 px-4">
      <Search />
      <PagePagination />
      <Filter />
    </div>
  )
}
