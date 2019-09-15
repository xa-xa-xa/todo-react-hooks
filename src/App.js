import React, { useState } from 'react';
import styles from './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className='todo'
      style={{
        textDecoration: todo.isCompleted ? 'line-through' : '',
        color: todo.isCompleted ? 'gray' : ''
      }}
    >
      {todo.text}
      <div>
        <button
          className='complete'
          onClick={() => completeTodo(index)}
          style={{ cursor: 'pointer' }}
        >
          &#10003;
        </button>
        <button
          className='remove'
          onClick={() => removeTodo(index)}
          style={{ cursor: 'pointer' }}
        >
          X
        </button>
      </div>
    </div>
  );
}

function TodoFrom({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='type to add a new TODO item...'
      />
    </form>
  );
}

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Lear react hooks.',
      isCompleted: false
    },
    {
      text: 'Lear how they worked.',
      isCompleted: false
    },
    {
      text: 'Lear how to build TODO app with react-hooks!',
      isCompleted: false
    }
  ]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        <h3>TODO app on REACT (HOOK's version)</h3>
        <TodoFrom addTodo={addTodo} className='todo_form'></TodoFrom>

        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}
