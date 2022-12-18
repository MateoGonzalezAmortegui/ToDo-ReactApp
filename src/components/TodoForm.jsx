import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/TodoForm.css';

const TodoForm = (props) => {

    const navigate = useNavigate();
    
const [newTodoValue, setTodoValue] = React.useState(props.defaultTodoText || '');

    //** Event onchange
    const onChange = (event) =>{
        setTodoValue(event.target.value);
    }

    const onCancel = () =>{
        //props.setOpenModal(prevState => !prevState );
        navigate(-1);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(newTodoValue.length <= 0){
            alert("The task is empty, write something");
            return; 
        }
        props.addTodo(newTodoValue);
        navigate(-1);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>

            {/** For do bigger the input and not horizontal*/}
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Do the homework!!"
            />

            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                Cancel
                </button>

                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                {props.submitText}
                </button>
            </div>
        </form>
    )
}

export {TodoForm}