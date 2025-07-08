import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
    <AuthProvider>

      <App/>

    </AuthProvider>
   


  </StrictMode>,
)
