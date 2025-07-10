import React, { useContext, useEffect, useState } from 'react'
import Longin from './components/Auth/Longin'
import EmployeeDashboard from './components/Auth/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Auth/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)
  

  const[user,SetUser] = useState(null)

  const authData = useContext(AuthContext)
  // if (!authData) return <div>Loading...</div>;

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if(isLoggedIn){
        SetUser(isLoggedIn.role)
    }
  }, [authData]) 
  

  const handleLogin= (email,Password)=>{
  if(email=='admin@admin.com' && Password=='1234') {
    SetUser('admin')
    localStorage.setItem('isLoggedIn',JSON.stringify({role:'admin'}))
  }
  else if(authData && authData.employees.find(
    (e)=> email === e.email && Password === e.password
  )){
    SetUser('employee') 
    localStorage.setItem('isLoggedIn',JSON.stringify({role:'employee'}))
  }
  else{
      alert("Invalid credentials")
    }
        
  
  // else{
  //   alert("Invalid credentials");
  // }
  }



  return (
    <>
    {!user ? <Longin handleLogin={handleLogin}/>: '' }
    {user=='admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}
 
export default App
