import React from 'react'
import { useState } from 'react'
import Task from './Task'

const Body = () => {
  const [task, setTask] = useState('')
  const [listItem, setListItem] = useState([])
  

  return (
    <div className='flex flex-col items-center justify-center w-full'> 
        <span className='w-3/5 flex justify-center items-center'>
          <form className='flex w-full' onSubmit={(e) => e.preventDefault()}>
            <input 
              className='p-2 border border-gray-100 rounded-l-md w-4/5 h-10' 
              placeholder='Enter a task'
              type='text' 
              value={task}
              onChange={(e)=>setTask(e.target.value)} 
            />
            <button 
              className='bg-gradient-to-r from-purple-700 to-purple-900 w-1/5 text-white h-10 p-2 rounded-r-md' 
              onClick={()=>{
                if(task.trim()!==''){
                  setListItem([...listItem, task])
                  setTask('')
                }
              }}
            >
              Save
            </button>
          </form>
        </span>
        <div className='pt-5'>
          {listItem && listItem.map((i ,index)=>
            <Task itemno={index+1} info={i}/>
          )}
        </div>

    </div>
  )
}

export default Body
