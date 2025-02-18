import React, { useState } from 'react'
import './AddTask.css'
import { useDispatch } from 'react-redux'
import { v4 as uuid4 } from 'uuid'
import { addTask } from '../features/taskSlice'

const AddTask = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: uuid4(),
            title,
            description,
            status
        }
        dispatch(addTask(newTask))
        setTitle('')
        setDescription('')
        setStatus('')
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className='container2'>
                    <h2>Add a New Task</h2>
                    <div className='inputs'>
                        <input className='input1' value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Task Name' />
                        <textarea className='input2' value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Task Description' />
                        <select value={status} onChange={(e) => setStatus(e.target.value)}  >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <button type='submit'>Add Task</button>
                </div>
            </form>

        </>
    )
}

export default AddTask