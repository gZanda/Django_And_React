import { useEffect, useState } from "react";
import { getAllTasks } from "../api/ApiFunctions";
import { TaskCard } from "./TaskCard";
import "./TaskList.css";

export function TaskList() {
    // This is a state variable
    const [tasks, setTasks] = useState([]);

    // This is a side effect (runs after the render)
    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks();
            console.log(res);
            setTasks(res.data);
        }

        loadTasks();
    }, []);

    return (
        <div className="taskList">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}
