import React, {useState} from 'react';
import './App.css';
import TodoBack from './components/TodoBack';
import TodoList from './components/TodoList';
import {MdAddCircle} from 'react-icons/md'
import TodoAdd from './components/TodoAdd';

const nextId = 4;
function App() {
  const [addToggle, setAddToggle] = useState(false);
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
  ]);
  
  const onCheckToggle = (id) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked } : todo))
  }

  const onAddToggle = () => {
    setAddToggle(prev => !prev);
  }

  const onAddTodo = (text) => {
    if(text === "") {
      return alert("할일을 입력해주세요")
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      }
      setTodos(todos => todos.concat(todo));
    }
  }
  return (
      <TodoBack todoLength={todos.length}>
        <TodoList todos={todos} onCheckToggle={onCheckToggle}/>
        <div className='add-todo-button' onClick={onAddToggle}>
          <MdAddCircle/>
        </div>
        {addToggle && <TodoAdd onAddToggle={onAddToggle} onAddTodo={onAddTodo}/>}
      </TodoBack>
  );
}

export default App;
