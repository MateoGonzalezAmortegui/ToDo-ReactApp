import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import {EditTodoPage} from './EditTodoPage'
import { NewTodoPage } from './NewTodoPage';
import { HomePage } from './HomePage';

import { useTodos } from '../hooks/useTodos';
function App() {
  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    openModal,
    searchValue,
  } = state;
  
  const {
    setOpenModal,
    addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/new' element={<NewTodoPage/>}/>
          <Route path='/edit/:id' element={<EditTodoPage/>}/>
          <Route path='*' element={<p>Not found</p>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
