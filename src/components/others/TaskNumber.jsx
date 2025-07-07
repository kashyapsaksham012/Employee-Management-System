import React from 'react'

const TaskNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>

      <div className=' rounded-xl w-[45%] py-6 px-10 bg-red-400 text-white'>
      <h2 className='text-3xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>NEW Task</h3>
    </div>
    
    <div className=' rounded-xl w-[45%] py-6 px-10 bg-cyan-400 text-white'>
      <h2 className='text-3xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>NEW Task</h3>
    </div>

    <div className=' rounded-xl w-[45%] py-6 px-10 bg-orange-500 text-white'>
      <h2 className='text-3xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>NEW Task</h3>
    </div>

    <div className=' rounded-xl w-[45%] py-6 px-10 bg-purple-400 text-white'>
      <h2 className='text-3xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>NEW Task</h3>
    </div>

    </div>
  )
}

export default TaskNumber
