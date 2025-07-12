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
  const [loggedInuserData, setloggedInuserData] = useState(null)
  const authData = useContext(AuthContext)

useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser') // 
    if (storedUser) {
      const userData = JSON.parse(storedUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])
  

  const handleLogin= (email,Password)=>{
  if(email=='admin@admin.com' && Password=='1234') {
    SetUser('admin')
    localStorage.setItem('isLoggedIn',JSON.stringify({role:'admin'}))
  }
  else if(authData){
    const employee = authData.employees.find(
    (e)=> email === e.email && Password === e.password
  )
  if(employee){

    SetUser('employee') 
    setloggedInuserData(employee)
  }
    localStorage.setItem('isLoggedIn',JSON.stringify({role:'employee', data: employee}))
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
    {user === 'admin' 
  ? <AdminDashboard changeUser = {setUser} /> 
  : user === 'employee' 
    ? <EmployeeDashboard changeUser = {setUser}  data={loggedInuserData} /> 
    : null
}
    </>
  )
}
 
export default App


