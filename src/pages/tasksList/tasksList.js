import { useEffect, useState, useContext } from "react"

import{CardWrapper} from '../../components/styledComponents' 
import taskContext from "../../context/tasks/tastContext";



const TasksList = () => {
    const a = useContext(taskContext)
    const [data, setData] = useState();
    const {tasks} = a;
    return <div>{
        tasks && tasks.map((item) => {
            return <CardWrapper key={item.id} > {item.name} </CardWrapper>
        })
    }</div>
}

export default TasksList