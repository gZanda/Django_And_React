import  axios  from  'axios';

// GET ALL
export  const  getAllTasks = () => {

    return  axios.get('http://localhost:8000/tasks/');

}

// GET ONE
export  const  getTask = (title) => {
    return  axios.get('http://localhost:8000/tasks/search/' + title);
}

// POST
export  const  createTask = (task) => {

    return  axios.post('http://localhost:8000/tasks/create/', task);

}

// DELETE
export const  deleteTask = (title) => {
    
    return  axios.delete('http://localhost:8000/tasks/delete/' + title);
    
}

// PUT
export const  updateTask = (title, task) => {
    
    return  axios.put('http://localhost:8000/tasks/update/' + title +"/", task);
    
}