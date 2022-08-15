import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () => {
  const [userTheme, setUserTheme] = useState(localStorage.getItem('user-theme') || 'light-theme')

  const toggleTheme = () => {
    userTheme === 'dark-theme' ? setUserTheme('light-theme') : setUserTheme('dark-theme')
  }

  useEffect(() => {
    localStorage.setItem('user-theme', userTheme)
    document.documentElement.className = userTheme
  }, [userTheme])

  return (
    <div className="header bg-secondary shadow-primary h-20 text-primary">
      <div className="header__content container flex justify-between h-full items-center sm:p-0 px-4">
        <div className="header__logo text-2xl font-extrabold">
          <Link to="/">Where in the world?</Link>
        </div>
        <button onClick={() => toggleTheme()} className="header__theme-toggle flex items-center">
          {userTheme !== 'dark-theme' ? (
            <>
              <FontAwesomeIcon className="header__theme-toggle-icon mr-2" icon="moon" />
              Dark mode
            </>
          ) : (
            <>
              <FontAwesomeIcon className="header__theme-toggle-icon mr-2" icon="sun" />
              Light mode
            </>
          )}
        </button>
      </div>
    </div>
  )
}
