import { useSelector } from 'react-redux'
import { PagePaginationButton } from './PagePaginationButton'

export const PagePagination = () => {
  const currentPage = useSelector((store) => store.countries.currentPage)
  const totalPage = useSelector((store) => store.countries.totalPage)

  return (
    <div className="flex justify-center items-center md:w-auto sm:w-full sm:my-10 md:m-0 my-10 w-full">
      <PagePaginationButton disabledButton={currentPage <= 1} pageNumber={'prev'} iconName={'chevron-left'} />
      <PagePaginationButton pageNumber={1} disabledButton={currentPage === 1} />
      <PagePaginationButton pageNumber={currentPage} disabledButton={currentPage === 1 || currentPage >= totalPage} />
      <PagePaginationButton
        pageNumber={totalPage}
        disabledButton={currentPage === totalPage || (currentPage === 1 && totalPage === 1)}
      />
      <PagePaginationButton disabledButton={currentPage >= totalPage} pageNumber={'next'} iconName={'chevron-right'} />
    </div>
  )
}
