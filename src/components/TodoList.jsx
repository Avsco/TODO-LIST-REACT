import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onCompleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.text} todo={todo} onCompleteTodo={onCompleteTodo} />
      ))}
    </ul>
  );
};
