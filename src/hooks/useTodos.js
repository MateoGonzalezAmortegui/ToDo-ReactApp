import React from 'react'
import { useLocalStorage } from './useLocalStorage'

function useTodos() {

    //*rename the returns
    const {item: todos, saveItem: saveTodos, loading} = useLocalStorage('TODOS_V2',[]);  

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
        const id = newTodoId(todos);

        const newTodos = [...todos];
        newTodos.push({
        completed: false,
        text,
        id
        })
        saveTodos(newTodos);
        setOpenModal(prevState => !prevState );
    }

    const completetodo = (id)=>{
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deletetodo = (id)=>{
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);//* delete just 1 since this position
        saveTodos(newTodos);
    }

    const editTodo = (id, newText)=>{
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
    }

    const getTodo = (id)=>{
        const todoIndex = todos.findIndex(todo => todo.id === id);
        return todos[todoIndex];
    }

    const state = {
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        openModal,
    };
    
    const stateUpdaters = {
        setSearchValue,
        addTodo,
        completetodo,
        deletetodo,
        editTodo,
        getTodo,
        setOpenModal,
    };
    
    return { state, stateUpdaters };
}

function newTodoId(todoList) {
    if (!todoList.length) {
        return 1;
    }
    const idList =todoList.map(todo => todo.id);
    const idMax = Math.max(...idList);
    return idMax+1;
}

export {useTodos}