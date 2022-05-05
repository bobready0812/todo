import React, {useState} from 'react';
import './App.css';
import TodoBack from './components/TodoBack';
import TodoList from './components/TodoList';
import {MdAddCircle} from 'react-icons/md'
import TodoAdd from './components/TodoAdd';


function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"할일 1",
      checked:true,
    },
    {
      id:2,
      text:"할일 2",
      checked:false,
    },
    {
      id:3,
      text:"할일 3",
      checked:true,
    },
  ])
  return (
      <TodoBack todoLength={todos.length}>
        <TodoList todos={todos}/>
        <div className='add-todo-button'>
          <MdAddCircle/>
        </div>
        <TodoAdd/>
      </TodoBack>
  );
}

export default App;
