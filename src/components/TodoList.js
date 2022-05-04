import React from "react";

const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map(<div>{todos.text}</div>)}
        </div>
    )
}

export default TodoList;