import React, { useEffect, useRef } from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { IoIosSave } from 'react-icons/io';

const Task = ({
  info,
  itemno,
  deleteItem,
  completedItem,
  editItem,
  edit,
  editText,
  setEditText,
  saveEdit,
  editIndex,
  listItem,
  setListItem
}) => {
  const inputref = useRef();
  const itemToDrag = useRef();
  const itemToDragOver = useRef();

  useEffect(() => {
    if (inputref.current) inputref.current.focus();
  }, [edit]);

  const handleDragStart = (e, index) => {
    itemToDrag.current = index;
    console.log(`Item to drag - ${itemToDrag.current}`);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault(); // Prevent default to allow drop
    itemToDragOver.current = index;
    console.log(`Dragging over - ${itemToDragOver.current}`);
  };

  const handleDragEnd = (e, index) => {
    const arr1 = [...listItem];
    console.log(`State of arr1 before splice:`, arr1);
    const todoitemmain = arr1[itemToDrag.current];
    console.log(`Item being dragged:`, todoitemmain);

    arr1.splice(itemToDrag.current, 1);
    console.log(`State of arr1 after removing item:`, arr1);

    console.log(`itemToDragOver.current:`, itemToDragOver.current);
    arr1.splice(itemToDragOver.current, 0, todoitemmain);
    console.log(`State of arr1 after inserting item:`, arr1);

    itemToDrag.current = null;
    itemToDragOver.current = null;
    setListItem(arr1);
  };
  useEffect(() => {
    console.log('Updated list:', listItem);
  }, [listItem]);

  return (
    <div
      className="flex border items-center justify-center border-gray-200 rounded-xl p-2 m-2 bg-transparent w-[70rem] h-[5rem] hover:cursor-pointer"
      draggable
      onDragStart={(e) => handleDragStart(e, itemno - 1)}
      onDragEnd={(e) => handleDragEnd(e, itemno - 1)}
      onDragOver={(e) => handleDragOver(e, itemno - 1)}
    >
      <span className="text-white font-bold border border-gray-200 h-full flex items-center justify-center w-1/12 rounded-r-lg bg-gradient-to-l from-purple-700 to-purple-900">
        Task-{itemno}
      </span>
      {edit && editIndex === itemno - 1 ? (
        /// -------------------------if editing ------------------------------------------///
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-row justify-between w-full items-center">
            <input
              className="bg-transparent pl-5 ml-5 text-2xl w-full text-white border-opacity-10"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              ref={inputref}
            ></input>
            <button
              className="text-white p-2 text-2xl"
              onClick={() => saveEdit(itemno - 1)}
            >
              <IoIosSave />
            </button>
          </div>
        </form>
      ) : (
        /// ------------------------------ if not editing ------------------------------///
        <div className="flex flex-row justify-between w-full items-center">
          <span className="text-white pl-5 text-2xl">{info}</span>
          <div className="flex">
            <button
              className="text-white p-2 text-2xl"
              onClick={() => completedItem(itemno - 1)}
            >
              <FaCheck />
            </button>
            <button
              className="text-white p-2 text-2xl"
              onClick={() => {
                editItem(itemno - 1);
              }}
            >
              <MdEdit />
            </button>
            <button
              className="text-white p-2 text-xl"
              onClick={() => deleteItem(itemno - 1)}
            >
              <FaTrashCan />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
