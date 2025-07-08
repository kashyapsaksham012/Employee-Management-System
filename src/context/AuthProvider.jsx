import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const[userData, setUSerDate] = useState(null)

    const data = getLocalStorage();
    console.log(data);
    
  return (
    <div>

    <AuthContext.Provider value={"saksham"}>
      {children}
      </AuthContext.Provider>


    </div>
  )
}

export default AuthProvider
