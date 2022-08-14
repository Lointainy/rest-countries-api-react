import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { CountryContext } from '../hooks/Context'

export const Filter = () => {
  const { handleFilter, filter } = useContext(CountryContext)

  const [dropdown, setDropdown] = useState(false) // toggle filtermenu
  const [filterList, setFilterList] = useState([
    { name: 'Africa', status: true },
    { name: 'Americas', status: false },
    { name: 'Asia', status: false },
    { name: 'Europe', status: false },
    { name: 'Oceania', status: false },
  ])

  const handleDropDown = () => {
    setDropdown(!dropdown)
  }

  return (
    <div className="filter-dropdown relative lg:w-[12.5rem] sm:w-full md:mt-10 lg:m-0 w-full">
      <div
        onClick={() => handleDropDown()}
        className="filter-selected h-14 rounded-[0.35rem] bg-secondary shadow-primary flex justify-between items-center px-5 cursor-pointer text-primary">
        <span>{filter ? filter : 'Filter by Region'}</span>

        {filter ? (
          <button
            onClick={() => {
              handleFilter('')
              setDropdown(false)
            }}
            className="search__btn flex items-center justify-center absolute right-4 top-4 origin-center rotate-45 cursor-pointer bg-primary w-6 h-6 rounded-xl text-primary hover:text-[color:var(--color-bg-secondary)] hover:bg-[color:var(--color-text-primary)] transition duration-250 ease-out hover:ease-in">
            <FontAwesomeIcon className="search__btn-icon" icon="plus" />
          </button>
        ) : dropdown ? (
          <FontAwesomeIcon icon="chevron-up" />
        ) : (
          <FontAwesomeIcon icon="chevron-down" />
        )}
      </div>

      {dropdown ? (
        <div className="filter-list absolute text-primary mt-1 w-full rounded-[0.35rem] bg-secondary p-2 flex flex-wrap">
          {filterList.map((item, index) => {
            return (
              <label
                key={index}
                htmlFor={item.name}
                className="filter-list-item py-2 px-6 rounded-[0.35rem] hover:bg-[color:var(--color-bg-primary)] cursor-pointer w-full relative">
                <input
                  value={item.name}
                  onChange={(e) => {
                    handleFilter(e.target.value)
                    handleDropDown()
                  }}
                  className="hidden"
                  type="radio"
                  name="filter"
                  id={item.name}
                />
                {item.name}
              </label>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
