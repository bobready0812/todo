import { useEffect } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({todos, onCheckToggle, onAddToggle, onChangeSelectedTodo, setTodos}) => {
     
    useEffect(()=> {
        saveTodos();
    }, [todos]);

    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
     
    return (
    <div className="TodoList">
        {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} onChangeSelectedTodo={onChangeSelectedTodo} onAddToggle={onAddToggle} onCheckToggle={onCheckToggle}/>
        ))}
    </div>
    )
};

export default TodoList;