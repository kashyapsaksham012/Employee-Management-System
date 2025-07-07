import React from 'react'
import { useState } from 'react'
const Longin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submitHandler= (e)=>{
        e.preventDefault()
        console.log("email is", email)
        console.log("password is: ", password)

        // Submit k baad khali kardo 
        setEmail("")
        setPassword("")
    }



  return (

    <div className="flex items-center justify-center w-screen h-screen bg-black">
  <div className="border-2 border-emerald-600 rounded-xl p-10">

    <form onSubmit={(e)=>{
        submitHandler(e);
    }}
    className="flex flex-col items-center justify-center gap-4 w-80">
      
      <input required
      value={email}
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
        type="email" 
        placeholder="Enter your email"
        className="w-full outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-white placeholder:text-gray-400"
      />

      <input required
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
        type="password" 
        placeholder="Enter password"
        className="w-full outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-white placeholder:text-gray-400"
      />

      <button
        type="submit" 
        className="w-full bg-emerald-600 text-white font-semibold rounded-full py-3 px-5 hover:bg-emerald-700 transition"
      >
        Log in
      </button>

    </form>
  </div>
</div>


)
}

export default Longin
