import React, { useEffect, useState } from 'react'
import Longin from './components/Auth/Longin'
import EmployeeDashboard from './components/Auth/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Auth/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'


const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)
  

  const[user,SetUser] = useState(null)

  const handleLogin= (email,Password)=>{
  if(email=='admin@admin.com' && Password=='1234') {
    SetUser('admin')
  }else if(email=='user@user.com' && Password=='1234'){
        SetUser('employee')
  }
  else{
    alert("Invalid credentials");
  }
  }

  handleLogin() 

  return (
    <>
    {!user ? <Longin handleLogin={handleLogin}/>: '' }
    {user=='admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}
 
export default App
