import React, { useState } from "react";
import {MdAddCircle} from 'react-icons/md';
import './TodoAdd.css';

const TodoAdd = ({onAddToggle, onAddTodo}) => {
    const [value,setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAddTodo(value);
        setValue("");
        onAddToggle();
    }
    return ( 
    <div>
        <div className="background" onClick={onAddToggle}></div>
        <form onSubmit={onSubmit}>
            <input placeholder="Write Todo" value={value} onChange={onChange}></input>
            <button type="submit"><MdAddCircle /></button>
        </form>
    </div>
    )
};

export default TodoAdd;