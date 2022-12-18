import React from 'react';
import '../style/TodoItem.css';
import {HiCheckCircle, HiOutlineX, HiPencil} from "react-icons/hi";

const TodoItem = (props) => {
  return (
    <li className="TodoItem">                  
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}>
          <HiCheckCircle size='1.5em'/>
        </span>

        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>

        <span className='Icon Icon-edit' onClick={props.onEdit}>
          <HiPencil size='1.5em'/>
        </span>

        <span className="Icon Icon-delete"
        onClick={props.onDelete}>
          <HiOutlineX size='1.5em'/>
        </span>
    </li>
  )
}

export  {TodoItem}