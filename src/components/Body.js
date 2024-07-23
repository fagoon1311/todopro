import React, { useEffect } from 'react'  
import { useState, useRef } from 'react'
import Task from './Task'

const Body = () => {
  const [task, setTask] = useState('')
  const [listItem, setListItem] = useState([])
  const [edit, setEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [editText, setEditText] = useState('')

  const taskinputref = useRef()
  
  useEffect (()=>{
    if(taskinputref.current) taskinputref.current.focus()
  }, [])
  
  const deleteItem = (index) => {
    const newList = [...listItem]
    newList.splice(index, 1)
    setListItem(newList)
  }
  const editItem = (index) => {
    setEdit(true)
    setEditIndex(index)
    setEditText(listItem[index])
  }

  const saveEdit = (index) => {
    const newList = [...listItem]
    newList[index] = editText
    setListItem(newList)
    setEdit(false)
    setEditIndex(null)
    setEditText('')
  }

  const completedItem = (index) => {
    deleteItem(index)
    alert("Task succesfully completed")
  }

  return (
    <div className='flex flex-col items-center justify-center w-full'> 
        <span className='w-3/5 flex justify-center items-center'>
          <form className='flex w-full' onSubmit={(e) => e.preventDefault()}>
            <input 
              className='p-2 border border-gray-100 rounded-l-md w-4/5 h-10' 
              placeholder='Enter a task'
              type='text' 
              value={task}
              ref={taskinputref}
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
            <Task
            listItem={listItem}
            setListItem={setListItem} 
            itemno={index+1} 
            info={i} 
            deleteItem={deleteItem} 
            completedItem={completedItem} 
            editItem={editItem}  
            edit={edit} 
            saveEdit={saveEdit} 
            editText={editText}
            setEditText={setEditText}
            editIndex={editIndex}
           />
          )}
        </div>

    </div>
  )
}

export default Body
