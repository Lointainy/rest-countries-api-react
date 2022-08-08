import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

/* STYLE */
import '@/assets/scss/main.scss'
import './index.css'

/* font */
import '@fontsource/nunito-sans'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)