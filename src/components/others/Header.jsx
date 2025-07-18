import React from 'react'
import { useState } from 'react'

const Header = ({props}) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload();
  }

  return (
    <div className='flex items items-end justify-between text-white'>
      <h1 className='text-2xl font-medium'>Hello<br /><span className='text-3xl font-semibold'>Saksham😁</span> </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
