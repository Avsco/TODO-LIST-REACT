import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Lear about Vue',
      isCompleted: false,
    },
  ]);

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
      <TodoForm />

      <TodoList todos={todos} onCompleteTodo={handleCompleteTodo} />
    </>
  );
}

export default App;
