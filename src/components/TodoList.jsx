import { useStoreTodo } from '../store/todos';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const completeTodo = useStoreTodo((state) => state.completeTodo)
  const todos = useStoreTodo((state) => state.todos)

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.text} todo={todo} onCompleteTodo={completeTodo} />
      ))}
    </ul>
  );
};
