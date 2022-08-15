import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { CountryContext } from '../hooks/Context'

export const Search = () => {
  const { handleSearch, search } = useContext(CountryContext)

  return (
    <div className="search  h-14 md:w-96 sm:w-full w-full">
      <label htmlFor="search" className="relative h-full w-full block">
        <input
          className="search__input absolute h-full w-full px-20 text-sm bg-secondary shadow-primary  rounded-[0.35rem] focus:outline focus:outline-2 focus:outline-[color:var(--color-text-primary)] text-primary"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          type="search"
          name="search"
          id="search"
          placeholder="search coutry"
        />
        <FontAwesomeIcon className="search__icon absolute left-8 top-5 text-primary" icon="search" />
        {search ? (
          <button
            onClick={() => handleSearch('')}
            className="search__btn flex items-center justify-center absolute right-8 top-4 origin-center rotate-45 cursor-pointer bg-primary w-6 h-6 rounded-xl text-primary hover:text-[color:var(--color-bg-secondary)] hover:bg-[color:var(--color-text-primary)] transition duration-250 ease-out hover:ease-in">
            <FontAwesomeIcon className="search__btn-icon" icon="plus" />
          </button>
        ) : (
          ''
        )}
      </label>
    </div>
  )
}
