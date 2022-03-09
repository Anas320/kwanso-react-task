import { useState, useContext } from 'react'
import taskContext from '../../context/tasks/tastContext'

const DeleteTasks = () => {
    const a = useContext(taskContext);
    const [tasks, setTasks] = useState([]);
    const handleCheckboxChange = event => {
        let newArray = [...tasks, event.target.id];
        if (tasks.includes(event.target.id)) {
            newArray = newArray.filter(task => task !== event.target.id);
        }
        setTasks(newArray);
    };

    const deleteTasks = () => {
        a.deleteTask(tasks)
    }

    
    return <div>{
        a.tasks && a.tasks.map((item) => {
            return <>
                {item.name}
                <input
                    key={item.id}
                    type="checkbox"
                    className="custom-control-input"
                    id={item.id}
                    value={item.name}
                    onChange={handleCheckboxChange}
                />
            </>
        })
        
    }
    <button onClick = {deleteTasks} > Delete Tasks </button>
    </div>
}

export default DeleteTasks