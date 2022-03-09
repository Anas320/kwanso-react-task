import { useState } from 'react'

import TaskContext from './tastContext'

const TaskState = (props) => {
 
    const initState = [{
        id : "0",
        name : "Anas"
     }]
     
    const [tasks, setTasks] = useState(initState)

     const addTask = ({id, name}) => {

          setTasks([...tasks, {id, name}]);
          
     }

     const deleteTask = (tasksListToDel) => {
        const allTasks = tasks;
        const tasksAfterDeletion = allTasks.filter(item => !tasksListToDel.includes(item.id));
        setTasks(tasksAfterDeletion);
     }

    return (
        <TaskContext.Provider value = {{tasks, addTask, deleteTask}}>
               {props.children}
        </TaskContext.Provider>
    )
}
export default TaskState
