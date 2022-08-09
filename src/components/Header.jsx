import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () => {
  const [userTheme, setUserTheme] = useState('light-theme')

  const toggleTheme = () => {
    const activeTheme = localStorage.getItem('user-theme')
    activeTheme === 'light-theme' ? setUserTheme('dark-theme') : setUserTheme('light-theme')
    userTheme === 'light-theme' ? uploadTheme('dark-theme') : uploadTheme('light-theme')
  }

  const uploadTheme = (theme) => {
    localStorage.setItem('user-theme', theme)
  }

  useEffect(() => {
    localStorage.setItem('user-theme', userTheme)
    document.documentElement.className = userTheme
  }, [userTheme])

  return (
    <div className="header bg-secondary shadow-primary h-20 text-primary">
      <div className="header__content container flex justify-between h-full items-center">
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
