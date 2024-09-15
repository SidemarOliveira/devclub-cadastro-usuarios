import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { RouterProvider } from 'react-router-dom'
import Router from './routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)
