import React from 'react'

const CreateTask = () => {
  return (
    <>
    
    <div className='w-full max-w-5xl mx-auto px-4'>

        <form className="flex w-full  mt-19 gap-6 items-start justify-between p-6 bg-[#2a2929] rounded-md">
  <div className="w-1/2 flex flex-col gap-4">
    <div className="flex flex-col">
      <h3 className="text-white mb-1">Task Title</h3>
      <input type="text" placeholder="Make a UI design" className="p-2 rounded-md bg-[#121212] text-white placeholder:text-gray-400 border border-gray-600" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-white mb-1">Date</h3>
      <input type="date" className="p-2 rounded-md bg-[#121212] text-white border border-gray-600" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-white mb-1">Assign to</h3>
      <input type="text" placeholder="Enter Employee name" className="p-2 rounded-md bg-[#121212] text-white placeholder:text-gray-400 border border-gray-600" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-white mb-1">Category</h3>
      <input type="text" placeholder="design, dev, etc" className="p-2 rounded-md bg-[#121212] text-white placeholder:text-gray-400 border border-gray-600" />
    </div>
  </div>
  <div className="w-1/2 flex flex-col gap-4">
    <h3 className="text-white mb-1">Description</h3>
    <textarea cols="30" rows="10" className="p-2 rounded-md bg-[#121212] text-white placeholder:text-gray-400 border border-gray-600"></textarea>
    <button type="submit" className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">Create Task</button>
  </div>
</form>

      </div>
    
    </>
  )
}

export default CreateTask
