import React from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import './App.css'

const App = () => {
  return (
    <>
      <div className='app-container'>
        <AddTask />
        <TaskList />
      </div>
    </>
  )
}

export default App