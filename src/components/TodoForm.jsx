import React from 'react'
import '../style/TodoForm.css';

const TodoForm = (props) => {

    const [newTodoValue, setTodoValue] = React.useState('');

    //** Event onchange
    const onChange = (event) =>{
        setTodoValue(event.target.value);
    }

    const onCancel = () =>{
        props.setOpenModal(prevState => !prevState );
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(newTodoValue.length <= 0){
            alert("The task is empty, write something");
            return; 
        }
        props.addTodo(newTodoValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write you new TODO</label>

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
                Add
                </button>
            </div>
        </form>
    )
}

export {TodoForm}