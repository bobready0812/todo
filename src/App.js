import React, {useState} from 'react';
import './App.css';
import TodoBack from './components/TodoBack';
import TodoList from './components/TodoList';
import {MdAddCircle} from 'react-icons/md'
import TodoAdd from './components/TodoAdd';

let id = 0;
function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [addToggle, setAddToggle] = useState(false);
  const [todos, setTodos] = useState([]);
  
  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getTodos = () => {
    localStorage.getItem('todos');
  }
  
  const onCheckToggle = (id) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked } : todo))
  }

  const onAddToggle = () => {
    setAddToggle(prev => !prev);
  }

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo)
  }
  
  const onUpdate = (id,text) => {
    onAddToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo) );
  }

  const onRemove = (id) => {
    onAddToggle();
    setSelectedTodo(null);
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  const onAddTodo = (text) => {
    if(text === "") {
      return alert("할일을 입력해주세요")
    } else {
      const todo = {
        id,
        text,
        checked: false,
      }
      setTodos(todos => todos.concat(todo));
      id++
    }
  }
  return (
      <TodoBack todoLength={todos.length}>
        <TodoList todos={todos} onCheckToggle={onCheckToggle} onChangeSelectedTodo={onChangeSelectedTodo} onAddToggle={onAddToggle}/>
        <div className='add-todo-button' onClick={onAddToggle}>
          <MdAddCircle/>
        </div>
        {addToggle && <TodoAdd 
        onRemove={onRemove}
        onChangeSelectedTodo={onChangeSelectedTodo} 
        selectedTodo={selectedTodo} 
        onAddToggle={onAddToggle} 
        onUpdate={onUpdate}
        onAddTodo={onAddTodo}/>}
       
      </TodoBack>
  );
}

export default App;
