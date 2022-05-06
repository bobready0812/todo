import React, { useEffect, useState } from "react";
import {MdAddCircle} from 'react-icons/md';
import { TiTrash, TiPencil} from 'react-icons/ti';
import './TodoAdd.css';

const TodoAdd = ({onAddToggle, onUpdate, onAddTodo, selectedTodo, onChangeSelectedTodo, onRemove,}) => {
    const [value,setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onAddTodo(value);
        setValue("");
        onAddToggle();
        // saveTodos();
    };
    useEffect(() => {
        if(selectedTodo) {
            setValue(selectedTodo.text);
        }
    },[selectedTodo]);
    return ( 
    <div>
        <div className="background" onClick={() => {
            onAddToggle();
            onChangeSelectedTodo(null);
        }}></div>
        <form onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.id, value)} : onSubmit}>
            <input placeholder="Write Todo" value={value} onChange={onChange}></input>
            {selectedTodo  ? 
            <div className="rewrite">
            <TiPencil onClick={() => {onUpdate(selectedTodo.id, value)}}/>
            <TiTrash onClick={() => {onRemove(selectedTodo.id)}}/>
            </div> : 
            <button type="submit">
                <MdAddCircle />
            </button> 
            } 
        </form>
    </div>
    )
};

export default TodoAdd;