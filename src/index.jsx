import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './App'

import { Provider } from 'react-redux'
import { store } from './store'

/* STYLE */
import '@/assets/scss/main.scss'
import './index.css'

/* font */
import '@fontsource/nunito-sans'

/* Icons */
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeftLong,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faMoon,
  faPlus,
  faSearch,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faSun, faSearch, faPlus, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faArrowLeftLong)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)
