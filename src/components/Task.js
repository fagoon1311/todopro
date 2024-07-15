import React from 'react'

const Task = ({info, itemno}) => {
    
  return (
    <div className='flex border items-center justify-center border-gray-200 rounded-xl p-2 m-2 bg-transparent w-[70rem] h-[5rem] hover:cursor-pointer'>
        <span className='text-white font-bold border border-gray-200 h-full flex items-center justify-center w-1/12 rounded-r-lg bg-gradient-to-l from-purple-700 to-purple-900'>Task-{itemno}</span>
        <span className='text-white w-11/12 pl-5 text-2xl'>{info}</span>
    </div>
  )
}

export default Task
