import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { ON_PAGE } from '../store/countriesSlice'

export const PagePaginationButton = ({ iconName, pageNumber, disabledButton }) => {
  const dispatch = useDispatch()

  const handlePageClick = (value) => {
    dispatch(ON_PAGE(value))
  }

  return (
    <button
      onClick={() => handlePageClick(pageNumber)}
      className="h-14 w-14 flex items-center justify-center bg-secondary mx-[0.125rem] rounded-[0.35rem] text-primary cursor-pointer hover:bg-[color:var(--color-text-primary)] hover:text-[color:var(--color-bg-secondary)] transition duration-250 ease-out hover:ease-in disabled:hover:bg-secondary disabled:hover:text-primary disabled:opacity-40"
      disabled={disabledButton}>
      {iconName ? <FontAwesomeIcon icon={iconName} /> : pageNumber}
    </button>
  )
}
