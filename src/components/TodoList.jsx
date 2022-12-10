import React from 'react';
import '../style/TodoList.css';

const TodoList = (props) => {
  return (
    <section>
            <ul>
                {props.children}
            </ul>
    </section>
  )
}

export {TodoList}