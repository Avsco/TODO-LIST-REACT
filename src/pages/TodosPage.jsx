import { useState } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';


export function TodoPage() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      priority: 1,
      isCompleted: false,
    },
    {
      text: 'Lear about Vue',
      priority: 2,
      isCompleted: false,
    },
  ]);

  const handleCreateTodo = (data) => {
    setTodos((todos) => [...todos, { ...data, isCompleted: false }])
  }

  const handleCompleteTodo = (todoText) => {
    setTodos((todos) =>
      todos.map(({ text, isCompleted }) => {
        if (todoText === text) return { text, isCompleted: !isCompleted };
        return { text, isCompleted };
      })
    );
  };


  

  return (
    <>
      <TodoForm onCreate={handleCreateTodo} />
      <TodoList todos={todos} onCompleteTodo={handleCompleteTodo} />
    </>
  );
}

