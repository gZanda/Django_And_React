import { useEffect } from "react"
import { getAllTasks } from "../api/ApiFunctions"

export function TaskList() {

    useEffect(() => {
        
        async function loadTasks(){
            const res = await getAllTasks();
            console.log(res);
        }

        loadTasks();

    }, [])

    return (
        <h1> Task List </h1>
    )

}