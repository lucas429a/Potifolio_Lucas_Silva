import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Ensure theme is valid
const currentTheme = localStorage.getItem('theme');
if (currentTheme !== 'light' && currentTheme !== 'dark') {
  localStorage.setItem('theme', 'light');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
