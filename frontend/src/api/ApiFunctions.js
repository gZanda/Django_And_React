import  axios  from  'axios';

// GET ALL
export  const  getAllTasks = () => {

    return  axios.get('http://localhost:8000/tasks/');

}

// POST
export  const  createTask = (task) => {

    return  axios.post('http://localhost:8000/tasks/create/', task);

}