import React from 'react';
import '../style/TodoList.css';

const TodoList = (props) => {
  return (
    <section>
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      {props.searchedTodos.map(props.render)}
    </section>
  )
}

export {TodoList}