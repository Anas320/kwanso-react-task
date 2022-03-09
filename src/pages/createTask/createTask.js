import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import taskContext from '../../context/tasks/tastContext'

const CreateTasks = () => {
    const a = useContext(taskContext)
    const [name, setName] =  useState("");
    const navigate = useNavigate()
    
    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const addTaskToList = () => {
        setName("")
        a.addTask({
            id: Math.random().toString(16).slice(2),
            name: name
        })
        navigate('/')
    }
    return <div>
         
        Task Name  : <input 
         value = {name}
         onChange = {nameChangeHandler}
        />
        <button onClick={
            addTaskToList
        } > Add Task </button>
    </div>
}

export default CreateTasks