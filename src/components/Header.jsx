import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
    <div className="header bg-secondary shadow-primary h-20">
      <div className="header__content container flex justify-between h-full items-center">
        <div className="header__logo">
          <Link to="/">Where in the world?</Link>
        </div>
        <button onClick={() => toggleTheme()} className="header__switch-toggle">
          {userTheme !== 'dark-theme' ? <>Dark</> : <>Light</>}
        </button>
      </div>
    </div>
  )
}
