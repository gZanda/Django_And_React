import { useEffect, useState } from "react"
import { getAllTasks } from "../api/ApiFunctions"

export function TaskList() {

    // This is a state variable 
    const [tasks, setTasks] = useState([]);

    // This is a side effect (runs after the render)
    useEffect(() => {
        
        async function loadTasks(){
            const res = await getAllTasks();
            console.log(res);
            setTasks(res.data);
        }

        loadTasks();

    }, [])

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )

}