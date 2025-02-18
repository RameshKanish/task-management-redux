import React, { useState } from 'react'
import './EditTask.css'
import { useDispatch } from 'react-redux';
import { editTask } from '../features/taskSlice';

const EditTask = ({ task }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [status, setStatus] = useState(task.status)
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editTask({ id: task.id, title, description, status }))
        setIsEdit(false)
    }

    return (
        <>
            {
                isEdit
                    ? <div className='sub-menu'>
                        <form  >
                            <div className='form-data' >
                                <h2>Edit Task</h2>
                                <div className='input-items' >
                                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Task Name' />
                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Task Description' />
                                    <select value={status} onChange={(e) => setStatus(e.target.value)}  >
                                        <option value="To Do">To Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                                <div className='button'>
                                    <button onClick={handleEdit} type='submit' style={{ backgroundColor: 'rgb(59, 59, 243)' }}>Save</button>
                                    <button onClick={() => setIsEdit(false)} type='submit' style={{ backgroundColor: 'rgb(147, 147, 150)' }}>Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    : <button onClick={() => setIsEdit(true)} style={{ backgroundColor: 'rgb(59, 59, 243)' }}>edit</button>
            }

        </>

    )
}

export default EditTask