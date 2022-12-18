import React from 'react'
import { TodoForm } from '../components/TodoForm';
import { useTodos } from '../hooks/useTodos';

const NewTodoPage = () => {
  const {stateUpdaters} = useTodos();
  const {addTodo} = stateUpdaters;

  return (
    <TodoForm
      label="Write you new TODO"
      submitText="Add"
      addTodo={(newText)=>addTodo(newText)}
    />
  )
}

export {NewTodoPage}