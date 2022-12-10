import './App.css';
import React from 'react';

import { TodoCounter } from "../components/TodoCounter"; //* this is the name export {}
import { TodoSearch } from "../components/TodoSearch.jsx";
import { TodoList } from "../components/TodoList.jsx";
import { TodoItem } from "../components/TodoItem.jsx";
import { CreateTodoButton } from "../components/CreateTodoButton.jsx";
import { TodoForm } from '../components/TodoForm';

import { Modal } from '../Modal';

import { TodoLoading } from '../components/TodoLoading';

function useLocalStorage(itemName, initialValue) {

  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  //* execute after of render
  React.useEffect(() => {
    setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
            //*if not exist
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      
    }, 3000);
  });

  const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
  };
  

  return{
    item,
    saveItem,
    loading
  }
}


function App() {
        //*rename the returns
  const {item: todos, saveItem: saveTodos, loading} = useLocalStorage('TODOS_V1',[]);  

  const [openModal, setOpenModal] = React.useState(false);

  //* value   , function update value       initial value
  const [searchValue, setSearchValue] = React.useState('');

  
  const completedTodos = todos.filter(todo => !!todo.completed).length;//*if todo.completed == true
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    } );
  }

  
  const addTodo = (text)=>{
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    })
    saveTodos(newTodos);
    setOpenModal(prevState => !prevState );
  }

  const completetodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deletetodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);//* delete just 1 since this position
    saveTodos(newTodos);
  }

  return (
    <>
        <TodoCounter
            total={totalTodos}
            completed={completedTodos}
        />

        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />

        <TodoList>  
            {loading && <TodoLoading />}
            {(!loading && !searchedTodos.length) && <p>Create your first TO DO</p>}

            {searchedTodos.map(todo =>(//*identifier unique, key    //*propitiated text=
            <TodoItem key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={()=>completetodo(todo.text)}
            onDelete={()=>deletetodo(todo.text)}/>
            ))}
        </TodoList>

        {openModal && (
          <Modal>
            <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            />
          </Modal>
        )}

        <CreateTodoButton
        setOpenModal={setOpenModal}
        />

      </>
  );
}

export default App;
