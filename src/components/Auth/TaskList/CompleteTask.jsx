import React from 'react'

const CompleteTask = ({date}) => {
  return (
     <div className='h-full flex-shrink-0 p-5 full w-[300px] bg-pink-300  rounded-xl'>
              <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>{data.date}</h4>
              </div>

              <h2 className='mt-2 text-3xl font-semibold'>{data.category}</h2>
              <p className='mt-4'>{data.description}</p>

              <div className='mt-2'>
  <button className='w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition'>
    Completed
  </button>
</div>
      </div>
  )
}

export default CompleteTask
