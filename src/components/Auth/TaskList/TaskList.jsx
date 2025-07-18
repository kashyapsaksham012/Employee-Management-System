import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className='h-[55%] flex  items-center justify-start gap-5  flex-nowrap w-full py-5 overflow-x-auto mt-10'>

      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return <AcceptTask key ={idx} data={elem}/>
        }
        if(elem.NewTask){
          return<NewTask key ={idx} data={elem}/>
        }
        if(elem.FailedTask){
          return <FailedTask key ={idx} data={elem}/>
        }
        if(elem.CompleteTask){
          return <CompleteTask key ={idx} data={elem}/>
        }
      })}

      <div className='h-full flex-shrink-0 p-5 full w-[300px] bg-blue-300  rounded-xl'>
              <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
              </div>

              <h2 className='mt-2 text-3xl font-semibold'>Make sure you regularly do DSA</h2>
              <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci, maxime aliquam libero voluptate tempora.</p>
      </div>

      <div className='h-full flex-shrink-0 p-5 full w-[300px] bg-red-300  rounded-xl'>
              <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
              </div>

              <h2 className='mt-2 text-3xl font-semibold'>Make sure you regularly do DSA</h2>
              <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci, maxime aliquam libero voluptate tempora.</p>
      </div>

    </div>
  )
}

export default TaskList
