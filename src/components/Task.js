import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`grid grid-flow-col justify-between mx-2 my-1 py-2 px-2 rounded bg-gray-100 ${task.reminder ? 'border-l-4 border-x-green-600' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}</h3>
            <FaTimes className='text-rose-600 cursor-pointer' onClick={() => onDelete(task.id)} />
        </div>
    )
}

export default Task
