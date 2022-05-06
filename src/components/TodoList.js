import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({todos, onCheckToggle, onAddToggle, onChangeSelectedTodo}) => {
     

    return (
    <div className="TodoList">
        {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} onChangeSelectedTodo={onChangeSelectedTodo} onAddToggle={onAddToggle} onCheckToggle={onCheckToggle}/>
        ))}
    </div>
    )
};

export default TodoList;