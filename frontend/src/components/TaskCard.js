export function TaskCard({task}){
    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <hr/>
        </div>
    )
}