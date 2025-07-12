import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext() 

const AuthProvider = ({children}) => {

    const[userData, setUSerDate] = useState(null)

    useEffect(() => {
      setLocalStorage()
      const {employees,admin} = getLocalStorage()
      setUSerDate({employees,admin})
    }, [])
    
    
  return (
    <div>

    <AuthContext.Provider value={userData}>
      {children}
      </AuthContext.Provider>


    </div>
  )
}

export default AuthProvider
