import React from 'react'

const NewTask = ({data}) => {
  return (
          <div className='h-full flex-shrink-0 p-5 full w-[300px] bg-amber-300  rounded-xl'>
              <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>{data.date}</h4>
              </div>

              <h2 className='mt-2 text-3xl font-semibold'>{data.category}</h2>
              <p className='mt-4'>{data.description}</p>

            <div className='mt-4'>
  <button className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>
    Accept Task
  </button>
</div>

      </div>
  )
}

export default NewTask
