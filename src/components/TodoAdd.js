import React from "react";
import {MdAddCircle} from 'react-icons/md';
import './TodoAdd.css';

const TodoAdd = ({onAddToggle}) => {
    return ( 
    <div>
        <div className="background" onClick={onAddToggle}></div>
        <form>
            <input></input>
            <button type="submit"><MdAddCircle /></button>
        </form>
    </div>
    )
};

export default TodoAdd;