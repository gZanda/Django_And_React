import {useForm} from 'react-hook-form';
import { createTask } from '../api/ApiFunctions';
import {useNavigate, useParams} from 'react-router-dom';
import { deleteTask } from '../api/ApiFunctions';

export function TaskFormPage() {

    const {register, handleSubmit, formState:{ errors }} = useForm();

    const navigate = useNavigate();
    
    const params = useParams();
    console.log(params);

    const submitForm = handleSubmit( async data => {
        const res = await createTask(data);
        console.log(res);
        navigate('/tasks');
    });

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
                    navigate('/tasks');
                }
            }}> Delete </button>}

        </div>
    );
}