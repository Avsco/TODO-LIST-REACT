export const TodoItem = ({ todo, onCompleteTodo }) => {
  return (
    <li>
      {todo.text} - {todo.isCompleted ? 'Completado' : 'No completado'}
      <button onClick={() => onCompleteTodo(todo.text)}>
        {todo.isCompleted ? 'Deshacer' : 'Completar'}
      </button>
    </li>
  );
};
