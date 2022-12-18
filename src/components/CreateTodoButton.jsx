import React from 'react';
import '../style/CreateButton.css';

const CreateTodoButton = (props) => {

  /*const onclickButton = () =>{
    props.setOpenModal(prevState => !prevState );
  }*/

  return (
    <button className="CreateTodoButton"
    onClick={//onclickButton
    props.onClick}>+</button>
  )
}

export {CreateTodoButton}