import React from 'react';
import '../style/todoCounter.css';

const TodoCounter = ({total, completed, loading}) => {
  return (
    <h2 className={`todoCounter ${loading && "todoCounter__loading"}`}> You've completed {completed} of {total} ToDos</h2>
  )
}

export {TodoCounter} //*for have to called this this component