import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, fetchTodo } from '../features/taskSlice'
import './TaskList.css'
import EditTask from './EditTask'

const TaskList = () => {

    const tasks = useSelector((state) => state.tasks.tasks)
    const loading = useSelector((state) => state.tasks.loading)
    const error = useSelector((state) => state.tasks.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch])

    useEffect(() => {
        console.log("Updated tasks:", tasks);
    }, [tasks]);

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    if (loading) {
        return <p>Tasks loading ...</p>
    }
    if (error) {
        return <p>There is an error{error}</p>
    }

    return (
        <div >
            <div className='container'>
                <h2>Task Management App</h2>
                <p>Tasks</p>
                <ul className='list-items'>
                    {tasks.map(task => (
                        <li className='list'>
                            <div className='non-buttons'>
                                <p>{task.title}</p>
                                {task.description && <p>{task.description}</p>}
                                <p>status:{task.status}</p>
                            </div>
                            <div className='buttons'>
                                <EditTask task={task} />
                                <button onClick={() => handleDelete(task.id)} style={{ backgroundColor: 'red' }}>Delete</button>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default TaskList