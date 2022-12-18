import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../components/TodoForm';
import { useTodos } from '../hooks/useTodos';
import { TodoLoading } from '../components/TodoLoading';

const EditTodoPage = () => {
  const location = useLocation();

  const {stateUpdaters, state} = useTodos()
  const {loading} = state;
  const {editTodo, getTodo} = stateUpdaters;

  const params = useParams();
  const id = Number(params.id);

  let todoText;

  if (location.state && location.state.todo) {
    todoText=location.state.todo.text;
  }else if(loading){
    return <TodoLoading/>
  }else{
    const todo = getTodo(id)
    todoText=todo.text;
  }  

  return (
    <TodoForm
      label="Edit your TODO"
      submitText="Confirm"
      defaultTodoText={todoText}
      addTodo={(newText)=>editTodo(id, newText)}
    />
  )
}

export {EditTodoPage}