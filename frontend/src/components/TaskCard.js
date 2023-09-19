import { useNavigate } from "react-router-dom"

export function TaskCard({task}){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/tasks/' + task.title);
    }

    return (
        <div style={{background: "black"}} onClick={handleClick} >
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <hr/>
        </div>
    )
}