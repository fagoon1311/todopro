import React, { useEffect, useRef } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";

const Task = ({info, itemno, deleteItem, completedItem, editItem, edit, editText, setEditText, saveEdit, editIndex}) => {
  const inputref = useRef()

  useEffect(()=>{
    if(inputref.current) inputref.current.focus()
  },[edit])


  return (
    <div className='flex border items-center justify-center border-gray-200 rounded-xl p-2 m-2 bg-transparent w-[70rem] h-[5rem] hover:cursor-pointer'>
        <span className='text-white font-bold border border-gray-200 h-full flex items-center justify-center w-1/12 rounded-r-lg bg-gradient-to-l from-purple-700 to-purple-900'>Task-{itemno}</span>
        { edit && editIndex === itemno-1?
        /// -------------------------if editing ------------------------------------------///
        <form className='w-full' onSubmit={(e)=>{e.preventDefault()}}>
          <div className='flex flex-row justify-between w-full items-center'>
              <input className='bg-transparent pl-5 ml-5 text-2xl w-full text-white border-opacity-10' 
                value={editText} 
                onChange={(e)=>setEditText(e.target.value)}
                ref={inputref}></input>
              <button className='text-white p-2 text-2xl' onClick={()=>saveEdit(itemno-1)} ><IoIosSave/></button>
            </div>
          </form>
          /// -----------------------------------------------------------------------------///
          :
          /// ------------------------------ if not editing ------------------------------///
          <div className='flex flex-row justify-between w-full items-center'>
          <span className='text-white pl-5 text-2xl'>{info}</span>
            <div className='flex'>
              <button className='text-white p-2 text-2xl'onClick={()=>completedItem(itemno-1)} ><FaCheck/></button>
              <button className='text-white p-2 text-2xl'onClick={()=>{
                editItem(itemno-1)
                }}><MdEdit /></button>
              <button className='text-white p-2 text-xl' onClick={()=>deleteItem(itemno-1)}><FaTrashCan /></button>
            </div>
          </div>
          /// ---------------------------------------------------------------------------///
          }
        
    </div>
  )
}

export default Task
