import { useNavigate } from "react-router-dom";
import "./TaskCard.css";

export function TaskCard({ task }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/tasks/" + task.title);
    };

    return (
        <div onClick={handleClick} className="taskCard">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
    );
}
