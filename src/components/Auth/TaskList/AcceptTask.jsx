import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
    <div className='h-full flex-shrink-0 p-5 full w-[300px] bg-amber-300  rounded-xl'>
              <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>category</h3>
                <h4 className='text-sm'>{data.date}</h4>
              </div>

              <h2 className='mt-2 text-3xl font-semibold'>{data.category}</h2>
              <p className='mt-4'>{data.description}</p>

              <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
              </div>
      </div>
      
  )
}

export default AcceptTask
