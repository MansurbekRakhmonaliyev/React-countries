import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import './index.css'
import ThemeContext from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContext>
        <App />
    </ThemeContext>
)
