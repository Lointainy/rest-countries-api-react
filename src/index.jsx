import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './App'

/* STYLE */
import '@/assets/scss/main.scss'
import './index.css'

/* font */
import '@fontsource/nunito-sans'

/* Icons */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faSun, faSearch)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
