import { useContext } from 'react'
import { CountryContext } from '../hooks/Context'
import { PagePaginationButton } from './PagePaginationButton'

export const PagePagination = () => {
  const { currentPage, totalPage } = useContext(CountryContext)

  return (
    <div className="flex justify-center items-center md:w-auto sm:w-full sm:my-10 md:m-0 my-10 w-full">
      <PagePaginationButton disabledButton={currentPage <= 1} pageNumber={'prev'} iconName={'chevron-left'} />
      <PagePaginationButton pageNumber={1} disabledButton={currentPage === 1} />
      <PagePaginationButton pageNumber={currentPage} />
      <PagePaginationButton pageNumber={totalPage} disabledButton={currentPage === totalPage} />
      <PagePaginationButton disabledButton={currentPage >= totalPage} pageNumber={'next'} iconName={'chevron-right'} />
    </div>
  )
}
