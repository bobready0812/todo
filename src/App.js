import React, {useEffect, useState} from 'react';
import './App.css';
import TodoBack from './components/TodoBack';
import TodoList from './components/TodoList';
import {MdAddCircle} from 'react-icons/md'
import TodoAdd from './components/TodoAdd';
import New from './components/new';

let id = 0;
function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [addToggle, setAddToggle] = useState(false);
  const [todos, setTodos] = useState(() => {
    if(typeof window !== "undefined") {
      const saved = localStorage.getItem('todos');
      
      if(saved !== null) {
        return JSON.parse(saved);
      } else {
        return [];
      }
    }
  });



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
      console.log(todos);
      id++
    } 
  }
  return (
      <TodoBack todoLength={todos.length}>
        <TodoList setTodos={setTodos} todos={todos} onCheckToggle={onCheckToggle} onChangeSelectedTodo={onChangeSelectedTodo} onAddToggle={onAddToggle}/>
        <div className='add-todo-button' onClick={onAddToggle}>
          <MdAddCircle/>
        </div>
        {addToggle && <TodoAdd 
        // saveTodos={saveTodos}
        onRemove={onRemove}
        onChangeSelectedTodo={onChangeSelectedTodo} 
        selectedTodo={selectedTodo} 
        onAddToggle={onAddToggle} 
        onUpdate={onUpdate}
        onAddTodo={onAddTodo}/>}
        
       <New />
      </TodoBack>
  );
}

export default App;
