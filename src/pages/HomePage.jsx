import './App.css';
import React from 'react';

import { TodoCounter } from "../components/TodoCounter"; //* this is the name export {}
import { TodoSearch } from "../components/TodoSearch.jsx";
import { TodoList } from "../components/TodoList.jsx";
import { TodoItem } from "../components/TodoItem.jsx";
import { CreateTodoButton } from "../components/CreateTodoButton.jsx";
//import { TodoForm } from '../components/TodoForm';
import { TodoHeader } from '../components/TodoHeader';

import { TodoLoading } from '../components/TodoLoading';

//import { Modal } from '../Modal';

import { useTodos } from '../hooks/useTodos';
import { useNavigate } from 'react-router-dom';


function HomePage() {

  const navigate = useNavigate();

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
    completetodo,
    deletetodo,
    setSearchValue,
  } = stateUpdaters;

  return (
    <>
        <TodoHeader loading={loading}>
          <TodoCounter
              total={totalTodos}
              completed={completedTodos}
          />

          <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
          />
        </TodoHeader>   
        
        <TodoList
            loading={loading}
            totalTodos={totalTodos}
            searchedTodos={searchedTodos}
            searchText={searchValue}
            
            onLoading={() => <TodoLoading />}
            onEmptyTodos={() => <p>Create your first TO DO</p>}
            onEmptySearchResults={
              (searchText) => <p>There aren't results for: "{searchText}"</p>
            }
            
            render={todo => (//*identifier unique, key    //*propitiated text=
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completetodo(todo.id)}
                onDelete={() => deletetodo(todo.id)}
                onEdit={()=> {
                  navigate('/edit/' + todo.id, 
                    {
                      state: {todo}
                    })
                }}
              />
            )}
        />

        {/*  
        {openModal && (
          <Modal>
            <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            />
          </Modal>
        )}
          */}

        <CreateTodoButton
        //setOpenModal={setOpenModal}
        onClick={()=> navigate('/new')}
        />

      </>
  );
}

export {HomePage}