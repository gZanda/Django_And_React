import {useForm} from 'react-hook-form';
import { createTask } from '../api/ApiFunctions';
import {useNavigate, useParams} from 'react-router-dom';
import { deleteTask } from '../api/ApiFunctions';
import { useEffect } from 'react';
import { updateTask } from '../api/ApiFunctions';
import { getTask } from '../api/ApiFunctions';
import { toast } from 'react-hot-toast';

export function TaskFormPage() {

    const {register, handleSubmit, formState:{ errors }, setValue} = useForm();

    const navigate = useNavigate();
    
    const params = useParams();

    const submitForm = handleSubmit( async data => {
        if (params.title){
            await updateTask(params.title, data);
            toast.success("Task Updated");
        }
        else{
            await createTask(data);
            toast.success("Task Created");
        }
        navigate('/tasks');
    });

    useEffect(() => {

        async function loadTask(){

            if (params.title){
                const res = await getTask(params.title)
                setValue("title", res.data.title);
                setValue("description", res.data.description);
            }

        }
        loadTask();

    }, [params.title]);

    return (
        <div>
        
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Title" {...register("title", {required: true})}/>

                <br/>

                {errors.title && <span> Title is required </span>}

                <textarea  rows="3" placeholder="Description" {...register("description", {required: true})} />

                <br/>

                <button> Save </button>

                {errors.description && <span> Description is required </span>}

            </form>

            {params.title && <button onClick={async () => {
                const accept = window.confirm("Are you sure you want to delete this task?")
                if(accept){
                    await deleteTask(params.title);
                    toast.success("Task Deleted");
                    navigate('/tasks');
                }
            }}> Delete </button>}

        </div>
    );
}