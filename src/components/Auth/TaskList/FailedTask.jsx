import React from 'react'

const FailedTask = () => {
  return (
    <div className='h-full flex-shrink-0 p-5 full w-[300px] bg-cyan-300  rounded-xl'>
              <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
              </div>

              <h2 className='mt-2 text-3xl font-semibold'>Make sure you regularly do DSA</h2>
              <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci, maxime aliquam libero voluptate tempora.</p>

              <div className='mt-2'>
  <button className='w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition'>
    Failed
  </button>
</div>
      </div>
  )
}

export default FailedTask
