import React from "react";
import './TodoBack.css';

const TodoBack = ({children, todoLength}) => {
    return (
        <div className="TodoBack">
            <div className="title">오늘의 할일 ({todoLength})</div>
            <div>{children}</div>
        </div>
    )
}

export default TodoBack;